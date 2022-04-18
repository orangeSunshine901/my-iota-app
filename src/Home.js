import Button from "./Button";
import SocialButtons from "./SocialButtons"
import { Navigate, useNavigate } from "react-router-dom";

function Home(){
    let navigate = useNavigate();

    return(
        <div style={{background: "green", height: "100vh"}}>
            <h2>Home</h2>
            <Button page={()=>{
                navigate("/get-started/what-is-iota")
            }}>This is a button</Button>
            <SocialButtons></SocialButtons>
        </div>
    )
}

export default Home;