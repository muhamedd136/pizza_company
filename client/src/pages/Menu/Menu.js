import React from "react";
import "./Menu.scss";
import menulist from "./menulist";
import { MenuCard } from "../../components";

export const Menu = () => {
  //make call to fetch menu items
  return (
    <div className="Menu">
      <h1>Menu</h1>
      <div className="Menu-list">
        {menulist.map((item, index) => {
          return (
            <MenuCard
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
