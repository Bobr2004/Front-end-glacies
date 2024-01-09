// ContextMenu.js
import React from "react";
import "./contextMenu.css";
import { useState } from "react";

const ContextMenu = ({ onClose }) => {
   const [color, setColor] = useState();
   const style = {
      position: "absolute",
      backgroundColor: "#242424",
      top: "15px",
      left: "15px",
      padding: "8px",
      border: "1px solid black",
      borderRadius: "8px"
   };
   return (
      <div style={style}>
         {/* Your context menu content goes here */}
         <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
               localStorage.setItem("oleg", "red");
               console.log("oleg");
            }}
         >
            <div className="red"></div>
         </button>
         <button
            style={{ backgroundColor: "blue" }}
            className="blue"
            onClick={() => {
               localStorage.setItem("oleg", "blue");
            }}
         >
            <div></div>
         </button>

         <input type="button" onClick={onClose} value="close" />
      </div>
   );
};

export default ContextMenu;
