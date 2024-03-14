import styles from "./Projects.module.scss";
import React from "react";
import randomAyah from "../../Imgs/randon-ayah.png";
import numberConverter from "../../Imgs/number-converter.png";
import auth from "../../Imgs/authenticationpng.png";
import mealify from "../../Imgs/mealifypng.png";
import games from "../../Imgs/gamespng.png";
import weather from "../../Imgs/weatherpng.png";
import portfolio from "../../Imgs/portfoliopng.png";
import freshcart from "../../Imgs/freshcart.png";
import todo from "../../Imgs/todo.png";
export default function Projects() {
  const allProjects = [
    {
      img: randomAyah,
      name: "Random Ayah to Show",
      description:
        "A website that shows a random ayah(verse) from the Quran everytime you click the button with responsive design to open on all devices.",
      demo: "https://mahmouds10.github.io/Random-Ayah-Generator/",
      github: "https://github.com/mahmouds10/Random-Ayah-Generator",
    },
    {
      img: numberConverter,
      name: "Number system converter",
      description:
        "A website that allows you to convert numbers from specific base to another system easily.  With its user-friendly interface, you can effortlessly switch between binary, octal, decimal, and hexadecimal formats.",
      demo: "https://mahmouds10.github.io/Number-System-Converter/",
      github: "https://github.com/mahmouds10/Number-System-Converter",
    },
    {
      img: auth,
      name: "Signup and Login",
      description:
        "A website that allows you to signup and login to the created account using the local storage to store user information, Very well designed and user-friendly interface that works well on all devices and excellent user experience.",
      demo: "https://mahmouds10.github.io/Signup-Login-System/",
      github: "https://github.com/mahmouds10/Signup-Login-System",
    },
    {
      img: mealify,
      name: "Mealify",
      description:
        "A dummy website for a restaurant showcasing meals, chefs, and a contact section. It's well-designed with dark mode, but only compatible with PCs and laptops, not mobile devices",
      demo: "https://mahmouds10.github.io/Mealify-DummyRestaurant/#home",
      github: "https://github.com/mahmouds10/Mealify-DummyRestaurant",
    },
    {
      img: games,
      name: "Games Reviews",
      description:
        "Explore our gaming hub featuring all games and categories. Click on a game to access detailed information and an official website link. Designed to be responsive on all devices for effortless browsing.",
      demo: "https://mahmouds10.github.io/Games-Review/",
      github: "https://github.com/mahmouds10/Games-Review",
    },
    {
      img: weather,
      name: "Weather",
      description:
        "A website to view weather across three days: yesterday, today, and tomorrow. When the website is opened, it detects the location and brings the real weather state. You can also search for a specific city to view its weather, and a button to reset to your location. Not responsive; only for PCs and laptops, not for mobile devices.",
      demo: "https://mahmouds10.github.io/Weather-App/",
      github: "https://github.com/mahmouds10/Weather-App",
    },
    {
      img: portfolio,
      name: "Dummy Portfolio",
      description:
        "A dummy portfolio to practice react and react-router-dom. It contains three sections(routes). Well designed and works for all devices.",
      demo: "https://mahmouds10.github.io/React-Portfolio/",
      github: "https://github.com/mahmouds10/React-Portfolio",
    },
    {
      img: freshcart,
      name: "Fresh Cart",
      description:
        "A complete e-commerce website with authentication and authorization control. It allows customers to create an account and login. If user authenticates with the db he can place an order and choose the payment method and view orders history. Very well designed and work on all devices.",
      demo: "https://mahmouds10.github.io/FreshCart-React-Ecommerce/",
      github: "https://github.com/mahmouds10/FreshCart-React-Ecommerce",
    },
    {
      img: todo,
      name: "Todo List",
      description:
        "A todo list website that allows user to create, update or delete a todo. It allows the user to filter the list too. Very well designed and works on all devices",
      demo: "https://mahmouds10.github.io/Todo-List/",
      github: "https://github.com/mahmouds10/Todo-List",
    },
  ];


  return (
    <>
      <section className={styles.projects} id="Projects">
        <div className="container p-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span className="pre">Projects</span>
            <h2 className="text-center py-2">Things I've built so far</h2>
          </div>
          <div className="row gap-4 justify-content-evenly">
            {allProjects.reverse().map((project) => (
              <div className={"col-md-5 col-lg-3 " + styles.card}>
                <div className="h-100 d-flex flex-column">
                  <div>
                    <img src={project.img} className="w-100" alt="" />
                  </div>

                  <div className="d-flex flex-column flex-grow-1 justify-content-between ">
                    <div className="pt-3 px-3">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                    </div>

                    <div
                      className={
                        "d-flex justify-content-between " + styles.cardFooter
                      }
                    >
                      <div>
                        <i className="fa-solid fa-link pe-2"></i>
                        <a href={project.demo}>Live Preview</a>
                      </div>
                      <div>
                        <i className="fa-brands fa-github pe-2"></i>
                        <a href={project.github}>View Code</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
