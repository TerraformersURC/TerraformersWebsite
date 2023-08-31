import Button from "@mui/material/Button";
import { redirect } from "next/dist/server/api-utils";
// import Router , {useRouter}  from 'next/router';
    
export default function LearnMoreButton(props: any) {
    return (
        <Button className="w-1/2 h-7" onClick={() => alert("TODO")}> 
            Learn more at {props.text}
        </Button>
    );
}
    