import React from "react";

function Functionalprop(props) {
  return (
    <div>
      (<h3>This is a Functional Component</h3>), (
      <h3>
        Welcome {props.name}from {props.place}
      </h3>
      )
    </div>
  );
}
export default Functionalprop;
