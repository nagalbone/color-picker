import { useState } from "react";
import "./App.css";

function App() {
  const [addColor, setAddColor] = useState("#CCCCFF");
  const colorsArray = [
    "#CD5C5C",
    "#6495ED",
    "#40E0D0",
    "#9FE2BF",
    "#DE3163",
    "#FF7F50",
    "#FFBF00",
    "#DFFF00",
    "#FFA07A",
    "#F08080",
  ];
  return (
    <div className="cursor-pointer">
      <ColorHeader headerColor={colorsArray} setAddColor={setAddColor} />
      {colorsArray.map(() => {
        return (
          <div className="flex">
            {colorsArray.map(() => (
              <SubColor addColor={addColor} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function ColorHeader({ headerColor, setAddColor }) {
  return (
    <div className="flex">
      {headerColor.map((color) => {
        return (
          <div
            onClick={() => setAddColor(color)}
            className="h-8 w-8 m-1"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
    </div>
  );
}

function SubColor({ addColor }) {
  const [color, setColor] = useState("#CCCCFF");
  return (
    <div
      onClick={() => setColor(addColor)}
      className="h-8 w-8 m-1"
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default App;
