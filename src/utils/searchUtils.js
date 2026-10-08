const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how',
  'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'this', 'to', 'with',
  'need', 'show', 'page', 'pages'
]);

export const tokenizeQuery = (query) => {
  if (!query) {
    return [];
  }

  return query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2 && !STOP_WORDS.has(token));
};

const normalizeText = (value) => (value || '').toLowerCase();

const toTokenSet = (value) => {
  return new Set(
    normalizeText(value)
      .split(/[^a-z0-9]+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 2)
  );
};

const getItemIntentTokens = (item) => {
  const tokenSet = new Set();
  const keywordPhrases = [];

  const addTokens = (value) => {
    toTokenSet(value).forEach((token) => tokenSet.add(token));
  };

  addTokens(item.title);
  addTokens(item.category);

  (item.keywords || []).forEach((keyword) => {
    const phrase = normalizeText(keyword).trim();
    if (phrase) {
      keywordPhrases.push(phrase);
    }
    addTokens(keyword);
  });

  return { tokenSet, keywordPhrases };
};

const tokenMatchesIntent = (queryToken, intentToken) => {
  if (!queryToken || !intentToken) {
    return false;
  }

  if (queryToken === intentToken) {
    return true;
  }

  // Allow useful partial intent matches (e.g. "enforce" -> "enforcement").
  if (queryToken.length >= 4 && intentToken.startsWith(queryToken)) {
    return true;
  }

  return intentToken.length >= 4 && queryToken.startsWith(intentToken);
};

const isIntentMatch = (item, tokens, normalizedQuery) => {
  if (!item || tokens.length === 0) {
    return false;
  }

  const { tokenSet, keywordPhrases } = getItemIntentTokens(item);

  const hasPhraseMatch =
    normalizedQuery.length >= 3 &&
    keywordPhrases.some((phrase) => phrase.includes(normalizedQuery));

  if (hasPhraseMatch) {
    return true;
  }

  return tokens.every((queryToken) => {
    for (const intentToken of tokenSet) {
      if (tokenMatchesIntent(queryToken, intentToken)) {
        return true;
      }
    }

    return false;
  });
};

export const searchByKeywords = (fuseEngine, query, resultKey, limit = 20) => {
  const trimmedQuery = (query || '').trim();
  if (trimmedQuery.length < 2) {
    return [];
  }

  const tokens = tokenizeQuery(trimmedQuery);
  if (tokens.length === 0) {
    return [];
  }

  const candidateQueries = Array.from(new Set(tokens));
  const resultMap = new Map();
  const normalizedQuery = normalizeText(trimmedQuery);

  candidateQueries.forEach((candidate) => {
    fuseEngine.search(candidate, { limit: Math.max(limit * 3, 30) }).forEach((match) => {
      const item = match.item;
      const key = item[resultKey];

      if (!key) {
        return;
      }

      if (!isIntentMatch(item, tokens, normalizedQuery)) {
        return;
      }

      const existing = resultMap.get(key);

      if (!existing) {
        resultMap.set(key, {
          item,
          score: typeof match.score === 'number' ? match.score : 1,
          hitCount: 1,
        });
        return;
      }

      existing.hitCount += 1;
      if (typeof match.score === 'number' && match.score < existing.score) {
        existing.score = match.score;
      }
    });
  });

  return Array.from(resultMap.values())
    .sort((a, b) => {
      if (b.hitCount !== a.hitCount) {
        return b.hitCount - a.hitCount;
      }
      return a.score - b.score;
    })
    .slice(0, limit)
    .map((entry) => entry.item);
};
