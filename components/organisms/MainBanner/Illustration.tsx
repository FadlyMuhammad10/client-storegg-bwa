import Image from "next/image";
import React from "react";
import Header1 from "../../../public/img/Header-1.png";
import Header2 from "../../../public/img/Header-2.png";
import Header3 from "../../../public/img/Header-3.png";

import Star from "../../../public/icon/star.svg";

export default function Illustration() {
  return (
    <div className="col-lg-6 col-12 d-lg-block d-none">
      <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
        <div className="position-relative" data-aos="zoom-in">
          <Image src={Header1} className="img-fluid" alt="" />
          <div className="card left-card position-absolute border-0">
            <div className="d-flex align-items-center mb-16 gap-3">
              <Image
                src={Header2}
                width={40}
                height={40}
                className="rounded-pill"
                alt=""
              />
              <div>
                <p className="text-sm fw-medium color-palette-1 m-0">
                  Shayna Anne
                </p>
                <p className="text-xs fw-light color-palette-2 m-0">
                  Professional Gamer
                </p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Image src={Star} width={24} height={22} alt="" />
              <Image src={Star} width={24} height={22} alt="" />
              <Image src={Star} width={24} height={22} alt="" />
              <Image src={Star} width={24} height={22} alt="" />
              <Image src={Star} width={24} height={22} alt="" />
            </div>
          </div>
          <div className="card right-card position-absolute border-0">
            <div className="position-relative d-flex flex-row justify-content-center mb-24">
              <Image src={Header3} className="rounded-pill" alt="" />
              <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                New
              </p>
            </div>
            <div>
              <p className="text-sm text-center m-0 fw-medium color-palette-1">
                Lann Knight
              </p>
              <p className="fw-light text-center m-0 color-palette-2 text-xs">
                Dota 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
