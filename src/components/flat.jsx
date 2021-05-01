import React from "react"

const Flat = (props) => {
  const {
    name,
    imageUrl,
    price,
    priceCurrency,
    selected
  } = props;

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
  };

  const priceFormatted = `${price} ${priceCurrency}`;

  let className = "card";
  if (selected) {
    className += " active";
  }

  return (
    <div className={className} style={styles}>
      <div className="card-category">
        {priceFormatted}
      </div>
      <div className="card-description">
        <h2>
          {name}
        </h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
