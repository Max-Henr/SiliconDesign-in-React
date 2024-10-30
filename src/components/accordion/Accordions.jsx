import { useState, useEffect } from "react";
import "./Accordion.css";
import Accordion from "./AccordionToggle";
function Accordions() {
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://win24-assignment.azurewebsites.net/api/faq")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="faq-card">
      {posts.map((post) => (
        <Accordion key={post.id} post={post} />
      ))}
    </div>
  );
}
export default Accordions;
