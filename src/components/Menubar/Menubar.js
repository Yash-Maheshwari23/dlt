import React, { Component } from "react";
import MenuItem from "./MenuItem";
import './Menubar.css'

export default class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isShown: !this.state.isShown
    });
  }

  render() {
    let { isShown } = this.state;
    let { data, title } = this.props;
    
    if (isShown) {
      return (
        
        <div className="MenuBar">
          {data.map((element, index) => (
            
            <MenuItem
              key={index}
              label={element.category}
              items={element.items}
              identation={0}
            />
          ))}
        </div>
      );
    }
  }
}
