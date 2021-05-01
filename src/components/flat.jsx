import React from "react"

const Flat = (props) => {

  const styles = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg')"
  };

  return (
    <div className="card" style={styles}>
      <div className="card-category">150 EUR</div>
      <div className="card-description">
        <h2>
          Super 60m<sup>2</sup> in trendy neighborhood!
        </h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
