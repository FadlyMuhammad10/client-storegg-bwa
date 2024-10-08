import "@/styles/detail.css";
import "@/styles/globals.css";
import "@/styles/homepage.css";
import "@/styles/utilities.css";
import "@/styles/checkout.css";
import "@/styles/complete-checkout.css";
import "@/styles/sign-in.css";
import "@/styles/sign-up.css";
import "@/styles/sign-up-photo.css";
import "@/styles/sign-up-success.css";
import "@/styles/404-not-found.css";
import "@/styles/overview.css";
import "@/styles/sidebar.css";
import "@/styles/transactions.css";
import "@/styles/transactions-detail.css";
import "@/styles/edit-profile.css";
import "@/styles/navbar-log-in.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
