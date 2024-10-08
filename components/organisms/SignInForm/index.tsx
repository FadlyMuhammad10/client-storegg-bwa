import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { SetLogin } from "../../../services/auth";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error("Email & Password harus diisi!!", { autoClose: 3000 });
    } else {
      const response = await SetLogin(data);
      if (response.error) {
        toast.error(response.message, { autoClose: 3000 });
      } else {
        toast.success("Login berhasil", { autoClose: 1000 });
        setTimeout(() => {
          const token = response.data.token;
          const tokenBase64 = btoa(token); // untuk membuat token jadi ugly/fake

          Cookies.set("token", tokenBase64, { expires: 1 });
          router.push("/");
        }, 1000);
      }
    }
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          type="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>

        <Link
          href="/sign-up"
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
