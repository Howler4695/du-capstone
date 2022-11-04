import React from "react";
import Head from "next/head";
import { Section, Header, Footer, Button, AddBookModal } from "../components";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>DU Capstone</title>
        <meta
          name="description"
          content="Capstone project for Digital University Dev Team"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header
        style={{
          alignContent: "flex-start",
          padding: "1rem 6rem",
        }}
      >
        <Image
          style={{ padding: "0rem 1rem" }}
          src="/dancing-skeleton-1.gif"
          alt="DU Logo"
          height="40px"
          width="40px"
        />
        <text
          style={{
            fontFamily: "poppins",
            fontSize: "30px",
            padding: "0rem 1rem",
          }}
        >
          Howle's Capstone
        </text>
        <Image
          style={{ padding: "0rem 1rem" }}
          src="/dancing-skeleton-1.gif"
          alt="DU Logo"
          height="40px"
          width="40px"
        />
      </Header>
      <Section>
        <Header>
          <text style={{ fontFamily: "poppins", fontSize: "50px" }}>
            My Library
          </text>
        </Header>
        <AddBookModal />
        <Button>Yes</Button>
      </Section>
      <Footer text="ⓒ2001 Howle Federal - All Rights Reservered" />
    </>
  );
};

export default Home;
