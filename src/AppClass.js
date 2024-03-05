import React from "react";
import AppChildClass from "./AppChildClass";

class AppClass extends React.Component {
  constructor() {
    super();
    console.log("parent contructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <AppChildClass name="First " age="29" />
      </div>
    );
  }
}

export default AppClass;
