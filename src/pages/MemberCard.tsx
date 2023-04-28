import { Box, Card, CardContent, CardMedia, Typography, Divider, Paper, CardActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Draggable from "react-draggable";

import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const LinkedInIcon = () => <FaLinkedin size={32} />;
const InstaIcon = () => <FaInstagram size={32} />;

const CenterBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
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

export const Membercard = () => {
  return (
    <Draggable>
    <CenterBox>
    <Box width='300px'>
      <BlackCard>
        <CardMedia component='img' height='140' image='https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM='>
        </CardMedia>
        <BlackCardContent>
        <Typography gutterBottom variant='h6' component='div'>Arjun</Typography>
        <Divider style={{ backgroundColor: 'white' }}/>
        <Typography variant='body2' color='white'>
          Website Guy
        </Typography>
        </BlackCardContent>
        <CardActions>
        <LinkedInIcon />
        <InstaIcon  />
        </CardActions>
      </BlackCard>
    </Box>
    </CenterBox>
    </Draggable>
  );
};






