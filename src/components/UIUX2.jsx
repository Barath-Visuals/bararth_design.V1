import { useEffect, useRef } from "react";
import style from "../styles/stylestwo.module.scss";
import {gsap} from "gsap";
import Portfolio1 from "../assets/UI/UX images/portfolio1.jpg";
import Portfolio2 from "../assets/UI/UX images/portfolio2.jpg";
import Portfolio3 from "../assets/UI/UX images/portfolio3.jpg";
import Portfolio4 from "../assets/UI/UX images/portfolio4.jpg";
import Portfolio5 from "../assets/UI/UX images/portfolio5.jpg";
import Portfolio6 from "../assets/UI/UX images/portfolio6.jpg";
import Portfolio7 from "../assets/UI/UX images/portfolio7.jpg";
import Portfolio8 from "../assets/UI/UX images/portfolio8.jpg";


export default function UIUX2 () {
    const images = [ Portfolio7, Portfolio8, Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6 ];

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
                    delay : 0.6 + index * 0.3,
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
                        Portfolio
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