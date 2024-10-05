import React from "react";

import "./RestaurantsOrdersTab.scss";

function RestaurantsOrdersTab() {
  return (
    <section className="restaurants-orders-tab">
      <div className="restaurants-orders-tab__container">
        <div className="restaurants-orders-tab__container__header">
          <h2 className="restaurants-orders-tab__container__header__title">
            Restaurants Orders
          </h2>
        </div>
        <table className="restaurants-orders-tab__container__body__table">
          <thead>
            <tr>
              <th>Restaurant name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Cuisine Type</th>
              <th>Operating Hours (Start)</th>
              <th>Operating Hours (End)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Restaurant 1</td>
              <td>restaurant1@gmail.com</td>
              <td>1234567890</td>
              <td>123 Main St</td>
              <td>Italian</td>
              <td>10:00 AM</td>
              <td>10:00 PM</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Restaurant 1</td>
              <td>restaurant1@gmail.com</td>
              <td>1234567890</td>
              <td>123 Main St</td>
              <td>Italian</td>
              <td>10:00 AM</td>
              <td>10:00 PM</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Restaurant 1</td>
              <td>restaurant1@gmail.com</td>
              <td>1234567890</td>
              <td>123 Main St</td>
              <td>Italian</td>
              <td>10:00 AM</td>
              <td>10:00 PM</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Restaurant 1</td>
              <td>restaurant1@gmail.com</td>
              <td>1234567890</td>
              <td>123 Main St</td>
              <td>Italian</td>
              <td>10:00 AM</td>
              <td>10:00 PM</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Restaurant 1</td>
              <td>restaurant1@gmail.com</td>
              <td>1234567890</td>
              <td>123 Main St</td>
              <td>Italian</td>
              <td>10:00 AM</td>
              <td>10:00 PM</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RestaurantsOrdersTab;
