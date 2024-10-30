import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import cv from "./cv/cv.pdf";
import "./Home.css";
/* import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";*/
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <section className="home">
        <h1 className="text-2xl font-bold">#profile</h1>
        <img
          src="../resized passport.jpg"
          alt="personal_image"
          className="personal_image"
        />

        <h2 className="full-stack text-2xl font-bold">FullStack Developer</h2>
        <div className="profile">
          <p>
            My name is Faith Wanjiru. I am a full-stack developer. I am skilled
            in HTML, CSS, Javascript and React.js library in the frontend as
            well as Python and Flask framework in the backend. I am a former
            student at Moringa School and have a degree and diploma in
            Information Technology. I have a working background in business, as
            a former entrepreneur and salesperson. My motive is to create
            solutions in the business and technology fields.
          </p>
        </div>
        <button className="cv" /* onClick={cv} */>
          <Link to={cv} target="_blank" className="cv-link">
            Download CV
          </Link>
        </button>
        <Link to="/contact">
          <button className="hire">Hire Me</button>
        </Link>
      </section>
      {/*   <Projects />
      <Skills />
      <Contact /> */}
      <Footer />
    </div>
  );
}
export default Home;
