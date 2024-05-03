
import FoodViewSlider from "../Components/FoodViewSlider.js";
import '../Css/MenuPage.css';


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
      <div class='MenuContainer'>
    <table className='FullMenuBox'>
        <h4>Dinner</h4>
        <tr>
            <td>Pizza</td>
            <td>15$</td>
        </tr>
        <tr>
            <td>Grilled Salmon</td>
            <td>20$</td>
        </tr>
        <tr>
            <td>Chicken Alfredo</td>
            <td>18$</td>
        </tr>
        <tr>
            <td>Vegetable Stir-Fry</td>
            <td>14$</td>
        </tr>
        <tr>
            <td>Beef Lasagna</td>
            <td>16$</td>
        </tr>
    </table>

    <table className='FullMenuBox'>
        <h4>Lunch</h4>
        <tr>
            <td>Club Sandwich</td>
            <td>12$</td>
        </tr>
        <tr>
            <td>Caesar Salad</td>
            <td>10$</td>
        </tr>
        <tr>
            <td>Vegetable Wrap</td>
            <td>11$</td>
        </tr>
        <tr>
            <td>Beef Burger</td>
            <td>13$</td>
        </tr>
        <tr>
            <td>Shrimp Tacos</td>
            <td>14$</td>
        </tr>
    </table>

    <table className='FullMenuBox'>
        <h4>Drinks/Desserts</h4>
        <tr>
            <td>Chocolate Cake</td>
            <td>8$</td>
        </tr>
        <tr>
            <td>Strawberry Cheesecake</td>
            <td>7$</td>
        </tr>
        <tr>
            <td>Vanilla Milkshake</td>
            <td>5$</td>
        </tr>
        <tr>
            <td>Mojito</td>
            <td>6$</td>
        </tr>
        <tr>
            <td>Ice Cream Sundae</td>
            <td>6$</td>
        </tr>
    </table>
</div>

    </div>
  );
};

export default Menu;
