import React, { useState } from "react";
import "./AddUserTab.scss";

function AddUserTab() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    mot_de_passe: "",
    adresse: "",
    role: "client",
    phone: "",
    city: "",
    postal: "",
    // Champs spécifiques au livreur
    vehicule: "",
    // Champs spécifiques au restaurant
    type_cuisine: "",
    horaires: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de l\'utilisateur');
      }

      const result = await response.json();
      console.log('Utilisateur ajouté avec succès:', result);
      // Réinitialiser le formulaire
      setFormData({
        nom: "",
        email: "",
        mot_de_passe: "",
        adresse: "",
        role: "client",
        phone: "",
        city: "",
        postal: "",
        vehicule: "",
        type_cuisine: "",
        horaires: "",
        website: "",
      });
      alert('Utilisateur ajouté avec succès !');
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'ajout de l\'utilisateur');
    }
  };

  return (
    <section className="add-user-tab">
      <div className="add-user-tab__container">
        <div className="add-user-tab__container__header">
          <h1 className="add-user-tab__container__header__title">Ajouter un utilisateur</h1>
        </div>
        <form className="add-user-tab__container__form" onSubmit={handleSubmit}>
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="mot_de_passe">Mot de passe</label>
              <input type="password" id="mot_de_passe" name="mot_de_passe" value={formData.mot_de_passe} onChange={handleChange} placeholder="Mot de passe" required />
            </div>
          </div>
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <label htmlFor="phone">Téléphone</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="adresse">Adresse</label>
              <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} placeholder="Adresse" required />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="city">Ville</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Ville" />
            </div>
            <div className="add-user-tab__container__form__input">
              <label htmlFor="postal">Code Postal</label>
              <input type="text" id="postal" name="postal" value={formData.postal} onChange={handleChange} placeholder="Code Postal" />
            </div>
          </div>
          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <label htmlFor="role">Rôle</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange}>
                <option value="client">Client</option>
                <option value="livreur">Livreur</option>
                <option value="admin">Admin</option>
                <option value="restaurant">Restaurant</option>
              </select>
            </div>
          </div>

          {formData.role === 'livreur' && (
            <div className="add-user-tab__container__form__group">
              <div className="add-user-tab__container__form__input">
                <label htmlFor="vehicule">Véhicule</label>
                <input type="text" id="vehicule" name="vehicule" value={formData.vehicule} onChange={handleChange} placeholder="Véhicule" required />
              </div>
            </div>
          )}

          {formData.role === 'restaurant' && (
            <div className="add-user-tab__container__form__group">
              <div className="add-user-tab__container__form__input">
                <label htmlFor="type_cuisine">Type de cuisine</label>
                <input type="text" id="type_cuisine" name="type_cuisine" value={formData.type_cuisine} onChange={handleChange} placeholder="Type de cuisine" required />
              </div>
              <div className="add-user-tab__container__form__input">
                <label htmlFor="horaires">Horaires</label>
                <textarea id="horaires" name="horaires" value={formData.horaires} onChange={handleChange} placeholder="Horaires d'ouverture" required />
              </div>
              <div className="add-user-tab__container__form__input">
                <label htmlFor="website">Site web</label>
                <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="Site web" />
              </div>
            </div>
          )}

          <div className="add-user-tab__container__form__group">
            <div className="add-user-tab__container__form__input">
              <button type="submit">Ajouter l&apos;utilisateur</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddUserTab;