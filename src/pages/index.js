import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Kenny, his wife Chelsea, and son Joe on a hike."
        src="../images/family.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
