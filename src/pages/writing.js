import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

const WritingPage = ({ data }) => {
  return (
    <Layout pageTitle="Writing">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
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
        slug
      }
    }
  }
`;

export default WritingPage;
