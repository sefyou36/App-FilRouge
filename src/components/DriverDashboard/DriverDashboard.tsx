import React, { useState, useEffect } from "react";
import "./DriverDashboard.scss";
import DashboardTab from "./(Tabs)/DashboardTab/DashboardTab";
import OrdersDashboard from "./(Tabs)/OrdersDashboard/OrdersDashboard";
import ShortBackground from "../ShortBackground/ShortBackground";

function DriverDashboard() {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");
  const [driverData, setDriverData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log("DriverDashboard rendu");

  useEffect(() => {
    console.log("useEffect déclenché");
    let isMounted = true;
    
    const fetchDriverData = async () => {
      try {
        const response = await fetch('/api/driver-data');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données du livreur');
        }
        const data = await response.json();
        console.log("Données reçues:", data);
        if (isMounted) {
          setDriverData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erreur:', error);
        if (isMounted) {
          setError("Impossible de charger les données du livreur");
          setLoading(false);
        }
      }
    };

    fetchDriverData();

    return () => {
      isMounted = false;
      console.log("Nettoyage du useEffect");
    };
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <>
      <ShortBackground
        title="Tableau de bord du livreur"
        background="/images/hero_delivery.jpg"
      />
      <section className="driver-dashboard">
        <div className="driver-dashboard__container">
          <aside className="driver-dashboard__sidebar">
            <div className="driver-dashboard__sidebar__items">
              <ul>
                <li
                  onClick={() => handleTabChange("Dashboard")}
                  className={activeTab === "Dashboard" ? "active" : ""}
                >
                  Tableau de bord
                </li>
                <li
                  onClick={() => handleTabChange("Orders")}
                  className={activeTab === "Orders" ? "active" : ""}
                >
                  Commandes
                </li>
              </ul>
            </div>
          </aside>
          <main className="driver-dashboard__content">
            {activeTab === "Dashboard" ? (
              <DashboardTab driver-Data={driverData} />
            ) : (
              <OrdersDashboard />
            )}
          </main>
        </div>
      </section>
    </>
  );
}

export default DriverDashboard;
