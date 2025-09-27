import { useEffect, useRef } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";
import profilePic from "../assets/IMG_3444.jpg";



export default function Profile () {

    const imgRefs = useRef([]);

    useEffect(() => {

        
            gsap.fromTo(
                imgRefs.current,{
                    clipPath : "inset(100% 0 0 0)",
                    opacity : 0,
                    scale : 1.05,
                },{
                    clipPath : "inset(0% 0 0 0)",
                    opacity : 1,
                    scale : 1,
                    duration : 2.5,
                    ease : "power3.inOut",
                    delay : 0.5
                }
            )
    }, [])
    return(
        <div className={style.profile_container}>
            <div className={style.profile_wrapper} ref={imgRefs}>
                <img src={profilePic} alt="Profile" />
            </div>
        </div>
    )
}