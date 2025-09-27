import { useEffect, useRef } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";
import Profile from "../components/profilecard.jsx";
import Description from "../components/description.jsx";
import Skills from "../components/skills.jsx"

export default function LeftContent () {

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
            <div className={style.leftWrapper}>
                <div className={style.LeftContent} ref={profileRef}>
                    <Profile/>
                    <Description/>
                </div>
                <div className={style.LeftContent} ref={skillsRef}>
                    <Skills/>
                </div>
            </div>
        </>
    )
}