import NavBar from "./NavBar";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <NavBar />
      <div className="skills">
        <h1 className="text-2xl font-bold">#skills</h1>
        <h2>Technical Skills</h2>
        <div className="tables">
          <table>
            <th className="headers">Languages</th>
            <tr>JavaScript</tr>
            <tr>Python</tr>
          </table>
          <table>
            <th className="headers">Frameworks</th>
            <tr>Flask</tr>
          </table>
          <table>
            <th className="headers">Databases</th>
            <tr>SQLite</tr>
          </table>
          <table>
            <th className="headers">Tools</th>
            <tr>VS Code</tr>
            <tr>Git</tr>
            <tr>Linux</tr>
            <tr>Figma</tr>
          </table>
          <table>
            <th className="headers">Other</th>
            <tr>HTML</tr>
            <tr>CSS</tr>
          </table>
        </div>

        <h2>Business Skills</h2>
        <div className="tables">
          <table>
            <th className="headers">Management</th>
            <tr>Teamwork</tr>
            <tr>Communication</tr>
            <tr>Problem Solving</tr>
          </table>
          <table>
            <th className="headers">Sales</th>
            <tr>Customer Service</tr>
            <tr>Negotiation</tr>
            <tr>Marketing</tr>
            <tr>Merchandising</tr>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Skills;
