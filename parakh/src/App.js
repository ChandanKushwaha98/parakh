import React, { Component } from 'react';
import data from "./file.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: data,
      itemAdd: [],
    }
    this.addData = this.addData.bind(this);
  }
  
  componentDidMount() {
    this.setState({ jsonData: data });
  }

  addData = (e) => {
//     let unique = this.state.itemAdd.filter((v, i, a) => a.indexOf(v) === i); 
// console.log(unique);
// this.setState({
//   itemAdd: unique
// });
    this.setState(prevState => ({
      itemAdd: [...prevState.itemAdd, e]
    }));
  }

  removeData = (e) => {
    this.setState({
      itemAdd: this.state.itemAdd.filter(function (itemAdd) {
        return itemAdd !== e
      })
    });
  }

  render() {
console.log(this.state.itemAdd);
    return (
      <div>
        <div>
          {this.state.jsonData.data.map((item, i) => {
            return (<div key={i}> <div>{item.name}</div>
              <hr />
              {item.productList.map((item, j) => {
                return (
                  <div className="card" key={j}>
                    <div className="container">
                      <h4 className="name">Name : {item.name}</h4>
                      <h4 className="price" >Price : {item.price}</h4>
                      <button type="button" className="btn-blue" onClick={(e) => this.addData(item.name)}>Add to the Card</button>
                      <button type="button" className="btn-blue" onClick={(e) => this.removeData(item.name)}>Remove from Card</button>
                    </div>
                  </div>
                )
              })}
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;