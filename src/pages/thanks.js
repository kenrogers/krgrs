import React from "react";

import Layout from "../components/layout";

const ThanksPage = () => {
  return (
    <Layout pageTitle="Thanks">
      <div className="flex mt-16 md:mt-24 px-12 mb-12 w-full md:w-4/5 m-auto">
        <h1 className="font-serif text-7xl font-black mb-6">Thanks so much!</h1>
      </div>
      <div className="m-auto px-12 w-full md:w-4/5 text-base md:text-xl flex flex-col gap-y-4 mb-36">
        <p>
          Thanks so much for subscribing, it means a lot that you trust me with
          your email these days. I email when, and only when, I publish new
          content, which I try to do about once a week.
        </p>
        <p>
          All you need to do now is confirm your subscription by clicking the
          link in the email you should be getting.
        </p>
      </div>
    </Layout>
  );
};

export default ThanksPage;
