import Image from 'next/image'
import Button from '@mui/material/Button'
import { Inter } from 'next/font/google'

import { styled } from '@mui/material/styles';

import Logo from "../../../public/logo.svg";
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const navbar_elements = [
  {text: "Home", key: "HomeBtn", href: "/", scroll: "home"},
  {text: "About", key: "ProjectsBtn", href: "about", scroll: "about"},
  {text: "Projects", key: "ProjectsBtn", href: "projects", scroll: "projects"},
  {text: "Team", key: "TeamBtn", href: "team", scroll: "team"},
  {text: "Sponsors", key: "SupportBtn", href: "sponsors", scroll: "support"},
]

const button_on_color = '#770000';
const button_hover_color = '#8F0000';
const button_off_color = '#780000';

const NavbarButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '0px',
  borderRadius: '0px',
  lineHeight: 1.5,
  backgroundColor: button_off_color,
  borderColor: button_off_color,
  '&:hover': {
    backgroundColor: button_hover_color,
    borderColor: button_on_color,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: button_on_color,
    // borderColor: '#005cbf',
  }
});

function scroll_to(scroll: any) {
  let elem = document.getElementById(scroll);
  if (elem != null)
    elem.scrollIntoView()
}

export default function Navbar() {
  const [logoIsHidden, setLogoIsHidden] = useState(false);

  // const listenToScroll = () => {
  //   let heightToHideFrom = 10;
  //   const winScroll = document.body.scrollTop ||
  //       document.documentElement.scrollTop;

  //   if (winScroll > heightToHideFrom) {
  //     setLogoIsHidden(true);
  //   } else {
  //     setLogoIsHidden(false);
  //   }
  // };

  // useEffect(() => {   
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => 
  //      window.removeEventListener("scroll", listenToScroll); 
  // }, [])

  return (
    <div className="top-bar">
      { logoIsHidden ? <></> :
        <div className="logo w-50vw">
          <Image
            priority
            className="logo w-10vw"
            src={Logo}
            width={200}
            height={200}
            alt=""
          />
        </div>
      }
      <div className="navbar">
        <div className='off-screen-navbar'></div>
        <div className="navbar-flex-container">
        {
          navbar_elements.map( element => (
            <NavbarButton className="navbar-btn" variant="contained" href={element.href} onClick={() => scroll_to(element.scroll)} key={element.key}> {element.text} </NavbarButton>
          ))
        }
        </div>
      </div>
    </div>
  )
}