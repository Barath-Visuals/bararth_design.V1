import { useEffect, useRef, useState } from "react";
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
import Loader from "./Loader";


export default function UIUX2 () {
    const images = [ Portfolio7, Portfolio8, Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6 ];

    const titleRef = useRef(null)
    const imgRefs = useRef([]);
    const loaderRef = useRef(null);
    const loadCount = useRef(0);
    const [allLoaded, setAllLoaded] = useState(false);

    const handleImageLoad = () => {
        loadCount.current += 1;
        if(loadCount.current === images.length) {
            setAllLoaded(true)
        } 
    }

    useEffect(() => {

        if(!allLoaded) return;

        const timer = setTimeout(() => {
            const tl = gsap.timeline();
            tl.fromTo(titleRef.current,
                {y : 50, opacity : 0, visibility : "hidden"},
                {y : 0, opacity : 1,
                    duration: 2.5,
                    ease: "power3.inOut",
                    visibility : "visible",
                }
            )
    
            imgRefs.current.forEach((img, index) => {
                if (!img) return;
                tl.fromTo(
                    img,{
                        clipPath : "inset(100% 0 0 0)",
                        opacity : 0,
                        scale : 1.05,
                        visibility : "hidden",
                    },{
                        clipPath : "inset(0% 0 0 0)",
                        opacity : 1,
                        scale : 1,
                        duration : 2.5,
                        delay : 0.5 + index * 0.2,
                        ease : "power3.inOut",
                        visibility : "visible",
                    }, 0
                )
            })
            gsap.to(loaderRef.current, 
                {
                    opacity : 0,
                    duration : 1,
                    onComplete : () => {if(loaderRef.current) loaderRef.current.style.display = "none"}
                }
            )
        }, 3000)

        return () => clearTimeout(timer)

    }, [allLoaded])

    return (
        <div className={style.UIUX_container}>
            <Loader loaderRef={loaderRef}/>
            <div className={style.client_name}>
                <div className={style.client_wrapper} ref={titleRef} style={{ opacity: 0, visibility: "hidden" }}>
                    <span className={style.client}>
                        Portfolio
                    </span>
                </div>
            </div>
            <div className={style.imageGrid}>
                {images.map((img, index) => (
                    <img key={index} src={img} onLoad={handleImageLoad} alt={`Lgss ${index + 1}`} ref={(el) => {imgRefs.current[index] = el}} className={style.imageItem} style={{ opacity: 0, visibility: "hidden" }}/>
                ))}
            </div>
        </div>
    )
}