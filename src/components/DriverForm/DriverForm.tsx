"use client";

import React from "react";
import { useState } from "react";
import "./DriverForm.scss";

interface DriverFormProps {
  onSubmit: (formData: DriverFormData) => void;
}

interface DriverFormData {
  name: string;
  email: string;
  phoneNumber: string;
  licenseNumber: string;
  vehicleType: string;
  licensePlate: string;
  experience: number;
  profilePicture?: File | null;
}

const DriverForm: React.FC<DriverFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<DriverFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    licenseNumber: "",
    vehicleType: "",
    licensePlate: "",
    experience: 0,
    profilePicture: null,
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
      profilePicture: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="driver-form">
      <h2 className="driver-form__title">Driver Information</h2>
      <p className="driver-form__subtitle ">
        Fill out the form below to submit a driver.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="form__group_label_input">
            <label htmlFor="name">Drivers Name</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form__group">
          <div className="form__group__phone_licence">
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

          <div className="form__group__phone_licence">
            <label htmlFor="licenseNumber">Drivers License Number</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form__group">
          <div className="form__group__vehicle_licence">
            <label htmlFor="vehicleType">Vehicle Type</label>
            <input
              type="text"
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form__group__vehicle_licence">
            <label htmlFor="licensePlate">License Plate Number</label>
            <input
              type="text"
              id="licensePlate"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form__group">
          <div className="form__group_exp-image">
            <label htmlFor="experience">Years of Experience</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              min="0"
              required
            />
          </div>

          <div className="form__group_exp-image">
            <label htmlFor="profilePicture">Upload Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
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

export default DriverForm;
