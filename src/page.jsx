// Aboba.js
import React, { useEffect, useState } from "react";
import ContextMenu from "./ContextMenu.jsx";
import "./page.css";

const AbobaN = () => {
   const [styles, setColor] = useState({});
   useEffect(() => {
      setColor({ ...styles, backgroundColor: localStorage.getItem("oleg") });
   }, []);
   return (
      <div>
         <button type="button" styles={styles} onClick={()=>{
            console.log(styles)
         }}>
            something
         </button>
      </div>
   );
};

export default AbobaN;
