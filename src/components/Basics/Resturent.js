import React ,{useState} from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
const Resturent = () => {
    const [menuData, SetMenuData] = useState(Menu);
    console.log(menuData);
  return (
    <>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturent;
