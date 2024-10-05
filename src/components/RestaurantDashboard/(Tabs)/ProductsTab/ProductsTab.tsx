/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "./ProductsTab.scss";
import AddProductTab from "../AddProductTab/AddProductTab";

function ProductsTab() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/Product');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  const handleSearch = () => {
    // Implémentez la logique de recherche ici
  };

  const handleDelete = async (productId: any) => {
    try {
      await fetch(`/api/Product?id=${productId}`, { method: 'DELETE' });
      fetchProducts(); // Rafraîchir la liste après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  const handleEdit = (product: React.SetStateAction<null>) => {
    setSelectedProduct(product);
  };

  return (
    <section className="products-tab">
      <div className="products-tab__container">
        <div className="products-tab__container__header">
          <h2>products</h2>
          <div className="products-tab__container__header__search">
            <div className="products-tab__container__header__search__input">
              <input 
                type="text" 
                placeholder="Search products" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="products-tab__container__header__search__filter">
              <select 
                name="category" 
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All</option>
                <option value="burger">Burger</option>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
              </select>
            </div>
          </div>
        </div>

        <div className="products-tab__content__body">
          <table className="products-tab__content__body__table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <tr key={product.id_produit}>
                  <td>{product.nom}</td>
                  <td>{product.category}</td>
                  <td>${product.prix}</td>
                  <td>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product.id_produit)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedProduct && (
        <AddProductTab 
          product={selectedProduct} 
          onSave={() => {
            setSelectedProduct(null);
            fetchProducts();
          }}
        />
      )}
    </section>
  );
}

export default ProductsTab;
