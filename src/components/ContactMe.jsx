import { NavLink } from "react-router-dom";
import "../styles/breadcrumbs.css";
import ContactBreadcrumbs from "./Breadcrumbs/ContactBreadcrumbs";

export default function ContactMe() {
  return (
    <>
      <ContactBreadcrumbs />
      <h1>Contact Me</h1>
      <div className="AboutDescription">
        <p>Hello! If you have any questions you may contact me at: </p>
        <a href="mailto:teohwesley@gmail.com">teohwesley@gmail.com</a>
      </div>
    </>
  );
}
