import styles from "./Home.module.scss";
import React from "react";
import img from "./../../Imgs/7118756_3426523.svg";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "My_Resume.pdf";
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="Home" className={styles.home + " d-flex align-items-center"}>
      <div className="container p-5">
        {" "}
        <div className="row ">
          <div className="col-md-6  d-flex align-items-center justify-content-center text-center text-md-start ">
            <div className="flex-grow-1">
              <span className="h3">Hi, i'm</span>
              <h2 className="h1 m-0">Mahmoud Sayed,</h2>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Frontend Designer",
                  1000,
                ]}
                preRenderFirstString={true}
                omitDeletionAnimation={false}
                wrapper="span"
                speed={20}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              ></TypeAnimation>
              <button
                onClick={downloadResume}
                className={
                  styles.downloadBtn + " d-block my-3 mx-auto mx-md-0 "
                }
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="col-md-3 col-lg-6 d-flex align-items-center justify-content-center">
            <img src={img} style={{ width: "60%" }} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
