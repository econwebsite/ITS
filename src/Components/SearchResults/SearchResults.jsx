import React, { useMemo, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Fuse from 'fuse.js';
import { FiArrowRightCircle, FiExternalLink } from 'react-icons/fi';
import './SearchResults.css';
import { siteSearchIndex } from '../../utils/siteSearchIndex';
import { blogSearchIndex } from '../../utils/blogSearchIndex';
import { videoSearchIndex } from '../../utils/videoHubData';
import { searchByKeywords } from '../../utils/searchUtils';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = (searchParams.get('q') || '').trim();
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const pageSearchEngine = useMemo(() => new Fuse(siteSearchIndex, {
    keys: ['title', 'description', 'keywords'],
    threshold: 0.34,
    ignoreLocation: true,
    minMatchCharLength: 2,
  }), []);

  const blogSearchEngine = useMemo(() => new Fuse(blogSearchIndex, {
    keys: ['title', 'description', 'keywords'],
    threshold: 0.36,
    ignoreLocation: true,
    minMatchCharLength: 2,
  }), []);

  const videoSearchEngine = useMemo(() => new Fuse(videoSearchIndex, {
    keys: ['title', 'description', 'keywords'],
    threshold: 0.36,
    ignoreLocation: true,
    minMatchCharLength: 2,
  }), []);

  const pageResults = useMemo(() => {
    return searchByKeywords(pageSearchEngine, query, 'path', 30);
  }, [pageSearchEngine, query]);

  const blogResults = useMemo(() => {
    return searchByKeywords(blogSearchEngine, query, 'url', 20);
  }, [blogSearchEngine, query]);

  const videoResults = useMemo(() => {
    return searchByKeywords(videoSearchEngine, query, 'url', 20);
  }, [videoSearchEngine, query]);

  const hasQuery = query.length >= 2;
  const hasAnyResult = pageResults.length > 0 || blogResults.length > 0 || videoResults.length > 0;

  const pageCategoryOrder = ['Products', 'Solutions', 'Resources', 'Pages'];

  const groupedPageResults = useMemo(() => {
    return pageResults.reduce((acc, item) => {
      let category = item.category;

      if (!category) {
        if (item.path.startsWith('/products/')) {
          category = 'Products';
        } else if (item.path.startsWith('/solutions/')) {
          category = 'Solutions';
        } else if (item.path === '/blog' || item.path === '/videos' || item.path === '/case-study') {
          category = 'Resources';
        } else {
          category = 'Pages';
        }
      }

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(item);
      return acc;
    }, {});
  }, [pageResults]);

  const pageCategoriesWithResults = useMemo(() => {
    return pageCategoryOrder.filter((category) => (groupedPageResults[category] || []).length > 0);
  }, [groupedPageResults]);

  const dynamicSearchHeading = useMemo(() => {
    const singlePageCategoryOnly =
      pageCategoriesWithResults.length === 1 &&
      blogResults.length === 0 &&
      videoResults.length === 0;

    if (singlePageCategoryOnly) {
      return pageCategoriesWithResults[0];
    }

    return 'Search';
  }, [pageCategoriesWithResults, blogResults.length, videoResults.length]);

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmedQuery = localQuery.trim();

    if (trimmedQuery.length < 2) {
      navigate('/search');
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div className="search-results-page">
      <Helmet>
        <title>Search Results</title>
        <meta
          name="description"
          content="Search results across pages, solutions, products and blogs."
        />
      </Helmet>

      <div className="search-results-shell">
        <header className="search-results-header">
          <h1>{dynamicSearchHeading}</h1>
          <form className="search-results-form" onSubmit={handleSearch}>
            <input
              type="text"
              value={localQuery}
              onChange={(event) => setLocalQuery(event.target.value)}
              placeholder="Search pages, products, solutions and blogs"
              aria-label="Search"
            />
            <button type="submit">Search</button>
          </form>
          <p className="search-results-query">
            {hasQuery ? `About ${pageResults.length + blogResults.length + videoResults.length} results for "${query}"` : 'Type at least 2 characters to search.'}
          </p>
        </header>

        {hasQuery && !hasAnyResult && (
          <div className="search-results-empty">
           <h2>No Results Found</h2>
<p>We couldn't find any matches for your search.</p>
          </div>
        )}

        {pageCategoriesWithResults.map((category) => (
          <section className="search-results-section" aria-label={`Matching ${category.toLowerCase()}`} key={category}>
            <h2>{category}</h2>
            <div className="search-results-list">
              {(groupedPageResults[category] || []).map((item) => (
                <article className="search-result-item" key={item.path}>
                  <h3 className="search-result-title">{item.title}</h3>
                  <p>{item.description || item.title}</p>
                  <Link className="search-result-link" to={item.path}>
                    <FiArrowRightCircle className="search-result-link-icon" />
                    Open page
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}

        {blogResults.length > 0 && (
          <section className="search-results-section" aria-label="Matching blogs">
            <h2>Related Blogs</h2>
            <div className="search-results-list">
              {blogResults.map((blog) => (
                <article className="search-result-item search-blog-item" key={blog.url}>
                  <div className="search-blog-content">
                    <h3 className="search-result-title">{blog.title}</h3>
                    <p>{blog.description}</p>
                    <a className="search-result-link" href={blog.url} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="search-result-link-icon" />
                      Open blog
                    </a>
                  </div>
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="search-blog-image-link">
                    <img src={blog.image} alt={blog.title} className="search-blog-image" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {videoResults.length > 0 && (
          <section className="search-results-section" aria-label="Matching videos">
            <h2>Related Videos</h2>
            <div className="search-results-list">
              {videoResults.map((video) => (
                <article className="search-result-item search-blog-item" key={video.url}>
                  <div className="search-blog-content">
                    <h3 className="search-result-title">{video.title}</h3>
                    <p>{video.description}</p>
                    <a className="search-result-link" href={video.url} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="search-result-link-icon" />
                      Open video
                    </a>
                  </div>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="search-blog-image-link">
                    <img src={video.image} alt={video.title} className="search-blog-image" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
