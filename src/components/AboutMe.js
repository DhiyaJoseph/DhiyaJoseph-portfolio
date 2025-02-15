import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span> Dhiya </span>, a software developer currently working on websites for companies using React.js and Django. I’m passionate about building responsive, accessible, and aesthetically pleasing web applications.

        <br></br>My goal is to continuously learn, grow, and leverage technology to create meaningful impacts for both my career and the companies I work with. I’m eager to collaborate on  <span> full-stack development </span> projects, especially those involving modern UI/UX design.

        I’m actively working on improving <span>backend performance, API integrations, and advanced state management</span>. Currently, I’m working on and learning <span>advanced React.js patterns, scalable architectures, and DevOps practices</span>.<br></br>

        I'm always open to <span>new opportunities</span> to create innovative software solutions. Let's team up and build something amazing together!

       <br></br> Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/13S6soChLxhq97KuS74MvpSth1uw7Y2vO/view?usp=sharing" target="_blank" rel="noopener noreferrer">explore my resume.</a>
      </div>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" src={myProfile} alt="Profile"></img>
      </div>
      <div className="name">Dhiya</div>
    </div>
  );
}
