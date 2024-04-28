import React from 'react';
import avatar from '../assets/images/avatar.png'
const About = () => {
    const handleGithub = ()=>{
        window.open('https://github.com/harpreet0816/')
    }
    return (
        <div style={{width: 'fit-content', margin: "auto",}}>
        <div className="card" style={{width: '50vw', height: "fit-content",  background: 'rgb(24 23 23 / 41%)', color: 'white',}}>
        <img src={avatar} className="card-img-top" alt="..." style={{width: '10%', margin: "auto"}}/>
        <div className="card-body">
            <h5 className="card-title" style={{width: 'fit-content', margin: "auto", fontSize: 'xxx-large',fontWeight: '600', marginBottom: '17px',}}>Harpreet Singh</h5>
            <p className="card-text" style={{fontSize: "larger", textOverflow: "ellipsis", textAlign: "-webkit-auto",}}>{`Hi, I'm Harpreet Singh, a passionate developer at Contriwhiz Technologies Pvt Ltd with over a year of experience in web development. My journey in the tech world began with mastering the fundamentals of HTML, CSS, and JavaScript, which laid the groundwork for my exploration into more advanced technologies like React.js, Node.js, MongoDB, Docker, and Python. I thrive on the challenges of building dynamic and user-friendly web applications, leveraging my expertise in front-end and back-end development. With a keen eye for detail and a commitment to excellence, I continuously seek to enhance my skills and stay updated with the latest trends in technology. I believe in the power of teamwork and collaboration, and I'm excited to contribute my skills and knowledge to innovative projects that make a positive impact`}</p>
            <a onClick={handleGithub} className="btn btn-primary">Github</a>
        </div>
        </div>
        </div>
    );
};

export default About;