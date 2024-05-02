// Menu.js
import '../Css/NavBar.css';
import FoodViewSlider from "../Components/FoodViewSlider.js";


const Menu = () => {
  const menuItems = [
    { text: "Pizza" },
    { text: "Burger" },
    { text: "Salad" },
    { text: "Sushi" },
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
      <div >
        <select>
          <option value="option1">Lunch</option>
          <option value="option2">Dinner</option>
          <option value="option3">Desert</option>
        </select>
      </div>

    </div>
  );
};

export default Menu;
