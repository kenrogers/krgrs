import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";

const Article = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="px-6">
        <h1 className="h1 mb-2">{data.mdx.frontmatter.title}</h1>
        <h3 className="opacity-80 font-bold text-3xl font-serif mb-4">
          {data.mdx.frontmatter.subtitle}
        </h3>
        <p className="uppercase text-gray-400 mb-12">
          Published on {data.mdx.frontmatter.datePublished}
        </p>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          className="rounded shadow mb-12"
        />
      </div>
      <div className="w-full md:w-4/5 m-auto article mb-24 px-6">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <Subscribe />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        datePublished(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default Article;
