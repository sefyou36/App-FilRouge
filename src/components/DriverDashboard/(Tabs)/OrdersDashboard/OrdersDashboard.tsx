import React from "react";
import "./OrdersDashboard.scss";

function OrdersDashboard() {
  return (
    <section className="orders-dashboard">
      <div className="orders-dashboard__container">
        <table className="orders-dashboard__container__table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Restaurant</th>
              <th>Customer</th>
              <th>Order Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>McDonalds</td>
              <td>John Doe</td>
              <td>Delivered</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Subway</td>
              <td>Jane Doe</td>
              <td>Delivered</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Wendys</td>
              <td>John Doe</td>
              <td>Delivered</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrdersDashboard;
