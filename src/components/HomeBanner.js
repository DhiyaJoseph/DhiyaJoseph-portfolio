import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Dhiya Joseph</div>
              <div className="staticTitle">
                Full Stack
              </div>
              <ul className="dynamicTitle" style={{marginLeft: '125px'}}>
                <li><span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/dhiya-joseph-16822020b/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
