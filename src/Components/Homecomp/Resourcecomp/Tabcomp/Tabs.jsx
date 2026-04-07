import React, { useState } from "react";
import Videos from "../Videoscomp/Videostab";
import Blogs from "../Blogcomp/Blogs";
import CaseStudies from "../Casestudycomp/CaseStudies";
import './Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Case Studies");

  const renderComponent = () => {
    switch (activeTab) {
      case "Videos":
        return <Videos />;
      case "Blogs":
        return <Blogs />;
      case "Case Studies":
        return <CaseStudies />;
      default:
        return  <Videos />;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        {["Case Studies", "Videos", "Blogs"].map((tab) => (
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
