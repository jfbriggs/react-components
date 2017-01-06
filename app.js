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

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bold: false
    }
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }

};

ReactDOM.render(<GroceryList />, document.getElementById("app"));