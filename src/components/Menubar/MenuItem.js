import React, { Component } from "react";
import "./Menubar.css";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let { isOpen } = this.state;
    let { identation, items, label } = this.props;
    if (items && items.length > 0) {
      return (
        <div>
          <div
            className={"MenuItem " + (isOpen ? "open" : "")}
            onClick={this.toggle}
          >
            <div
              className="MenuLabelContainer"
              style={{ marginLeft: `${(identation + 1) * 10}px` }}
            >
              <span className="MenuLabel">{label}</span>
            </div>
            <span className="MenuButton">
              <svg
                viewBox="0 0 24 24"
                style={{
                  display: "inline-block",
                  color: "rgba(0, 0, 0, 0.87)",
                  fill: "currentcolor",
                  height: "24px",
                  width: "24px",
                  userSelect: "none",
                  transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
                }}
              >
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            </span>
          </div>
          {isOpen &&
            items.map((element, index) => (
              <li>{element.category}<br/></li>
            ))}
        </div>
      );
    } 
  }
}
