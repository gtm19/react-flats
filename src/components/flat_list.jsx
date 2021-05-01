import React from "react";
import Flat from "./flat";

const FlatList = (props) => {
  const { flats, selected, updateFlat } = props;

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
              selected={flat.id === selected.id}
              key={flat.id}
              id={flat.id}
              updateFlat={updateFlat}
            />
          );
        })
      }
    </div>
  );
};

export default FlatList;
