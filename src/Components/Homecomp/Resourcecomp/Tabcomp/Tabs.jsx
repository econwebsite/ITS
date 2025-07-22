import React, { useState } from "react";
import Applications from "../Applicationcomp/Application";
import Videos from "../Videoscomp/Videostab";
import Blogs from "../Blogcomp/Blogs";
import CaseStudies from "../Casestudycomp/CaseStudies";
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Applications");

  const renderComponent = () => {
    switch (activeTab) {
      case "Applications":
        return <Applications />;
      case "Videos":
        return <Videos />;
      case "Blogs":
        return <Blogs />;
      case "Case Studies":
        return <CaseStudies />;
      default:
        return <Applications />;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        {["Applications", "Videos", "Blogs", "Case Studies"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderComponent()}</div>
    </div>
  );
};

export default Tabs;
