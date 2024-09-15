import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard";
import sendit from "./images/sendit.png";
import addtocart from "./images/carts.png";
import course from "./images/onlinecourse.jpg";
import "./ProjectCard.css";

function Projects() {
  return (
    <div className="project-div">
      <NavBar />
      <div className="projects">
        <h1 className="project text-2xl font-bold">#projects</h1>
        <div className="project-one">
          <h2 className="web-app">Full Stack Webapp</h2>
          <ProjectCard
            img={sendit}
            languages="React JS, Flask, SQLite"
            title="Sendit-courier App"
            description="Sendit app is a courier delivery service web app. The user is able to create a new order and track their delivery status. 
            The admin can manage all the orders. Admin can change the destination and status of the order. The app is built using React JS, Flask and SQLite."
            link="https://sendit-front.onrender.com"
          />
          <ProjectCard
            img={course}
            languages="React JS, Flask, PostgreSQL"
            title="Online Course Registration App"
            description="This app is an online course registration web app. The student is able to register for a new course, track their courses and give reviews on the course. The admin can manage all the courses and reviews. 
            The app also keeps track of students registration. The app is built using React JS, Flask and a PostgreSQL database."
            link="https://online-course-project-2.onrender.com"
          />
          <div>
            <h2 className="project">Small Projects</h2>
            <ProjectCard
              img={addtocart}
              languages="HTML, CSS, Javascript"
              title="Add to Cart"
              description="Add to cart is a small project which is a simple shopping cart app. The user can add items to the cart and remove them. The app is built using HTML, CSS, Javascript and Bootstrap."
              link="https://add-to-cart-faith.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
