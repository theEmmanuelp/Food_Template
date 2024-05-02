// Menu.js
import FoodViewSlider from "../Components/FoodViewSlider.js";
const Menu = () => {
  const menuItems = [
    { text: "Pizza" },
    { text: "Burger" },
    { text: "Salad" },
    { text: "Sushi" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
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
