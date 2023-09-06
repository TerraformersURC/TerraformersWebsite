import { Box, Card, CardContent, CardMedia, Typography, Divider, Paper, CardActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const LinkedInIcon = () => <FaLinkedin size={32} />;

const CenterBox = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh"
});

const BlackCard = styled(Card)({
  backgroundColor: "#800404",
  color:"white",
  width:"200px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
  borderRadius: '16px 4px 4px 16px'
});

const BlackCardContent = styled(CardContent)({
  textAlign:"left",
  font:"Roboto"
});

export default function MemberCard(props: any) {
  return (
    <CenterBox>
    <Box width='300px'>
      <BlackCard>
        <CardMedia className="card-img" component='img' height='140' image={props.src}>
        </CardMedia>
        <BlackCardContent>
        <Typography gutterBottom variant='h6' component='div'> {props.name} </Typography>
        <Divider style={{ backgroundColor: 'white' }}/>
        <Typography variant='body2' color='white'>
          {props.desc}
        </Typography>
        </BlackCardContent>
        <CardActions>
        <Link href={props.linkedin}> <LinkedInIcon/> </Link>
        </CardActions>
      </BlackCard>
    </Box>
    </CenterBox>
  );
}
  





