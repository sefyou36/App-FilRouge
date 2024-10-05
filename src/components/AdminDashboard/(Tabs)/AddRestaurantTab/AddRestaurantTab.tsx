import React, { useState } from "react";
import "./AddRestaurantTab.scss";

function AddRestaurantTab() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    phone: "",
    adresse: "",
    city: "",
    postalCode: "",
    hoursStart: "",
    hoursEnd: "",
    website: "",
    type_cuisine: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [icon, setIcon] = useState<File | null>(null);

  const cuisineTypes = [
    "All",
    "Hamburger",
    "Mexican",
    "Salad",
    "Pizza",
    "BBQ",
    "Sandwich",
    "Meat",
    "Chicken",
    "Fish",
    "Ramen"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.id === 'image') {
        setImage(e.target.files[0]);
      } else if (e.target.id === 'icon') {
        setIcon(e.target.files[0]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Ajout des données du formulaire
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Ajout de l'adresse complète
    formDataToSend.append('adresse', `${formData.adresse}, ${formData.city}, ${formData.postalCode}`);

    // Ajout des horaires
    formDataToSend.append('horaires', `${formData.hoursStart}-${formData.hoursEnd}`);

    // Ajout des fichiers
    if (image) formDataToSend.append('image', image);
    if (icon) formDataToSend.append('icon', icon);

    try {
      const response = await fetch('/api/restaurants', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Restaurant ajouté avec succès !');
        // Réinitialiser le formulaire ou rediriger l'utilisateur
      } else {
        alert('Erreur lors de l\'ajout du restaurant');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue');
    }
  };

  return (
    <section className="add-restaurant-tab">
      <div className="add-restaurant-tab__container">
        <div className="add-restaurant-tab__container__header">
          <h1 className="add-restaurant-tab__container__header__title">
            Ajouter un Restaurant
          </h1>
        </div>
        <form className="add-restaurant-tab__container__form" onSubmit={handleSubmit}>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="nom">Nom</label>
              <input 
                type="text" 
                id="nom" 
                placeholder="Nom" 
                value={formData.nom}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="phone">Téléphone</label>
              <input 
                type="text" 
                id="phone" 
                placeholder="Téléphone" 
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="adresse">Adresse</label>
              <input 
                type="text" 
                id="adresse" 
                placeholder="Adresse" 
                value={formData.adresse}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="city">Ville</label>
              <input 
                type="text" 
                id="city" 
                placeholder="Ville" 
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="postalCode">Code Postal</label>
              <input 
                type="text" 
                id="postalCode" 
                placeholder="Code Postal" 
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="type_cuisine">Type de cuisine</label>
              <select 
                id="type_cuisine" 
                value={formData.type_cuisine}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un type de cuisine</option>
                {cuisineTypes.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="hoursStart">Heures d&apos;ouverture (début)</label>
              <input 
                type="time" 
                id="hoursStart" 
                value={formData.hoursStart}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="hoursEnd">Heures de fermeture (fin)</label>
              <input 
                type="time" 
                id="hoursEnd" 
                value={formData.hoursEnd}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="website">Site Web</label>
              <input 
                type="text" 
                id="website" 
                placeholder="Site Web" 
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="image">Image du restaurant</label>
              <input 
                type="file" 
                id="image" 
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <div className="add-restaurant-tab__container__form__input">
              <label htmlFor="icon">Icône du restaurant</label>
              <input 
                type="file" 
                id="icon" 
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
          <div className="add-restaurant-tab__container__form__group">
            <div className="add-restaurant-tab__container__form__input">
              <button type="submit">Ajouter le Restaurant</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddRestaurantTab;