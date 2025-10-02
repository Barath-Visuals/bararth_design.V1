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
import Loader from "./Loader";
import { useState } from "react";

export default function UIUX1 () {
    const images = [ Lgss1,Lgss2,Lgss3,Lgss4,Lgss5,Lgss6,Lgss7];

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
                        Lgss
                    </span>
                </div>
            </div>
            <div className={style.imageGrid}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Lgss ${index + 1}`} ref={(el) => {imgRefs.current[index] = el}} onLoad={handleImageLoad} className={style.imageItem} style={{ opacity: 0, visibility: "hidden" }}/>
                ))}
            </div>
        </div>
    )
}