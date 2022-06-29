import React from "react";
import HomeStyles from "../../styles.css";
import Header from "../Header";

// console.log(HomeStyles);

function App() {
  const cached = {
    count: 0,
  };
  return function anotherApp({ children, ...props }) {
    console.log(cached.count);
    const [stuffCount, useCount] = React.useState(0);
    return (
      <React.Fragment>
        <Header />
        <h1>This is another title</h1>
        <button
          onClick={() => {
            cached.count++;
            console.log(cached.count);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            console.log(cached.count);
            useCount(cached.count++);
            console.log(cached.count);
          }}
        >
          TODO
        </button>
        {/* have bg img based on user location for weather app */}
      </React.Fragment>
    );
  };
}

const CallComponent = App();

export default CallComponent;
