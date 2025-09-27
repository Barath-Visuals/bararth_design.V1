import { useEffect, useRef } from "react";
import style from "../styles/stylestwo.module.scss";
import {gsap} from "gsap";
import Lgss1 from "../assets/UI/UX images/lgss1.jpg";
import Lgss2 from "../assets/UI/UX images/lgss2.jpg";
import Lgss3 from "../assets/UI/UX images/lgss3.jpg";
import Lgss4 from "../assets/UI/UX images/lgss4.jpg";
import Lgss5 from "../assets/UI/UX images/lgss5.jpg";
import Lgss6 from "../assets/UI/UX images/lgss6.jpg";
import Lgss7 from "../assets/UI/UX images/lgss7.jpg";


export default function UIUX1 () {
    const images = [ Lgss1,Lgss2,Lgss3,Lgss4,Lgss5,Lgss6,Lgss7];

    const titleRef = useRef(null)
    const imgRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(titleRef.current,
            {y : 50, opacity : 0},
            {y : 0, opacity : 1,
                duration: 2.5,
                ease: "power3.inOut",
            }
        )

        imgRefs.current.forEach((img, index) => {
            gsap.fromTo(
                img,{
                    clipPath : "inset(100% 0 0 0)",
                    opacity : 0,
                    scale : 1.05,
                },{
                    clipPath : "inset(0% 0 0 0)",
                    opacity : 1,
                    scale : 1,
                    duration : 2.5,
                    delay : 0.5 + index * 0.2,
                    ease : "power3.inOut"
                }
            )
        })
    }, [])
    return (
        <div className={style.UIUX_container}>
            <div className={style.client_name}>
                <div className={style.client_wrapper} ref={titleRef}>    
                    <span className={style.client}>
                        Lgss
                    </span>
                </div>
            </div>
            <div className={style.imageGrid}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Lgss ${index + 1}`} ref={(el) => {imgRefs.current[index] = el}} className={style.imageItem} />
                ))}
            </div>
        </div>
    )
}