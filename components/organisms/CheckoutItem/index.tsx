import Image from "next/image";
import Thumbnail3 from "../../../public/img/Thumbnail-3.png";
import { useEffect, useState } from "react";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    name: "",
    category: {
      name: "",
    },
    thumbnail: "",
  });
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    const dataItemLocal = JSON.parse(dataFromLocal!);
    setDataItem(dataItemLocal);
  }, []);
  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image
            src={`${IMG}/${dataItem.thumbnail}`}
            width={280}
            height={380}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
        <p className="color-palette-2 m-0">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}
