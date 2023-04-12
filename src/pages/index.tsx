import Image from 'next/image'
import { Inter } from 'next/font/google'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';

import Logo from "../../public/logo.svg";
import Card from '@mui/material/Card';

const inter = Inter({ subsets: ['latin'] })
const navbar_elements = [
  {text: "Home", key: "HomeBtn", href: "#home"},
  {text: "About", key: "AboutBtn", href: "#about"},
  {text: "Projects", key: "ProjectsBtn", href: "#projects"},
  {text: "Team", key: "TeamBtn", href: "#team"},
  {text: "Support Us!", key: "SupportBtn", href: "#support_us"},
  {text: "Contact", key: "ContactBtn", href: "#contact"},
]

const button_on_color = '#0062cc';
const button_off_color = '#0063cc';

const NavbarButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
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
    backgroundColor: '#0069d9',
    borderColor: button_on_color,
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: button_on_color,
    // borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betsween p-10">
      <div className="navbar">
        <div className="logo">
          <Image
            priority
            src={Logo}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="navbar-flex-container">
          {
            navbar_elements.map( element => (
              <div className="navbar-flex-child" key={element.key}>
                <NavbarButton className="navbar-btn" variant="contained" href={element.href}> {element.text} </NavbarButton>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betsween p-10">
      
    </main>
  )
}
