import React from 'react'
import Project from './Project'
import '../App';

const Projects = () => {
    return (
        <section className="projects ml-5 col-11">
            <a name="projects"></a>
            <h1 className="text-light">Projects</h1>

            <h2 className="mt-5">Architecture</h2>

            <Project
                projectImageSrc={"./assets/images/aptFenelon.png"}
                projectTitle={"From Design to Virtual Reality"}
                projectSpan={["VR", "Sketchup", "Twinmotion", "Twilght Render"]}
                projectDescription={"Create a full design from an old hair cut saloon, to get a 60m2 appartement in Le Havre (France). After rendering multiple views, the 3D textured model was virtually accessible using Sketchup viewer for VR, using an Acer Mixed Reality Headset."}
            />

            <h2 className="mt-5">Web developement</h2>

            <Project
                projectImageSrc={"./assets/images/weather2.png"}
                projectTitle={"Weather Dashboard"}
                projectGithub={"https://github.com/hedical/WeatherApp"}
                projectDemo={"https://hedical.github.io/WeatherApp/index.html"}
                projectSpan={["Bootstrap", "jQuery", "APIs", "HTML5", "CSS"]}
                projectDescription={"Use of several web technologies to create a minimalist weather dashboard. Open Weather API and Unsplash API were used to generate data based on user input."}
            />

            <Project
                projectImageSrc={"./assets/images/lulu.png"}
                projectTitle={"Lulu's Recipes"}
                projectDemo={"https://hedical.github.io/Recipe-App/index.html"}
                projectGithub={"https://github.com/hedical/Recipe-App"}
                projectSpan={["Bootstrap", "jQuery", "APIs", "HTML5", "CSS"]}
                projectDescription={"Project `Lulu's` began on May 4th, 2020 and was produced by Hedi, Mykhas, Napoleon, and Shree. The project is dedicated towards helping individuals search for, create, and store recipes all in one application."}
            />

            <Project
                projectImageSrc={"./assets/images/stocktracker.png"}
                projectTitle={"Stock Tracker"}
                projectGithub={"https://github.com/hedical/StockTracker"}
                projectDemo={"https://app-stocktracker.herokuapp.com/"}
                projectSpan={["Materialize", "jQuery", "APIs", "Node JS", "Mysql", "Express"]}
                projectDescription={"StockTracker is an online app that helps the user keep track of their favorite stocks. This app has been created in collaboration with Philip, Tracy and Steven with many technologies and modules and let users register and save their favorite stocks from one session to another."}
            />

            <Project
                projectImageSrc={"./assets/images/employeeManagement.png"}
                projectTitle={"Employee Management"}
                projectGithub={"https://github.com/hedical/Employee-Management-System"}
                projectSpan={["CLI", "Sequelize", "Inquirer", "Node JS", "Mysql"]}
                projectDescription={"The Employee Management CLI, is a command line tool designed to help you keep track of Human Ressources. Once the user start to use this tool, he is prompt with different kind of questions to manage roles, departements and employees."}
            />

            <Project
                projectImageSrc={"./assets/images/ReadmeGen.png"}
                projectTitle={"README Generator"}
                projectGithub={"https://github.com/hedical/README-Generator"}
                projectSpan={["CLI", "Axios", "Inquirer", "Node JS", "Fuzzy"]}
                projectDescription={"This tool can be used to generate a readme using a CLI prompt interface. The user answer the questions asked and get back a markdown file. This tool also get the name of all your repos once you enter your github account name."}
            />

            <Project
                projectImageSrc={"./assets/images/noteTaker.png"}
                projectTitle={"Note Taker"}
                projectGithub={"https://github.com/hedical/Note-Taker"}
                projectDemo={"https://notes-taker-hw.herokuapp.com/"}
                projectSpan={["JavaScript", "Express", "Node JS"]}
                projectDescription={"This app is a simple tool to take notes. The user can add, edit or delete a note (CRUD) and the information is stored in a JSON file. This app has been deployed fully deployed on Heroku and can be used by anyone."}
            />

            <h2 className="mt-5">Media</h2>

            <Project
                projectImageSrc={"./assets/images/minuteBizz.png"}
                projectTitle={"Minute Bizz"}
                projectSpan={["Da Vinci Resolve", "Audacity", "French"]}
                projectDescription={"Minute Bizz is a personal project launched in 2018(French only). The main objective is to explain how the AEC industry could be disrupted by pure digital players. It was important to find a way to give famous examples to help the viewer understand in less than 2 min."}
            />

            <Project
                projectImageSrc={"./assets/images/articles.png"}
                projectTitle={"Articles about Corporates"}
                projectSpan={["Notion", "French"]}
                projectDescription={"Trying to gather my mind and experience around specific strategic topics for big corporation. Some of those topics could be general such as, `How much is it important to communicate in a big company`, but also really specific, such as : `How to define a data capture strategy on a construction site`"}
            />

        </section>
    )
}

export default Projects
