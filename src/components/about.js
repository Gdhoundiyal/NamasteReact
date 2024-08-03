import { useEffect } from "react";
import { useActionData } from "react-router-dom";

function About() {
  // fetch(http://localhost:3000/users)

  useEffect(() => {
    fetchdata();
  });

  const fetchdata = async () => {
    const data = await fetch("http://localhost:3000/restaurentcard");
    const json = data.json();
    console.log("restaurentcard", json);
  };

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
