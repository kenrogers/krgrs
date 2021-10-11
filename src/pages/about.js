import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FiArrowRight } from "react-icons/fi";

import Layout from "../components/layout";

const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <div className="flex mt-16 md:mt-24 items-center justify-between gap-x-4">
        <div className="flex w-full mb-12">
          <div className="flex flex-col">
            <h1 className="font-serif text-7xl font-black mb-6">About</h1>
            <h3 className="text-5xl opacity-70 font-black mb-6 font-serif">
              Hi there, I'm Kenny
            </h3>
          </div>
        </div>
      </div>
      <Img
        className="rounded shadow mb-6"
        fluid={data.file.childImageSharp.fluid}
      />
      <div className="m-auto w-full md:w-4/5 text-base md:text-xl flex flex-col gap-y-4">
        <p>
          I’m an American software developer living and working in Fort Collins,
          CO.
        </p>

        <p>
          I’m a generalist that believes in having a broad range of knowledge in
          multiple technologies with the ability to quickly learn and pick up
          new skills.
        </p>

        <p>
          I love being able to translate my craft into high-quality products
          that have an actual impact on day-to-day lives.
        </p>

        <p>
          I’ve worked on everything from internal tools for my local government
          to help employees perform their duties more effectively to a
          highly-complex Electron app responsible for formulating chemical
          compositions for a major construction material supplier.
        </p>

        <p>
          Right now I am diving headfirst into web3 development to be a part of
          building the next generation of the Internet.
        </p>

        <p>
          I view code as a means to an end, not an end in itself. Ultimately,
          every line of code I write contributes to a larger goal of improving
          some aspect of somebody’s life. This philosophy is the driving force
          behind my motivation to continue to learn and improve my craft as much
          as possible.
        </p>

        <p>
          I currently work as a React developer and always have a side project
          in the works. Right now I am working on my web3 chops, designing and
          building things on the decentralized web.
        </p>

        <p>
          Outside of coding, I spend as much time as I can in the mountains
          around my home in Fort Collins, CO, rucking, practicing archery,
          swinging kettlebells around, and reading. I read just about anything
          you can think of, but have been especially interested in theology and
          economics recently.
        </p>

        <p>
          Need someone to help with your next Web3 project? I'm currently
          available for freelance and consulting.
        </p>

        <Link
          className="p-4 bg-indigo-600 font-bold text-center rounded transform hover:rotate-2 hover:shadow-xl cursor-pointer shadow flex justify-center items-center uppercase tracking-wide gap-x-2"
          to="/contact"
        >
          <span>Get In Touch</span> <FiArrowRight />
        </Link>
      </div>
    </Layout>
  );
};

export const data = graphql`
  query {
    file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
