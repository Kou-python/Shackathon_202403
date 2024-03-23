import React, { Component } from "react";
import { render } from "react-dom";

const App = () => {
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <input type="file" onChange={onFileInputChange} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
