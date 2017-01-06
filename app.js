// TODO

let GroceryList = () => (
  <ul>
    <Cheese />
    <Crackers />
  </ul>
);

let Cheese = () => (
  <li>Cheese</li>
);

let Crackers = () => (
  <li>Crackers</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));