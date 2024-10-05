import React, { useState, useEffect } from "react";
import "./RestaurantsTab.scss";

interface Restaurant {
  id_restaurant: number;
  nom: string;
  email: string;
  phone: string;
  adresse: string;
}

interface RestaurantsTabProps {
  onTabChange: (tab: string) => void;
}

function RestaurantsTab({ onTabChange }: RestaurantsTabProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurants');
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      } else {
        console.error('Erreur lors de la récupération des restaurants');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce restaurant ?")) {
      try {
        const response = await fetch(`/api/restaurants/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setRestaurants(restaurants.filter(restaurant => restaurant.id_restaurant !== id));
        } else {
          console.error('Erreur lors de la suppression du restaurant');
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    }
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="users-tab">
      <div className="users-tab__container">
        <div className="users-tab__container__header">
          <h2>Restaurants</h2>
          <div className="users-tab__container__header__search">
            <div className="users-tab__container__header__search__input">
              <input 
                type="text" 
                placeholder="Search users" 
                value={searchTerm}
                onChange={handleSearch}
              />
              <button type="button">Search</button>
            </div>

            <div className="users-tab__container__header__search__addUser">
              <button onClick={() => onTabChange("AddRestaurant")}>Add Restaurant</button>
            </div>
          </div>
        </div>

        <div className="users-tab__content__body">
          <table className="users-tab__content__body__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRestaurants.map((restaurant) => (
                <tr key={restaurant.id_restaurant}>
                  <td>{restaurant.nom}</td>
                  <td>{restaurant.email}</td>
                  <td>{restaurant.phone}</td>
                  <td>
                    <address>{restaurant.adresse}</address>
                  </td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(restaurant.id_restaurant)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RestaurantsTab;
