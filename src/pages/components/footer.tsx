import Head from "next/head"
import Navbar from "./navbar";
import VertSpacer from "./vert-spacer";
import Background from "./background";

/** Contacts Section
 * Our contact information.
 */
export function ContactsSection() {
    return (
      <div style={{width: "100%", textAlign: "center"}}>
        <h1 id="contact"> Contact Us </h1>
        <p>
          You can reach us at terraformers@terraformers.tech
        </p>
      </div>
    );
}
  

export default function footer() {
    return (<div style={{width: "100%"}}>
        <VertSpacer/>
        <ContactsSection/>

        <VertSpacer/>
        <Background/>
    </div>);
}