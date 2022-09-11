import "./Projects.css";

import img1 from "./images/img-1.png";
import img2 from "./images/img-2.png";
import img3 from "./images/img-3.png";
import img4 from "./images/img-4.png";
import button from "./images/button.svg";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="cont">
        <h1 className="Blogs_h1">Recent Projects</h1>
        <p className="info">
          With tools to make every part of your process more human and a support
          team <br />
          excited to help you, getting started with us never been easier.
        </p>

        <div className="lines">
          <div className="cards">
            <img className="project_images" src={img1} alt="project-images" />
            <div className="about">
              <div className="aboutsection">
                <h3>Winery Dry Creek Building</h3>
                <p>Art Modern</p>
              </div>
              <div className="circle">
                {" "}
                <a href="/">
                  <img src={button} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="cards">
            <img className="project_images" src={img2} alt="project-images" />
            <div className="about">
              <div className="aboutsection">
                <h3>Creative Workplace Design</h3>
                <p>Minimalist</p>
              </div>
              <div className="circle">
                {" "}
                <a href="/">
                  <img src={button} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          {" "}
          <div className="cards">
            <img className="project_images" src={img3} alt="project-images" />
            <div className="about">
              <div className="aboutsection">
                <h3>Bedroom Interior Pot Work</h3>
                <p>Modern</p>
              </div>
              <div className="circle">
                {" "}
                <a href="/">
                  <img src={button} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="cards">
            <img className="project_images" src={img4} alt="project-images" />
            <div className="about">
              <div className="aboutsection">
                <h3>Light Ambience Sepia Design</h3>
                <p>Scandinavian</p>
              </div>
              <div className="circle">
                {" "}
                <a href="/">
                  <img src={button} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};
