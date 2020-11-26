import React from 'react';
import "./Tabs.css"
import Tab from "./Tab/Tab";
const tabs = () => {
    return (
        <div className="tabsContainer"> 
            <ul className="Tabs">
              <Tab link ="/" exact>
                Interaction
              </Tab>
              <Tab link="/analytics">
                Analytics
              </Tab>
            </ul>
        </div>
       
    );
}

export default tabs;