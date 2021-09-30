import React from "react";

import Layout from "../components/layout";

const InPage = () => {
  return (
    <Layout pageTitle="You're In">
      <div className="flex mt-16 md:mt-24 px-12 mb-12 w-full md:w-4/5 m-auto">
        <h1 className="font-serif text-7xl font-black mb-6">You're in!</h1>
      </div>
      <div className="m-auto px-12 w-full md:w-4/5 text-base md:text-xl flex flex-col gap-y-4 mb-36">
        <p>
          Alright you're all subscribed! Can't wait to send some awesome content
          on being a better developer your way. Feel free to reply to any email
          you get from me, I love hearing from readers.
        </p>
      </div>
    </Layout>
  );
};

export default InPage;
