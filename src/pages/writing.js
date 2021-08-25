import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const WritingPage = ({ data }) => {
  return (
    <Layout pageTitle="Writing">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.datePublished}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        frontmatter {
          title
          datePublished(formatString: "MMMM D, YYYY")
        }
        id
        internal {
          content
        }
      }
    }
  }
`;

export default WritingPage;
