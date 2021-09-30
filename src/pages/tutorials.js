import React from "react";
import { graphql, Link } from "gatsby";
import { FiArrowRight } from "react-icons/fi";

import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";

const TutorialsPage = ({ data }) => {
  return (
    <Layout pageTitle="Tutorials">
      <div className="flex flex-col w-full md:w-4/5 mx-auto mt-16 md:mt-24 mb-24 justify-between gap-x-4 px-12">
        <h1 className="font-serif text-7xl font-black mb-6">
          Tutorials &amp; Guides
        </h1>
        <h2 className="text-5xl opacity-70 font-black mb-6 font-serif">
          Tutorials and in-depth guides on building things with modern tech.
        </h2>
      </div>
      <div className="m-auto px-12 w-full md:w-4/5 flex flex-col gap-y-4">
        {data.allMdx.nodes.map((article) => {
          return (
            <div className="mb-12">
              <h3 className="font-black text-5xl mb-6">
                {article.frontmatter.title}
              </h3>
              <p className="font-serif text-2xl opacity-70 mb-6">
                {article.frontmatter.subtitle}
              </p>
              <Link
                to={`/${article.slug}`}
                className="link flex items-center text-2xl font-black"
              >
                Read <FiArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
      <Subscribe />
    </Layout>
  );
};

export const data = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        frontmatter {
          title
          subtitle
          datePublished(formatString: "MMMM D, YYYY")
        }
        id
        slug
        excerpt
      }
    }
  }
`;

export default TutorialsPage;
