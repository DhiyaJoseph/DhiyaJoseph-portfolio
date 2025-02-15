import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiNodejs } from "react-icons/di";
import { SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiInkscape, SiDjango, SiFastapi, SiMysql, SiFirebase, SiTailwindcss, SiTypescript, SiPostman, SiGooglecloud } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandPython } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io5";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>

        {/* Languages Section */}
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title="C++"><CgCPlusPlus className="techLogo" /></abbr>
            <abbr title="Python"><TbBrandPython className="techLogo" /></abbr>
            <abbr title="HTML 5"><TbBrandHtml5 className="techLogo" /></abbr>
            <abbr title="CSS 3"><TbBrandCss3 className="techLogo" /></abbr>
            <abbr title="JavaScript"><TbBrandJavascript className="techLogo" /></abbr>
            <abbr title="TypeScript"><SiTypescript className="techLogo" /></abbr>
          </div>
        </div>

        {/* Libraries and Frameworks */}
        <div className="skill-box">
          <h2>Libraries & Frameworks</h2>
          <div className="skillset">
            <abbr title="ReactJS"><SiReact className="techLogo" /></abbr>
            <abbr title="Redux"><SiReactrouter className="techLogo" /></abbr>
            <abbr title="Bootstrap"><SiBootstrap className="techLogo" /></abbr>
            <abbr title="Tailwind CSS"><SiTailwindcss className="techLogo" /></abbr>
            <abbr title="Django"><SiDjango className="techLogo" /></abbr>
            <abbr title="FastAPI"><SiFastapi className="techLogo" /></abbr>
            <abbr title="Node.js"><DiNodejs className="techLogo" /></abbr>
          </div>
        </div>

        {/* Databases & Cloud */}
        <div className="skill-box">
          <h2>Databases & Cloud</h2>
          <div className="skillset">
            <abbr title="MySQL"><SiMysql className="techLogo" /></abbr>
            <abbr title="Firebase"><SiFirebase className="techLogo" /></abbr>
            <abbr title="Google Cloud"><SiGooglecloud className="techLogo" /></abbr>
          </div>
        </div>

        {/* Tools & Systems */}
        <div className="skill-box">
          <h2>Tools & Platforms</h2>
          <div className="skillset">
            <abbr title="Git/GitHub"><DiGit className="techLogo" /></abbr>
            <abbr title="NPM"><IoLogoNpm className="techLogo" /></abbr>
            <abbr title="Postman"><SiPostman className="techLogo" /></abbr>
            <abbr title="VS Code"><SiVisualstudiocode className="techLogo" /></abbr>
            <abbr title="Windows"><IoLogoWindows className="techLogo" /></abbr>
            <abbr title="Figma"><SiFigma className="techLogo" /></abbr>
            <abbr title="Inkscape"><SiInkscape className="techLogo" /></abbr>
          </div>
        </div>
      </div>
    </>
  );
}
