import React from "react";
import "./ShopItemFunc.css";

const ShopItemFunc = ({ item }) => {
  const { brand, title, description, descriptionFull, price, currency } = item;
  const formattedPrice = `${currency}${price.toFixed(2)}`;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title.toUpperCase()}</h1>
      <h3>{description.toUpperCase()}</h3>
      <div className="description">
        {descriptionFull.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{formattedPrice}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItemFunc;
