import React from "react";

const Add = ({ add }) => {
  console.log(add);
  return (
    <div>
      <button onClick={add}>ADD</button>
    </div>
  );
};

export default Add;
