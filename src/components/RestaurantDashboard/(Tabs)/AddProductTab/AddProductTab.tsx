/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "./AddProductTab.scss";

interface AddProductTabProps {
  product?: any;
  onSave?: () => void;
}

function AddProductTab({ product, onSave }: AddProductTabProps) {
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    prix: "",
    category: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);

  useEffect(() => {
    if (product) {
      setFormData({
        nom: product.nom,
        description: product.description,
        prix: product.prix.toString(),
        category: product.category,
      });
      // Note: nous ne pouvons pas définir le fichier ici, car nous n'avons que l'URL
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      if (photo) {
        formDataToSend.append('photo', photo);
      }

      formDataToSend.append('id_restaurant', '1'); // Remplacez par l'ID réel du restaurant connecté

      const method = product ? 'PUT' : 'POST';
      const url = product ? `/api/Product?id=${product.id_produit}` : '/api/Product';
      
      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({ nom: "", description: "", prix: "", category: "" });
        setPhoto(null);
        if (onSave) onSave();
      } else {
        console.error("Erreur lors de l'enregistrement du produit");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du produit:", error);
    }
  };

  return (
    <section className="add-product">
      <div className="add-product__container">
        <div className="add-product__container__header">
          <h2 className="add-product__container__header__title">
            {product ? "Modifier le produit" : "Ajouter un nouveau produit"}
          </h2>
        </div>
        <form className="add-product__container__form" onSubmit={handleSubmit}>
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <label htmlFor="nom">Nom du produit</label>
              <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
            </div>
            <div className="add-product__container__form__group">
              <label htmlFor="category">Catégorie</label>
              <select name="category" id="category" value={formData.category} onChange={handleChange} required>
                <option value="">Sélectionner une catégorie</option>
                <option value="burger">Burger</option>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
              </select>
            </div>
          </div>
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <label htmlFor="prix">Prix</label>
              <input type="number" id="prix" name="prix" value={formData.prix} onChange={handleChange} required step="0.01" />
            </div>
            <div className="add-product__container__form__group">
              <label htmlFor="photo">Photo du produit</label>
              <input type="file" id="photo" name="photo" onChange={handleFileChange} accept="image/*" />
            </div>
          </div>
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
            </div>
          </div>
          <div className="add-product__container__form__groups">
            <div className="add-product__container__form__group">
              <button type="submit">{product ? "Mettre à jour" : "Ajouter le produit"}</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddProductTab;
