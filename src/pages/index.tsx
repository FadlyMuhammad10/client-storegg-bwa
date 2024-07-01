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
