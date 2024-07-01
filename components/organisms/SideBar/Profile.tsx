import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    name: "",
  });
  const IMG = process.env.NEXT_PUBLIC_IMG;
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token); // mengembalikan token fake ke asli
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;

      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={`${IMG}/${user.avatar}`}
        width="90"
        height="90"
        className="img-fluid mb-20"
        alt="profile"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
