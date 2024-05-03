// Menu.js
import '../Css/NavBar.css';
import FoodViewSlider from "../Components/FoodViewSlider.js";



const Menu = () => {
  const menuItems = [
    { text: "Pizza", imgSrc: "/img/menu/pizza.png" },
    { text: "Burger", imgSrc: '/img/menu/hamburger.png' },
    { text: "Hot-Pot", imgSrc: '/img/menu/hot-pot.png' },
    { text: "Donut", imgSrc: '/img/menu/donut.png' },
  ];
  const containerStyles = {
    width: "800px",
    height: "380px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  };
  return (
    <div>
      <h1>Welcome to our Menu</h1>
      <div style={containerStyles}>
        <FoodViewSlider slides={menuItems} />
      </div>

    </div>
  );
};

export default Menu;
