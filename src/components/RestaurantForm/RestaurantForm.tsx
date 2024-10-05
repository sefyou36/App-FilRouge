"use client";

import React from "react";
import "./RestaurantForm.scss";
import { useState } from "react";

interface RestaurantFormProps {
  onSubmit: (formData: RestaurantFormData) => void;
}

interface RestaurantFormData {
  name: string;
  address: string;
  hours: {
    start: string;
    end: string;
  };
  phoneNumber: string;
  email: string;
  description: string;
  cuisine: string;
  rating?: number;
  image?: File | null;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: "",
    address: "",
    hours: { start: "", end: "" },
    phoneNumber: "",
    email: "",
    description: "",
    cuisine: "",
    rating: undefined,
    image: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="restaurant-form">
      <h2 className="restaurant-form__title">Submit Your Restaurant</h2>
      <p className="restaurant-form__subtitle">
        Fill out the form below to submit your restaurant to our directory for
        free and get more customers.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="form__group_label_input">
            <label htmlFor="name">Restaurant Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form__group_label_input">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form__group">
          <div className="form__group__time">
            <label htmlFor="hours-start">Operating Hours (Start)</label>
            <input
              type="time"
              id="hours-start"
              name="hoursStart"
              value={formData.hours.start}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hours: { ...formData.hours, start: e.target.value },
                })
              }
              required
            />
          </div>

          <div className="form__group__time">
            <label htmlFor="hours-end">Operating Hours (End)</label>
            <input
              type="time"
              id="hours-end"
              name="hoursEnd"
              value={formData.hours.end}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hours: { ...formData.hours, end: e.target.value },
                })
              }
              required
            />
          </div>
        </div>

        <div className="form__group">
          <div className="form__group__phone_website">
            <label htmlFor="website">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group__phone_website">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{10}"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form__group--textarea">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
          />
        </div>

        <div className="form__group">
          <div className="form__group_type-image">
            <label htmlFor="cuisine">Cuisine Type</label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form__group_type-image form__group--file">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="form__group--button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default RestaurantForm;
