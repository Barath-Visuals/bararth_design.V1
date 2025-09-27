import { useEffect, useRef } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";
import Proficiency from "../components/Proficiency";
import Imagecarousel from "../components/imagescarousel";
import photo1 from "../assets/images/Alan-BeachView.jpg";
import photo2 from "../assets/images/alan.jpg";
import photo3 from "../assets/images/Flowers.jpg";
import photo4 from "../assets/images/Jai-Light.jpg";
import photo5 from "../assets/images/Panningshot-Bird.jpg";
import photo6 from "../assets/images/Vicky-Bike_lean.jpg";
import photo7 from "../assets/images/Vicky-Blue_blur.jpg";
import photo8 from "../assets/images/Vicky-Netta_Road.jpg";
import photo9 from "../assets/images/Vicky-Netta-Lakeview.jpg";


export default function LeftContent () {

    const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
    const profileRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        const profileEl = profileRef.current;
        const skillsEl = skillsRef.current;

        gsap.set(profileEl, { scale : 0, borderRadius: "50%", opacity: 0, transformOrigin : "top left" });
        gsap.to(profileEl, { scale : 1, borderRadius: "30px", opacity: 1, duration: 1, ease: "power3.inOut", delay: 0.3 });

        gsap.set(skillsEl, { scale : 0, borderRadius: "50%", opacity: 0, transformOrigin : "top left"});
        gsap.to(skillsEl, { scale : 1, borderRadius: "30px", opacity: 1, duration: 1, ease: "power3.inOut", delay: 0.6 });
    }, []);

    return (
        <>
            <div className={style.leftWrappers}>
                <div className={style.LeftContent} ref={profileRef}>
                    <Proficiency/>
                </div>
                <div className={style.LeftContents} ref={skillsRef}>
                    <Imagecarousel images = {images}/>
                </div>
            </div>
        </>
    )
}