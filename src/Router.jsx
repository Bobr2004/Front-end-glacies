import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Aboba from "./pageEdit.jsx";
import AbobaN from "./page.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <AbobaN className="aboba"/>
      )
   },
   {
      path: "/admin",
      element: (
         <Aboba  className="aboba"/>
      )
   }
]);

export default router;
