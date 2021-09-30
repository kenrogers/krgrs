import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { FiMail } from "react-icons/fi";

export default function Nav() {
  const data = useStaticQuery(graphql`
    query DinoQuery {
      file(relativePath: { eq: "dino.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <nav className="flex flex-wrap md:flex-nowrap justify-between max-w-full md:max-w-5xl m-auto py-12 md:py-24 font-bold text-xl items-center text-center px-12 md:px-0">
      <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center flex justify-center">
        <Link to="/">
          <Img className="w-24" fluid={data.file.childImageSharp.fluid} />
        </Link>
      </div>
      <div className="flex w-full md:w-3/5 text-center justify-around mb-6 md:mb-0">
        <Link
          className="hover:text-indigo-600 transform hover:rotate-2 border-indigo-600"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-indigo-600 transform hover:rotate-2 border-indigo-600"
          to="/tutorials"
        >
          Tutorials
        </Link>
        <Link
          className="hover:text-indigo-600 transform hover:rotate-2 border-indigo-600"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <Link
        className="subscribe w-1/2 md:w-1/5 m-auto mb-6 md:mb-0 mt-0"
        to="/subscribe"
      >
        Subscribe <FiMail />
      </Link>
    </nav>
  );
}
