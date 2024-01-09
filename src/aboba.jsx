import { NavLink } from "react-router-dom";
// import config from "./config.jsx";
const aboba = (props) => {
   const {styles, link} = props;
   return (
      <>
         <div style ={styles}>Aboba{props.bobus}</div>
         <NavLink to={link}>{link}</NavLink>
      </>
   );
};

export default aboba;
