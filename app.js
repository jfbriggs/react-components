// TODO

let groceryList = ['Cheese', 'Crackers']

let GroceryList = () => (
  <ul>
    <GroceryListItem item={groceryList[0]}/>
    <GroceryListItem item={groceryList[1]}/>
  </ul>
);

let Cheese = () => (
  <li>Cheese</li>
);

let Crackers = () => (
  <li>Crackers</li>
);

let GroceryListItem = (props) => (
  <li>{props.item}</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));