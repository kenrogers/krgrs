import React from "react";

import Layout from "../components/layout";
import Subscribe from "../components/Subscribe";

const SubscribePage = () => {
  return (
    <Layout pageTitle="Subscribe">
      <div className="flex mt-16 md:mt-24 mb-12 w-full md:w-4/5 m-auto">
        <h1 className="font-serif text-7xl font-black mb-6">Subscribe</h1>
      </div>
      <Subscribe />
    </Layout>
  );
};

export default SubscribePage;
