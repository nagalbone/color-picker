import React from "react";
class AppChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child contructor");
  }
  componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
  }
  render() {
    console.log(this.props.name + "child render");
    const { name, age } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
        <h1>name:{name}</h1>
        <h2>Age:{age}</h2>
      </div>
    );
  }
}

export default AppChildClass;
