import React from 'react';
import { Helmet } from 'react-helmet-async';
import Homebanner from './Homebanner/Homebanner';
import Paragraph from "./Paragraphcomp/Paragraph"
import ProductCards from "./Productcomp/Productcards"
import Industries from "./Industriescomp/Industries"
import Tabs from "../Homecomp/Resourcecomp/Tabcomp/Tabs"

const Homepage = () => {
    return (
        <div>
            <Helmet>
      <title>Home | My App</title>
      <meta name="description" content="This is the homepage" />
    </Helmet>
    <Homebanner/>
    <Paragraph/>
    <ProductCards/>
    <Industries/>
    <Tabs/>
        </div>
    );
}

export default Homepage;
