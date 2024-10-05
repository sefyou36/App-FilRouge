import React from "react";
import "./DriversOrdersTab.scss";

function DriversOrdersTab() {
  return (
    <section className="drivers-orders-tab">
      <div className="drivers-orders-tab__container">
        <div className="drivers-orders-tab__container__header">
          <h2 className="drivers-orders-tab__container__header__title">
            Drivers Orders
          </h2>
        </div>
        <table className="drivers-orders-tab__container__body__table">
          <thead>
            <tr>
              <th>Driver name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>License Number</th>
              <th>Vehicle Type</th>
              <th>License Plate Number</th>
              <th>Years of Experience</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>jhon@gmail.com</td>
              <td>123456789</td>
              <td>
                <address>1234 Main St</address>
              </td>
              <td>123456789</td>
              <td>Car</td>
              <td>123456789</td>
              <td>5</td>
              <td>
                <img src="https://via.placeholder.com/150" alt="Driver" />
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>jhon@gmail.com</td>
              <td>123456789</td>
              <td>
                <address>1234 Main St</address>
              </td>
              <td>123456789</td>
              <td>Car</td>
              <td>123456789</td>
              <td>5</td>
              <td>
                <img src="https://via.placeholder.com/150" alt="Driver" />
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>jhon@gmail.com</td>
              <td>123456789</td>
              <td>
                <address>1234 Main St</address>
              </td>
              <td>123456789</td>
              <td>Car</td>
              <td>123456789</td>
              <td>5</td>
              <td>
                <img src="https://via.placeholder.com/150" alt="Driver" />
              </td>
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

export default DriversOrdersTab;
