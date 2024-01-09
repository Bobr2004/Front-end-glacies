import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Aboba from "./aboba.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <Aboba
            {...{
               styles: {
                  backgroundColor: "lightblue",
                  padding: "20px"
               },
               link: "/chlen"
            }}
         />
      )
   },
   {
      path: "/chlen",
      element: (
         <Aboba
            {...{
               link: "/"
            }}
         />
      )
   },
   {
      path: "/chlen",
      element: (
         <Aboba
            {...{
               link: "/"
            }}
         />
      )
   }
]);

export default router;
