import React, { useEffect, useState } from "react";
import { MenuCard } from "../../components";
import { Spinner } from "react-bootstrap";
import menu from "../../api/menu";
import "./Menu.scss";

export const Menu = () => {
  const [menulist, setMenulist] = useState();
  //make call to fetch menu items
  const getMenu = () => {
    menu
      .getMenu()
      .then((response) => setMenulist(response.data.menu))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="Menu">
      <h1>Menu</h1>
      {menulist ? (
        <div className="Menu-list">
          {menulist
            ? menulist.map((item, index) => {
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
              })
            : "No items in menu."}
        </div>
      ) : (
        <Spinner size="lg" animation="border" />
      )}
    </div>
  );
};
