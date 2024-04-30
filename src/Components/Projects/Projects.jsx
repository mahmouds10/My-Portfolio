import styles from "./Projects.module.scss";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import randomAyah from "../../Imgs/randon-ayah.png";
import numberConverter from "../../Imgs/number-converter.png";
import auth from "../../Imgs/authenticationpng.png";
import mealify from "../../Imgs/mealifypng.png";
import games from "../../Imgs/gamespng.png";
import weather from "../../Imgs/weatherpng.png";
import portfolio from "../../Imgs/portfoliopng.png";
import freshcart from "../../Imgs/freshcart.png";
import todo from "../../Imgs/todo.png";
import WebAssignment from "../../Imgs/WebAssignment.png";

export default function Projects() {
  const allProjects = [
    {
      img: randomAyah,
      name: "Random Ayah to Show",
      description:
        "A website that shows a random ayah(verse) from the Quran everytime you click the button with responsive design to open on all devices.",
      demo: "https://mahmouds10.github.io/Random-Ayah-Generator/",
      github: "https://github.com/mahmouds10/Random-Ayah-Generator",
      base: "Vanilla JS",
    },
    {
      img: numberConverter,
      name: "Number system converter",
      description:
        "A website that allows you to convert numbers from specific base to another system easily. With its user-friendly interface, you can effortlessly switch between binary, octal, decimal, and hexadecimal formats.",
      demo: "https://mahmouds10.github.io/Number-System-Converter/",
      github: "https://github.com/mahmouds10/Number-System-Converter",
      base: "Vanilla JS",
    },
    {
      img: auth,
      name: "Signup and Login",
      description:
        "A website that allows you to signup and login to the created account using the local storage to store user information. Very well designed and user-friendly interface that works well on all devices and excellent user experience.",
      demo: "https://mahmouds10.github.io/Signup-Login-System/",
      github: "https://github.com/mahmouds10/Signup-Login-System",
      base: "Vanilla JS",
    },
    {
      img: mealify,
      name: "Mealify",
      description:
        "A dummy website for a restaurant showcasing meals, chefs, and a contact section. It's well-designed with dark mode, but only compatible with PCs and laptops, not mobile devices",
      demo: "https://mahmouds10.github.io/Mealify-DummyRestaurant/#home",
      github: "https://github.com/mahmouds10/Mealify-DummyRestaurant",
      base: "Vanilla JS",
    },
    {
      img: games,
      name: "Games Reviews",
      description:
        "Explore our gaming hub featuring all games and categories. Click on a game to access detailed information and an official website link. Designed to be responsive on all devices for effortless browsing.",
      demo: "https://mahmouds10.github.io/Games-Review/",
      github: "https://github.com/mahmouds10/Games-Review",
      base: "Vanilla JS",
    },
    {
      img: weather,
      name: "Weather",
      description:
        "A website to view weather across three days: yesterday, today, and tomorrow. When the website is opened, it detects the location and brings the real weather state. You can also search for a specific city to view its weather, and a button to reset to your location. Not responsive; only for PCs and laptops, not for mobile devices.",
      demo: "https://mahmouds10.github.io/Weather-App/",
      github: "https://github.com/mahmouds10/Weather-App",
      base: "Vanilla JS",
    },
    {
      img: portfolio,
      name: "Dummy Portfolio",
      description:
        "A dummy portfolio to practice react and react-router-dom. It contains three sections (routes). Well designed and works for all devices.",
      demo: "https://mahmouds10.github.io/React-Portfolio/",
      github: "https://github.com/mahmouds10/React-Portfolio",
      base: "React.JS",
    },
    {
      img: freshcart,
      name: "Fresh Cart",
      description:
        "A complete e-commerce website with authentication and authorization control. It allows customers to create an account and login. If a user authenticates with the DB, he can place an order and choose the payment method and view orders history. Very well designed and works on all devices.",
      demo: "https://mahmouds10.github.io/FreshCart-React-Ecommerce/",
      github: "https://github.com/mahmouds10/FreshCart-React-Ecommerce",
      base: "React.JS",
    },
    {
      img: todo,
      name: "Todo List",
      description:
        "A todo list website that allows users to create, update, or delete a todo. It allows the user to filter the list too. Very well designed and works on all devices",
      demo: "https://mahmouds10.github.io/Todo-List/",
      github: "https://github.com/mahmouds10/Todo-List",
      base: "React.JS",
    },
    {
      img:WebAssignment,
      name: "Registration with backend",
      description:
        "A registration website using php backend and mySQL database to manage server side validation and storing data. You need to run a local host and create the database using the provided .sql file. You can also find out about actors who have the same birthday as you or any specified date.",
      demo: "",
      github: "https://github.com/mahmouds10/Registration-with-backend",
      base: "{Vanilla JS",
    },
  ];

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className={styles.projects} id="Projects">
        <div className="container p-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <span className="pre">Projects</span>
            <h2 className="text-center py-2">Things I've built so far</h2>
          </div>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab
                  className={`${styles.tab}  py-1 my-2  ${value === 0 ? styles.activeTab : ''}`}
                  label="All"
                  {...a11yProps(0)}
                />
                <Tab
                  className={`${styles.tab} ${value === 1 ? styles.activeTab : ''}`}
                  label="Vanilla JS"
                  {...a11yProps(1)}
                />
                <Tab
                  className={`${styles.tab} ${value === 2 ? styles.activeTab : ''}`}
                  label="React.JS"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>

            <CustomTabPanel className="mt-2" value={value} index={0}>
              <div className="row gap-4 justify-content-evenly">
                {allProjects
                  .reverse()
                  .map((project) => (
                    <div className={"col-md-5 col-lg-3 " + styles.card} key={project.id}>
                      <div className="h-100 d-flex flex-column">
                        <div>
                          <img src={project.img} className="w-100" alt={project.name} />
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
            </CustomTabPanel>

            {/* Tab Panel 1 */}
            <CustomTabPanel value={value} index={1}>
              <div className="row gap-4 justify-content-evenly">
                {allProjects
                  .filter((project) => project.base === "Vanilla JS")
                  .map((project) => (
                    <div
                      className={"col-md-5 col-lg-3 " + styles.card}
                      key={project.id}
                    >
                      <div className="h-100 d-flex flex-column">
                        <div>
                          <img src={project.img} className="w-100" alt={project.name} />
                        </div>

                        <div className="d-flex flex-column flex-grow-1 justify-content-between">
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
                              <i className={styles.link  +" fa-solid fa-link pe-2"}></i>
                              <a href={project.demo}>Live Preview</a>
                            </div>
                            <div>
                              <i className={styles.link  +" fa-brands fa-github pe-2"}></i>
                              <a href={project.github}>View Code</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CustomTabPanel>

            {/* Tab Panel 2 */}
            <CustomTabPanel value={value} index={2}>
              <div className="row gap-4 justify-content-evenly">
                {allProjects
                  .filter((project) => project.base === "React.JS")
                  .reverse()
                  .map((project) => (
                    <div
                      className={"col-md-5 col-lg-3 " + styles.card}
                      key={project.id}
                    >
                      <div className="h-100 d-flex flex-column">
                        <div>
                          <img src={project.img} className="w-100" alt={project.name} />
                        </div>

                        <div className="d-flex flex-column flex-grow-1 justify-content-between">
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
            </CustomTabPanel>
          </Box>
        </div>
      </section>
    </>
  );
}
