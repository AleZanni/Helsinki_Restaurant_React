import React from "react";
import Introduction from "./components/Introduction";
import RestaurantsList from "./components/RestaurantsList";
import restaurants from "./restaurants.json";

class App extends React.Component {
  //Class constructor where restaurants is assigned the JSON file and
  //newArr is the alphabetically ordered array, which will be created only once the button is clicked
  constructor() {
    super();
    this.state = {
      restaurants: restaurants,
      buttonPressed: false,
      newArr: ""
    };
    this.orderArr = this.orderArr.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //Function to order the object in the JSON file alphabetically by name
  orderArr(first, second) {
    const firstItem = first.name.toUpperCase();
    const secondItem = second.name.toUpperCase();

    let comparison = 0;
    if (firstItem > secondItem) {
      comparison = 1;
    } else if (firstItem < secondItem) {
      comparison = -1;
    }
    return comparison;
  }

  //Handling the click so that the arrNew will be filled
  handleClick(e) {
    let arrayObject = this.state.restaurants.restaurants;
    this.setState({
      newArr: arrayObject.sort(this.orderArr),
      buttonPressed: true
    });
  }

  render() {
    let todoItems = "";
    //if the button is not press the objects will be shown as they are listed in the JSON file
    //If the button is pressed, they will instead be re-render and displayed alphabetically
    if (!this.state.buttonPressed) {
      todoItems = this.state.restaurants.restaurants.map(item => (
        <RestaurantsList key={item.id} item={item} />
      ));
    } else if (this.state.buttonPressed) {
      todoItems = "";
      todoItems = this.state.newArr.map(item => (
        <RestaurantsList key={item.id} item={item} />
      ));
    }
    return (
      <div className="App">
        <Introduction />
        <div className="bttn__container">
          <button
            className="sorting-button bttn btn--medium"
            onClick={this.handleClick}
          >
            Sort Restaurants Alphabetically
          </button>
        </div>
        <div className="grid-container">{todoItems}</div>
      </div>
    );
  }
}

export default App;
