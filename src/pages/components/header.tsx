import Head from "next/head"
import Navbar from "./navbar";
import VertSpacer from "./vert-spacer";

export default function header() {
    return (<div>
        <Head>
            <title> Terraformers </title>
            <link rel="shortcut icon" href="/favicon.ico" />
            {/* <script type="text/javascript" src="./nlibgif.js"></script> */}
        </Head>

        <Navbar/>

        <VertSpacer/>
    </div>);
}