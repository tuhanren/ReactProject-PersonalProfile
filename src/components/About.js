import React from "react";

// import img
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="about"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Hanren Tu
              </h2>
              <p className="mb-4 text-accent">Front-End Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a Front-End Developer located in Toronto. I like to code
                things from scrach, and enjoy bringing ideas to life. <br />
                <br />
                Well-organised person, problem solver, team player with high
                attention to details. Interested in the entire frontend spectrum
                and working on ambitious projects with positive people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
