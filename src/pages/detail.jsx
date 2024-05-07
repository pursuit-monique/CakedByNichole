import { useLocation } from "react-router-dom";

export default function Detail(){
    const { state } = useLocation();
    console.log(state);
    return(
        <></>
    )
}