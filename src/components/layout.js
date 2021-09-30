import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Nav from "../components/Nav";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query GET_SITE_TITLE {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="wrapper bg-no-repeat bg-gray-900 text-gray-100 font-sans min-h-screen">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Nav />
      <main className="max-w-5xl m-auto">{children}</main>
      <footer className="flex flex-col max-w-5xl m-auto pb-24 rounded mt-24 md:mt-48">
        <div className="flex flex-wrap md:flex-nowrap">
          <ul className="w-full md:w-1/3 text-center md:text-left font-bold text-xl flex flex-col gap-y-2 mb-12 md:mb-0">
            <li>
              <Link className="hover:text-indigo-500" to="/">
                home
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="/about">
                about
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="/tutorials">
                tutorials
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="/contact">
                contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="/subscribe">
                subscribe
              </Link>
            </li>
          </ul>
          <div className="w-4/5 md:w-2/3 bg-indigo-500 flex items-center justify-around p-12 rounded-lg m-auto md:m-0">
            <a href="https://twitter.com/KenTheRogers">
              <FiTwitter className="text-gray-900 text-5xl" />
            </a>
            <a href="https://linkedin.com/in/kennetharogers">
              <FiLinkedin className="text-gray-900 text-5xl" />
            </a>
            <a href="https://github.com/kenrogers">
              <FiGithub className="text-gray-900 text-5xl" />
            </a>
          </div>
        </div>
        <p className="text-center mt-24 font-black">
          Made with Gatsby, Tailwind, and 💜
        </p>
      </footer>
    </div>
  );
};

export default Layout;
