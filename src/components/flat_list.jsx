import React from "react";
import Flat from "./flat";

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {
        Array(6).fill().map(() => {
          return <Flat />;
        })
      }
    </div>
  );
};

export default FlatList;
