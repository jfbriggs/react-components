// TODO

let groceryList = ['Cheese', 'Crackers']

let GroceryList = () => (
  <ul>
    <GroceryListItem item={groceryList[0]}/>
    <GroceryListItem item={groceryList[1]}/>
  </ul>
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

    let style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }

};

ReactDOM.render(<GroceryList />, document.getElementById("app"));