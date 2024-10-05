import React from "react";
import "./AddCategoryTab.scss";

function AddCategoryTab() {
  return (
    <section className="add-category">
      <div className="add-category__container">
        <div className="add-category__container__header">
          <h2 className="add-category__container__header__title">
            Add Category
          </h2>
        </div>
        <div className="add-category__container__header__input">
          <input type="text" placeholder="Category Name" />
          <button>Add Category</button>
        </div>
      </div>
    </section>
  );
}

export default AddCategoryTab;
