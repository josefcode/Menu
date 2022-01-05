import './App.css'
import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
export default function App() {
  const [MenuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Categories categories={categories} filterItem={filterItem} />
      <Menu menuItems={MenuItems} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
