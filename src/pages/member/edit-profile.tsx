import Cookies from "js-cookie";
import Image from "next/image";
import SideBar from "../../../components/organisms/SideBar";
import Input from "../../../components/atoms/Input";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { jwtDecode } from "jwt-decode";
import { EditMemberProfile } from "../../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface UserStateTypes {
  avatar: any;
  email: string;
  name: string;
  id: string;
}

export default function EditProfile() {
  const [user, setUser] = useState<UserStateTypes>({
    avatar: "",
    email: "",
    name: "",
    id: "",
  });

  const router = useRouter();

  const [imagePreview, setImagePreview] = useState("/");

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

  const onSubmit = async () => {
    const data = new FormData();
    data.append("name", user.name);
    data.append("image", user.avatar);

    const response = await EditMemberProfile(data);
    if (response.error) {
      toast.error(response.message, { autoClose: 3000 });
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu={"settings"} />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview === "/" ? (
                      <Image
                        src={`${IMG}/${user.avatar}`}
                        width="90"
                        height="90"
                        className="avatar img-fluid"
                        alt=""
                        style={{ borderRadius: "100%" }}
                      />
                    ) : (
                      <Image
                        src={imagePreview}
                        alt="upload"
                        width={120}
                        height={120}
                        className="img-upload"
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" disabled value={user.email} />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
