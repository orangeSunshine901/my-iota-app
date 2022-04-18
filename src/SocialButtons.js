import youtubeIcon from "./assets/icons/youtube.svg"
import gitHubIcon from "./assets/icons/github.svg"
import discordIcon from "./assets/icons/discord.svg"
import twitterIcon from "./assets/icons/twitter.svg"
import redditIcon from "./assets/icons/reddit.svg"
import linkedinIcon from "./assets/icons/linkedin.svg"
import instagramIcon from "./assets/icons/Instagram.svg"


function SocialButtons(){

    const socialButtons = [
        {
            title: "Youtube",
            icon: youtubeIcon
        },
        {
            title: "GitHub",
            icon: gitHubIcon
        },
        {
            title: "Discord",
            icon: discordIcon
        },
        {
            title: "Twitter",
            icon: twitterIcon
        },
        {
            title: "Reddit",
            icon: redditIcon
        },
        {
            title: "Linkedin",
            icon: linkedinIcon
        },
        {
            title: "Instagram",
            icon: instagramIcon
        }
    ]
    return(
        <div> 
            <div>
                {socialButtons.map((social)=>{
                    return(<div>
                    <h1>{social.title}</h1>
                    <img src={social.icon} alt=""></img>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}

export default SocialButtons;