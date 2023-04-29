import Button from "@mui/material/Button";

export default function LearnMoreButton(props: any) {
    return (
        <Button className="w-1/2 h-7" onClick={() => alert('Work in progress.')}> 
            {props.text}
        </Button>
    );
}
    