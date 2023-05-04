import React from "react";
import "./abt.css";
import Mem1 from "./mem1.jpg";
import Mem2 from "./mem2.jpg";

function About() {
  return (
    <div className="meet-our-team">
      <h1 className="meet-our-team-heading">Meet Our Team</h1><hr/>
      <div className="team-members">
        <div className="team-member1">
          <img src={Mem1} alt="Team Member 1" className="team-member-image"/>
          <div className="team-member-details">
            <h2 className="team-member-name">Akshat Jain</h2>
            <h3 className="team-member-role">UI/UX Developer, Frontend Developer</h3>
            <p className="team-member-description">
            Hi my name is Akshat Jain and I am UI/UX designer and a frontend developer too.This project is designed on app called FIGMA and the logo is designed in Adobe illustrator. The frontned of the project is made on React Js.
            </p>
          </div>
        </div>
        <div className="team-member2">
          <img src={Mem2} alt="Team Member 2" className="team-member-image"/>
          <div className="team-member-details">
            <h2 className="team-member-name">Axith Chaudhary</h2>
            <h3 className="team-member-role">Backend Developer, Team Leader</h3>
            <p className="team-member-description">
            Hi my name is Axith Chaudhary. I am the team leader of this project and also I worked as the backend developer of the website. The  website's backend is developed in python language which makes it swift and light weight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
