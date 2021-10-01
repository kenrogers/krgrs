import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";

const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <div className="flex mt-16 md:mt-24 items-center justify-between gap-x-4 px-12">
        <div className="flex w-full mb-12">
          <div className="flex flex-col">
            <h1 className="font-serif text-7xl font-black mb-6">About</h1>
            <h3 className="text-5xl opacity-70 font-black mb-6 font-serif">
              Hi, I'm Kenny
            </h3>
          </div>
        </div>
      </div>
      <Img
        className="rounded shadow mb-6"
        fluid={data.file.childImageSharp.fluid}
      />
      <div className="m-auto px-12 w-full md:w-4/5 text-base md:text-xl flex flex-col gap-y-4">
        <p>
          I’m an American software developer living and working in Fort Collins,
          CO.
        </p>

        <p>
          I’m a generalist that believes in having a strong grasp of the
          fundamentals and a base technology (JavaScript in my case) while
          having a broad range of knowledge in multiple sub-technologies with
          the ability to quickly learn and pick up new skills.
        </p>

        <p>
          I’m most interested in working in the intersection between design,
          marketing, and development to design, code, and write things that make
          life easier for people.
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
          I view code as a means to an end, not an end in itself. Ultimately,
          every line of code I write contributes to a larger goal of improving
          some aspect of somebody’s life. This philosophy is the driving force
          behind my motivation to continue to learn and improve my craft as much
          as possible.
        </p>

        <p>
          I currently work as a React developer and always have a side project
          in the works. Right now I am working on my design, marketing, and SEO
          chops by writing about the different dev tools I am using and
          learning.
        </p>
        <p>
          Specifically, I am diving head first into the world of Web3 and
          learning asmuch as I can about the massively growing ecosystem of
          DAOs, NFTs, cryptocurrency, and all things decentralized.
        </p>
        <p>
          Outside of coding, I spend as much time as I can in the mountains
          around my home in Fort Collins, CO, rucking, practicing archery,
          swinging kettlebells around, and reading. I read just about anything
          you can think of, but have been especially interested in theology
          recently.
        </p>

        <p>
          Right down there 👇 you can sign up to be notified via email whenever
          I write something new.
        </p>

        <p>
          Too much commitment? You can also{" "}
          <Link className="link" to="/writing">
            read my stuff
          </Link>{" "}
          or{" "}
          <Link className="link" to="/contact">
            get in touch
          </Link>{" "}
          if you want to chat about work, fun stuff, or the meaning of life.
        </p>
      </div>
      <Subscribe />
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
