"use client";

import React, { useState } from "react";
import "./RestaurantDashboard.scss";
import ShortBackground from "../ShortBackground/ShortBackground";
import DashboardTab from "./(Tabs)/DashboardTab/DashboardTab";
import ProductsTab from "./(Tabs)/ProductsTab/ProductsTab";
import AddProductTab from "./(Tabs)/AddProductTab/AddProductTab";
import AddCategoryTab from "./(Tabs)/AddCategoryTab/AddCategoryTab";
import ProtectedRoute from '../common/ProtectedRoute/ProtectedRoute';

function RestaurantDashboard() {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  // Function to handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardTab />;
      case "Products":
        return <ProductsTab />;
      case "AddProduct":
        return <AddProductTab />;
      case "AddCategory":
        return <AddCategoryTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <ProtectedRoute requiredRole="restaurant">
      <ShortBackground
        title="Restaurant Dashboard"
        background="/images/hero_restaurant_dashboard.jpg"
      />
      <section className="restaurant-dashboard">
        <div className="restaurant-dashboard__container">
          <aside className="restaurant-dashboard__sidebar">
            <div className="restaurant-dashboard__sidebar__items">
              <ul>
                <li
                  onClick={() => handleTabChange("Dashboard")}
                  className={activeTab === "Dashboard" ? "active" : ""}
                >
                  Dashboard
                </li>
                <li
                  onClick={() => handleTabChange("Products")}
                  className={activeTab === "Products" ? "active" : ""}
                >
                  Products
                </li>
                <li
                  onClick={() => handleTabChange("AddProduct")}
                  className={activeTab === "AddProduct" ? "active" : ""}
                >
                  Add Product
                </li>
                <li
                  onClick={() => handleTabChange("AddCategory")}
                  className={activeTab === "AddCategory" ? "active" : ""}
                >
                  Add Category
                </li>
              </ul>
            </div>
          </aside>
          <main className="restaurant-dashboard__content">
            {renderContent()}
          </main>
        </div>
      </section>
    </ProtectedRoute>
  );
}

export default RestaurantDashboard;
