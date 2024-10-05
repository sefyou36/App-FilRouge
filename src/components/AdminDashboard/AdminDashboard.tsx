/* eslint-disable react/react-in-jsx-scope */
"use client";

import React from "react";
import { useState } from "react";
import "./AdminDashboard.scss";
import DashboardTab from "./(Tabs)/DashboardTab/DashboardTab";
import UsersTab from "./(Tabs)/UsersTab/UsersTab";
import RestaurantsTab from "./(Tabs)/RestaurantsTab/RestaurantsTab";
import DriversOrdersTab from "./(Tabs)/DriversOrdersTab/DriversOrdersTab";
import RestaurantsOrdersTab from "./(Tabs)/RestaurantsOrdersTab/RestaurantsOrdersTab";
import ShortBackground from "../ShortBackground/ShortBackground";
import AddUserTab from "./(Tabs)/AddUserTab/AddUserTab";
import AddRestaurantTab from "./(Tabs)/AddRestaurantTab/AddRestaurantTab";
import ProtectedRoute from '../common/ProtectedRoute/ProtectedRoute';

function AdminDashboard() {
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
      case "Users":
        return <UsersTab />;
      case "AddUser":
        return <AddUserTab />;
      case "Restaurants":
        return <RestaurantsTab onTabChange={handleTabChange} />;
      case "AddRestaurant":
        return <AddRestaurantTab />;
      case "DriversOrders":
        return <DriversOrdersTab />;
      case "RestaurantsOrders":
        return <RestaurantsOrdersTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <ShortBackground
        title="Admin Dashboard"
        background="/images/hero_admin.jpg"
      />
      <section className="admin-dashboard">
        <div className="admin-dashboard__container">
          <aside className="admin-dashboard__sidebar">
            <div className="admin-dashboard__sidebar__items">
              <ul>
                <li
                  onClick={() => handleTabChange("Dashboard")}
                  className={activeTab === "Dashboard" ? "active" : ""}
                >
                  Dashboard
                </li>
                <li
                  onClick={() => handleTabChange("Users")}
                  className={activeTab === "Users" ? "active" : ""}
                >
                  Users
                </li>
                <li
                  onClick={() => handleTabChange("AddUser")}
                  className={activeTab === "AddUser" ? "active" : ""}
                >
                  Add User
                </li>
                <li
                  onClick={() => handleTabChange("Restaurants")}
                  className={activeTab === "Restaurants" ? "active" : ""}
                >
                  Restaurants
                </li>
                <li
                  onClick={() => handleTabChange("AddRestaurant")}
                  className={activeTab === "AddRestaurant" ? "active" : ""}
                >
                  Add Restaurant
                </li>
                <li
                  onClick={() => handleTabChange("DriversOrders")}
                  className={activeTab === "DriversOrders" ? "active" : ""}
                >
                  Drivers Orders
                </li>
                <li
                  onClick={() => handleTabChange("RestaurantsOrders")}
                  className={activeTab === "RestaurantsOrders" ? "active" : ""}
                >
                  Restaurants Orders
                </li>
              </ul>
            </div>
          </aside>
          <main className="admin-dashboard__content">{renderContent()}</main>
        </div>
      </section>
    </ProtectedRoute>
  );
}

export default AdminDashboard;
