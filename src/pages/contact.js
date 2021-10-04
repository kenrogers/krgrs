import React from "react";

import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout pageTitle="Get In Touch">
      <div className="flex mt-16 md:mt-24 mb-12 w-full md:w-4/5 m-auto">
        <h1 className="font-serif text-7xl font-black mb-6">Get In Touch</h1>
      </div>
      <div className="m-auto w-full md:w-4/5 text-base md:text-xl flex flex-col gap-y-4 mb-36">
        <p>
          Whether you are a fellow developer looking for some advice, someone
          wanting to discuss working together, or just want to say hey, I love
          hearing from people for pretty much any reason and would love it if
          you got in touch.
        </p>

        <p>The best way to do that is to email me at krogers@hey.com</p>

        <p>
          I’m always looking for interesting projects to work on and challenging
          problems to solve.
        </p>

        <p>
          If you have a quick/casual question, you can also reach out on Twitter{" "}
          <a
            className="link"
            href="https://twitter.com/KenTheRogers"
            target="_blank"
            rel="noreferrer"
          >
            @KenTheRogers
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default ContactPage;
