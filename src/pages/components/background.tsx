import Image from "next/image";

import Earth from "../../../public/earth-clipped.png"
import Mars from "../../../public/mars.png"
import BackgroundImg from "../../../public/background.gif";
import React from "react";

export default function Background() {
  return (
    <div>
      {/* <img src="" className="gif" data-src={BackgroundImg} alt=""/> */}
      {/*
      <script>
          const gifs = document.querySelectorAll('.gif');
          const observer = new IntersectiionObserver(callback);
          for (let i = 0; i < gifs.length; i++) {
          observer.observe(gifs[i]);
          }
      </script>
      */}

      <Image
        priority
        className="background-image"
        id="mars"
        src={Mars}
        width={450}
        height={450}
        alt=""
      />
      <Image
        priority
        className="background-image"
        id="earth"
        src={Earth}
        width={450}
        height={450}
        alt=""
      />
    </div>
    );
}
