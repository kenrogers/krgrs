import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaBook, FaCode, FaLeaf } from "react-icons/fa";

import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="KRGRS">
      <div className="flex flex-wrap md:flex-nowrap mt-16 md:mt-24 items-center justify-between gap-x-4">
        <div className="flex w-full md:w-1/2 mb-12 md:mb-0">
          <div className="flex flex-col">
            <h3 className="uppercase tracking-wider opacity-60 font-bold mb-6">
              Full-Stack Web3 Engineer
            </h3>
            <h1 className="font-serif text-7xl font-black mb-6">
              Hi 👋 <br />
              I'm Kenny
            </h1>
            <p className="mb-6">
              I’m a full-stack Web3 engineer that’s been building software
              professionally since 2014{" "}
              <span className="opacity-70">(for fun since 2008)</span>. I design
              and build Web3 products, tools, and content that delight people,
              solve tough problems, and make life better.
            </p>
            <Link
              className="p-4 bg-indigo-600 font-bold text-center rounded transform hover:rotate-2 hover:shadow-xl cursor-pointer shadow flex justify-center items-center uppercase tracking-wide gap-x-2"
              to="/contact"
            >
              <span>Get In Touch</span> <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Img
            className="rounded-full border-8 border-gray-800"
            fluid={data.file.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="w-full md:w-4/5 m-auto my-24 md:my-48">
        <h3 className="uppercase tracking-wider opacity-60 font-bold mb-6">
          Thoughts, guides, etc.
        </h3>
        <h2 className="font-serif text-5xl font-black mb-6">Writing</h2>
        <p className="mb-6 text-base md:text-xl">
          Guides, tutorials, and thoughts on the decentralized web, philosophy,
          career advice, and other interesting things.
        </p>
        <Link className="cta w-1/2 md:w-1/3" to="/writing">
          Read <FiArrowRight />
        </Link>
      </div>
      {/* Add this section back when I have more content */}
      {/* <div className="w-4/5 md:w-full m-auto flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/3 p-0 md:p-8 mb-6 md:mb-0">
          <div className="flex flex-col bg-gray-700 w-full p-6 rounded">
            <FaBook className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-2xl font-black font-serif">Learn</h3>
            <p className="my-4">
              Tutorials on effectively using modern JavaScript.
            </p>
            <Link className="cta" to="/subscribe">
              Read <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-0 md:p-8 mb-6 md:mb-0">
          <div className="flex flex-col bg-gray-700 w-full p-6 rounded">
            <FaCode className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-2xl font-black font-serif">Create</h3>
            <p className="my-4">
              Complete guides on building projects from scratch.
            </p>
            <Link className="cta" to="/subscribe">
              Read <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-0 md:p-8 mb-6 md:mb-0">
          <div className="flex flex-col bg-gray-700 w-full p-6 rounded">
            <FaLeaf className="text-indigo-500 text-4xl mb-4" />
            <h3 className="text-2xl font-black font-serif">Grow</h3>
            <p className="my-4">
              Build your dream career by growing your platform.
            </p>
            <Link className="cta" to="/subscribe">
              Read <FiArrowRight />
            </Link>
          </div>
        </div>
      </div> */}
      <Subscribe />
    </Layout>
  );
};

export const data = graphql`
  query {
    file(relativePath: { eq: "kenny-and-joe.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
