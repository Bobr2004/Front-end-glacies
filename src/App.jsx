import { useState } from "react";
import "./App.css";

function App() {
  const url = {
    post: "localhost:3000"
  }
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
   });

   const handleInputChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Sending JSON payload to "/api2/createUser" endpoint
      fetch(url.post, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
        //  .then((response) => response.json())
        //  .then((data) => {
        //     console.log("Response from server:", data);
        //     // Handle the response as needed
        //  })
        //  .catch((error) => {
        //     console.error("Error sending data:", error);
        //  });
   };

   return (
      <>
         <h1>Create account</h1>
         <form action="" className="input-container" onSubmit={handleSubmit}>
            <input
               placeholder="name"
               type="text"
               name="name"
               value={formData.name}
               onChange={handleInputChange}
            />
            <input
               placeholder="email"
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange}
            />
            <input
               placeholder="password"
               type="password"
               name="password"
               value={formData.password}
               onChange={handleInputChange}
            />
            <input type="submit" value="submit" />
         </form>
         <p className="read-the-docs">
            Create a new TradeX account or <a href="">Show some data</a>
         </p>
      </>
   );
}

export default App;