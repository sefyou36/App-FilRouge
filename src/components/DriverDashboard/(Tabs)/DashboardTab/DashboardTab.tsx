import React from "react";
import "./DashboardTab.scss";

function DashboardTab() {
  return (
    <section className="dashboard-tab">
      <div className="dashboard-tab__container">
        <div className="dashboard-tab__container__items">
          <div className="dashboard-tab__container__items__item">
            <span>120</span>
            <h3>Total Orders</h3>
          </div>
          <div className="dashboard-tab__container__items__item">
            <span>$1.400</span>
            <h3></h3>
          </div>
          <div className="dashboard-tab__container__items__item">
            <span>3</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardTab;
