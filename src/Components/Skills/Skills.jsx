import styles from "./Skills.module.scss";
import React from "react";
import react from "../../Imgs/react-svgrepo-com.svg";
import bootstrap from "../../Imgs/bootstrap-4-logo-svgrepo-com.svg";
import css from "../../Imgs/css3-logo-svgrepo-com.svg";
import figma from "../../Imgs/figma-svgrepo-com.svg";
import git from "../../Imgs/git-svgrepo-com.svg";
import html from "../../Imgs/html-5-logo-svgrepo-com.svg";
import js from "../../Imgs/javascript-svgrepo-com.svg";
import jquery from "../../Imgs/jquery-4.svg";
import next from "../../Imgs/next-dot-js-svgrepo-com.svg";
import npm from "../../Imgs/npm-svgrepo-com.svg";
import scss from "../../Imgs/scss-svgrepo-com.svg";
import ts from "../../Imgs/typescript-logo-svgrepo-com.svg";
export default function Skills() {
  const allSkills = [
    {
      src: html,
      name: "HTML",
    },
    {
      src: css,
      name: "CSS",
    },
    {
      src: scss,
      name: "SCSS",
    },
    {
      src: bootstrap,
      name: "Bootstrap",
    },
    {
      src: figma,
      name: "Figma",
    },
    {
      src: js,
      name: "Javascript",
    },
    {
      src: ts,
      name: "Typescript",
    },
    {
      src: jquery,
      name: "J-Query",
    },
    {
      src: git,
      name: "Git",
    },
    {
      src: npm,
      name: "NPM",
    },
    {
      src: react,
      name: "React.js",
    },
    {
      src: next,
      name: "Next.js",
    },
  ];
  return (
    <>
      <section className={styles.skills} id="Skills">
        <div className="w-75 mx-auto py-5 d-flex justify-content-center align-items-center flex-column">
          <span className="pre">Skills</span>
          <h2 className="text-center ">
            The skills, tools and technologies i'm really good at:
          </h2>
          <div className="row py-3 g-4">
            {allSkills.map((skill) => (
              <div className="col-md-2 col-4 d-flex justify-content-center align-items-center flex-column">
                <img src={skill.src} className="w-25" alt="" />
                <span className={styles.skillTitle}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
