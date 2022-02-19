// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041
class App extends React.Component {
  constructor(props) {
    super(props); // Set state as needed

    this.state = {
      allergens: {
        soy: false,
        egg: false,
        milk: false,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false
      }
    };
  }

  render() {
    // TODO filter menuItems
    //    Menu items are passed in through props as this.props.menuItems
    const changeAllergens = allergen => {
      this.state.allergens[allergen] = !this.state.allergens[allergen];
      this.setState({
        allergens: this.state.allergens
      });
    };

    const filerByAllergens = () => {
      return this.props.menuItems.filter(item => isNotAllergic(item));
    };

    const isNotAllergic = item => {
      if (item.soy && this.state.allergens.soy) {
        return false;
      }

      if (item.egg && this.state.allergens.egg) {
        return false;
      }

      if (item.milk && this.state.allergens.milk) {
        return false;
      }

      if (item.fish && this.state.allergens.fish) {
        return false;
      }

      if (item.peanut && this.state.allergens.peanut) {
        return false;
      }

      if (item.shellfish && this.state.allergens.shellfish) {
        return false;
      }

      if (item.treeNut && this.state.allergens.treeNut) {
        return false;
      }

      if (item.gluten && this.state.allergens.gluten) {
        return false;
      } //


      return true;
    };

    let filteredResults = filerByAllergens(); // Render the application

    return /*#__PURE__*/React.createElement("div", {
      className: "App"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Header"
    }, /*#__PURE__*/React.createElement("h1", null, "Culver's Menu")), /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-content"
    }, /*#__PURE__*/React.createElement(Menu, {
      menuItems: filteredResults
    })), /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-nav"
    }, /*#__PURE__*/React.createElement(NavBar, {
      change: changeAllergens
    }), /*#__PURE__*/React.createElement("p", null, "You have ", filteredResults.length, " number of items to choose from")), /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-right"
    }))));
  }

}
// Class: SE2840 - Menu Filter
// Web Application entry point - window.onload

/**
 * Window onload function - Creates the menuItem (unfiltered) array
 *     and renders the application
 */
window.onload = () => {
  const menuItems = [{
    name: "ButterBurger",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "ButterBurger Cheese",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Mushroom & Swiss ButterBurger",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Sourdough Melt",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "The Culver's Bacon Deluxe",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "The Culver's Deluxe",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Wisconsin Swiss Melt",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Crispy Chicken Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Grilled Chicken Sandwich",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Original Chicken Tenders",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Spicy Crispy Chicken Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Coleslaw",
    soy: false,
    egg: true,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Side"
  }, {
    name: "Crinkle Cut Fries",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Side"
  }, {
    name: "Mashed Potatoes & Gravy",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Side"
  }, {
    name: "Steamed Broccoli",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Side"
  }, {
    name: "Wisconsin Cheddar Cheese Sauce",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Side"
  }, {
    name: "Cherry Chip Butter Cake Concrete Mixer made with Chocolate Custard",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Cherry Chip Butter Cake Concrete Mixer made with Vanilla Custard",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Chocolate Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Chocolate Concrete Mixer made with Reese's",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Cookie Dough Concrete Mixer",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Mint Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Brownie",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Cookie Dough",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Reese's Peanut Butter Cups",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Butterfinger",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Heath English Toffee Bars",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: true,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Reese's",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Chocolate Cake Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Chocolate Dish",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Chocolate Waffle Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Vanilla Cake Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Vanilla Dish",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Waffle Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Butterfly Jumbo Shrimp Basket",
    soy: false,
    egg: false,
    milk: false,
    fish: true,
    peanut: false,
    shellfish: true,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "Butterfly Jumbo Shrimp Dinner",
    soy: false,
    egg: false,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: true,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "North Atlantic Cod Dinner",
    soy: true,
    egg: true,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "North Atlantic Cod Filet Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "Chicken Cashew Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: true,
    gluten: false,
    type: "Salad"
  }, {
    name: "Cranberry Bacon Bleu Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Salad"
  }, {
    name: "Culver's® Vinaigrette",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Garden Fresco Salad",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Salad"
  }, {
    name: "Garden Fresco Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Salad"
  }, {
    name: "Honey Mustard Dressing",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ken's® Blue Cheese Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ken's® Country French",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ken's® Raspberry Vinaigrette",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ranch Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Southwest Avocado Salad",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Salad"
  }, {
    name: "Zesty Avocado Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }];
  ReactDOM.render( /*#__PURE__*/React.createElement(App, {
    menuItems: menuItems
  }), document.getElementById('root'));
};
// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041
class Menu extends React.Component {
  constructor(props) {
    super(props); // Set state as needed

    this.state = {};
  }

  render() {
    // Render the Menu
    return /*#__PURE__*/React.createElement("div", {
      id: "Menu",
      className: "row row-cols-1 row-cols-md-3 g-4"
    }, this.props.menuItems.map(item => {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: item.name,
        item: item
      });
    }));
  }

}
// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041
class MenuItem extends React.Component {
  constructor(props) {
    super(props); // Set state as needed

    this.state = {};
  }

  render() {
    const makeCard = item => {
      return /*#__PURE__*/React.createElement("div", {
        className: "col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "card-header h-25"
      }, item.name), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("h6", {
        className: "card-text"
      }, item.type), /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, "Allergens:"), makeBadges(item))));
    };

    const makeBadges = item => {
      let allergens = findAllergens(item);

      if (allergens[0] === "None") {
        return /*#__PURE__*/React.createElement("span", {
          className: "badge rounded-pill bg-secondary"
        }, allergens[0]);
      }

      return allergens.map(allergen => {
        return /*#__PURE__*/React.createElement("span", {
          className: "badge rounded-pill bg-primary"
        }, allergen);
      });
    };

    const findAllergens = item => {
      let allergens = [];

      if (item.soy) {
        allergens.push("Soy");
      }

      if (item.egg) {
        allergens.push("Egg");
      }

      if (item.milk) {
        allergens.push("Milk");
      }

      if (item.fish) {
        allergens.push("Fish");
      }

      if (item.peanut) {
        allergens.push("Peanut");
      }

      if (item.shellfish) {
        allergens.push("Shellfish");
      }

      if (item.treeNut) {
        allergens.push("Tree Nut");
      }

      if (item.gluten) {
        allergens.push("Gluten");
      }

      if (allergens.length === 0) {
        allergens.push("None");
      }

      return allergens;
    }; // Render the Menu


    return makeCard(this.props.item);
  }

}
// Class: SE2840 - Menu Filter
// Name: Ryan Alexander
// Class Section: 041
class NavBar extends React.Component {
  constructor(props) {
    super(props); // Set state as needed

    this.state = {};
  }

  render() {
    let allergens = ["soy", "egg", "milk", "fish", "peanut", "shellfish", "treeNut", "gluten"];

    let capitalize = str => {
      return str[0].toUpperCase() + str.slice(1);
    }; // Render the NavBar


    return /*#__PURE__*/React.createElement("div", {
      id: "Nav"
    }, /*#__PURE__*/React.createElement("h4", null, "Filter Allergens:"), /*#__PURE__*/React.createElement("div", {
      id: "Radios"
    }, allergens.map(allergen => {
      return /*#__PURE__*/React.createElement("div", {
        className: "form-check form-switch"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-check-input",
        type: "checkbox",
        role: "switch",
        id: allergen,
        onChange: event => {
          this.props.change(allergen);
        }
      }), /*#__PURE__*/React.createElement("label", {
        className: "form-check-label",
        htmlFor: "flexSwitchCheckDefault"
      }, capitalize(allergen) + " Free"));
    })));
  }

}
