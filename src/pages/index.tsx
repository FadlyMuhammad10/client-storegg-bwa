import AOS from "aos";
import { useEffect } from "react";
import Head from "next/head";
import MainBanner from "../../components/organisms/MainBanner";
import Navbar from "../../components/organisms/Navbar";

import FeaturedGame from "../../components/organisms/FeaturedGame";
import Footer from "../../components/organisms/Footer";
import Reached from "../../components/organisms/Reached";
import Story from "../../components/organisms/Story";
import TransactionsStep from "../../components/organisms/TransactionsStep";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StoreGG - Get a New Experience in Gaming"
        ></meta>
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        ></meta>
        <meta
          property="og:image"
          content="https://bwa-topup.herokuapp.com/uploads/1.png"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <MainBanner />

      <TransactionsStep />

      <FeaturedGame />

      <Reached />

      <Story />

      <Footer />
    </>
  );
}
