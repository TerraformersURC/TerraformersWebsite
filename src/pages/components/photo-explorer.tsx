import Image from "next/image";
import SponsorFlyer from "../../../public/sponsor_flyer_icon.png"
import { useEffect, useState } from "react";

function calcHight(x: any) { 
    const w = 100; 
    const h = 100; /* As a percentage for now */
    return h * Math.sin(Math.PI * x / w)
}

function pullPhoto(img: any, hs: any, z: any) {
    return (<div style={{ height: hs.toString() + "%", width: "auto", margin: "2.5vw", flex: 5, overflow: "show", zIndex: z}}>
        <Image 
            priority
            style={{height: "100%", maxWidth: "1000%"/*, boxShadow: "5px 2.5px 2.5px black"*/}}
            src={img}
            width={450}
            height={450}
            alt=""
            key={1}
        />
    </div>);
}

export default function PhotoExplorer() {
    var xs = [25, 37.5, 50, 62.5, 75];
    var hs = xs.map(calcHight);

    const [imgs, _setImgs] = useState([
        "about/all-night.png", "about/first-meeting.png", 
        "about/mikolaj-at-board.png", "about/rover-over-rocks.png" ,
        "about/cadding.png", "about/maryland-day.png", "about/pi-analysis.png"])

    const [elems, _setElems] = useState([0,1,2,3,4].map((i) => {return pullPhoto(imgs[i], hs[i], 2 - Math.abs(i - 2))}));

    useEffect(() => {
        async function animation() {
            var tmpImgs = imgs;
            var prevImg = tmpImgs[0];
            for (var i = 0; i <= tmpImgs.length; i++) {
                var tmp = tmpImgs[i % tmpImgs.length];
                tmpImgs[i % tmpImgs.length] = prevImg;
                prevImg = tmp;
            }
            _setImgs(tmpImgs);
            _setElems([0,1,2,3,4].map((i) => {return pullPhoto(imgs[i], hs[i], 2 - Math.abs(i - 2))}));
        }

        setInterval(animation, 5000);
    });

    return (
        <div style={{height: "30vw", width: "100vw", display: "flex", paddingRight: "15%"}}>
            { elems }
        </div>
    );
}