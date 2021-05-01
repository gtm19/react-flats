import React from "react";
import Flat from "./flat";

const FlatList = (props) => {
  const { flats } = props;

  return (
    <div className="flat-list">
      {
        flats.map((flat) => {
          return (
            <Flat
              name={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
            />
          );
        })
      }
    </div>
  );
};

export default FlatList;
