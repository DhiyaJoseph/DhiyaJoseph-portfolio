import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import Footer from "./components/Footer";
import ProjectCard from './components/ProjectCard';
import AboutMe from './components/AboutMe';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="SVG-Editing-App"
          projectDesc="This web-based SVG editor is built using React, HTML, CSS, and JavaScript for the frontend, utilizing SVG DOM APIs for shape manipulation and rendering. It leverages event handling for user interactions, while the Canvas API enables real-time editing and transformations like scaling, rotating, and coloring vector graphics."
          projectLink="https://github.com/DhiyaJoseph/SVG-Editing-App.git"
          // ProjectLink="/project/svg-editor"
          projectImg={require('./images/SVG EditingApp.png')}
        />

        <ProjectCard
          projectTitle="Hospital Management System"
          projectDesc="The Hospital Management System, built with Django, streamlines hospital operations by enabling admins, doctors, and patients to manage appointments, records, and schedules efficiently. Key features include secure authentication, role-based access, responsive design, and an intuitive admin dashboard."
          projectLink="https://github.com/DhiyaJoseph/HospitalManagementSystem.git"
          // deployedProjectLink=""
          projectImg={require('./images/HospitalMangement.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="Educational platform/Learning Management System"
          projectDesc=" Learning Management System (LMS) with user management, course management, and e-commerce features, enabling students to enroll in courses, track progress, and make purchases. It offers a modern, responsive UI with video-based learning, course reviews, and payment integration, ensuring a seamless online education experience."
          projectLink="https://github.com/DhiyaJoseph/EduHub-Connect.git"
          // deployedProjectLink=""
          projectImg={require('./images/Eduhub connect.png')}
        />
        <AboutMe id='about' />
        <SkillCard id='skills' />
        <ContactForm id='contact' />
        <Footer/>
      </div>
    </>
  );
}

export default App;
