import React from "react";

import { Helmet } from "react-helmet";

import "carbon-components/scss/globals/scss/styles.scss";
import "bulma/css/bulma.min.css";
import "animate.css/animate.min.css";

import Provider from "../../context/Provider";

import GlobalStyles from "../../sass/GlobalStyles";

import Fonts from "../../assets/Fonts/Fonts";

import Nav from "../Nav/Nav";
import Container from "../Container/Container";

import Footer from "../../sections/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faStar,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHeart, faStar, faCodeBranch);

const Layout = (content) => (
  <Provider>
    <GlobalStyles />
    <Fonts />
    <Helmet htmlAttributes={{ lang: "en", id: "top" }} title="Nicholas Adamou">
      <link rel="icon" href="/assets/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/assets/favicons/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/assets/favicons/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/assets/favicons/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/assets/favicons/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/assets/favicons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/assets/favicons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/assets/favicons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/assets/favicons/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicons/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/favicons/favicon-128.png"
        sizes="128x128"
      />

      <meta name="application-name" content="Nicholas Adamou" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta
        name="msapplication-TileImage"
        content="/assets/favicons/mstile-144x144.png"
      />
      <meta
        name="msapplication-square70x70logo"
        content="/assets/favicons/mstile-70x70.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="/assets/favicons/mstile-150x150.png"
      />
      <meta
        name="msapplication-wide310x150logo"
        content="/assets/favicons/mstile-310x150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="/assets/favicons/mstile-310x310.png"
      />
    </Helmet>
    <Nav />
    <Container>{content()}</Container>
    <Footer />
  </Provider>
);

export default Layout;