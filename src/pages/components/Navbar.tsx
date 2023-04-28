import Image from 'next/image'
import Button from '@mui/material/Button'
import { Inter } from 'next/font/google'

import { styled } from '@mui/material/styles';

import Logo from "../../../public/logo.svg";

const inter = Inter({ subsets: ['latin'] })
const navbar_elements = [
  {text: "Home", key: "HomeBtn", href: "#home"},
  {text: "About", key: "AboutBtn", href: "#about"},
  {text: "Projects", key: "ProjectsBtn", href: "#projects"},
  {text: "Team", key: "TeamBtn", href: "#team"},
  {text: "Sponsors", key: "SupportBtn", href: "#support_us"},
  {text: "Contact", key: "ContactBtn", href: "#contact"},
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
  lineHeight: 1.5,
  backgroundColor: button_off_color,
  borderColor: button_off_color,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
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

export const Navbar = () => {
    return (
        <div className="top-bar">
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
            <div className="navbar">
                <div className='off-screen-navbar'></div>
                <div className="navbar-flex-container">
                {
                    navbar_elements.map( element => (
                        <NavbarButton className="navbar-btn" variant="contained" href={element.href} key={element.key}> {element.text} </NavbarButton>
                    ))
                }
                </div>
            </div>
        </div>
    )
};