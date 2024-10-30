import NavBar from "./NavBar";
import "./About.css";
function About() {
  return (
    <div>
      <NavBar />
      <div className="about">
        <h1 className="about-heading text-2xl font-bold">#about-me</h1>
        <div className="about-me">
          <p className="about-me-text">
          I am a full-stack developer with expertise in HTML, CSS, JavaScript,
          and the React.js library for front-end development. On the back-end, I
          have strong skills in Python and the Flask framework. I completed a
          Software Engineering course at Moringa School and hold a Bachelor's
          degree in Information Technology from the University of Dedan Kimathi,
          along with a diploma in IT from Jomo Kenyatta University of
          Agriculture and Technology. In addition to my technical background, I
          have experience in business as both an entrepreneur and an employee.
          This diverse experience has honed my sales skills and business acumen.
          I am passionate about integrating business insights with technology to
          address challenges and create innovative solutions.
        </p>
        </div>
        </div>
      </div>
   
  );
}
export default About;
