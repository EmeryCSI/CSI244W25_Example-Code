import React from "react";

export default function CallBack({ onClick }) {
  console.log(onClick);
  return (
    <div>
      <h2>Callback</h2>
      <p>You can also pass callback functions via props</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
