import React from "react";
import { FiMail } from "react-icons/fi";

export default function Subscribe() {
  return (
    <div className="w-full md:w-4/5 m-auto my-16 md:my-24">
      <h2 className="font-serif text-5xl font-black mb-6">
        Sign up to be notified whenever I write something new
      </h2>
      <p className="mb-6 text-base md:text-xl">
        No lead magnets. No autoresponder. No spam. No gimmicks. Just a simple
        email whenever I release a new tutorial, guide, or book.
      </p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/krgrs"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open("https://buttondown.email/krgrs", "popupwindow")
        }
        className="bg-gray-700 flex p-2 rounded"
      >
        <input
          placeholder="Enter your email"
          className="flex-grow bg-transparent border-none appearance-none text-base sm:text-lg leading-none px-2 sm:px-4 mb-1 sm:mb-0 focus:outline-none focus:border-0 focus:ring-0"
          type="email"
          name="email"
          id="bd-email"
        />
        <button type="submit" name="commit" className="subscribe w-1/3">
          Subscribe <FiMail />
        </button>
      </form>
    </div>
  );
}
