import SkillBar from "./skillbar";
import style from "../styles/styles.module.scss";
import Loader from "./Loader";
import { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";

export default function Proficiency() {
    const skills = [
        { name: "HTML 5", percent: 90 },
        { name: "CSS 3", percent: 85 },
        { name: "JavaScript", percent: 60 },
        { name: "React", percent: 60 },
        { name: "GSAP", percent: 50 },
        { name: "Python", percent: 55 },
        { name: "Color Grading", percent: 65 },
        { name: "Davinci Resolve", percent: 75 },
        { name: "Framer Motion", percent: 40 },
    ];

    const [allLoad, setAllLoad] = useState(false);
    const loaderRef = useRef(null);
    const headingRef = useRef(null);
    const skillRef = useRef([]);

    useEffect(() => {
        if(!allLoad) return;

        const timer = setTimeout(() => {

            const tl = gsap.timeline();

            tl.fromTo(headingRef.current,
                {y : 40, opacity : 0, visibility : "hidden"},
                {y : 0, opacity : 1, duration: 1.2, ease: "power3.out", visibility : "visible"}
            );

            skillRef.current.forEach((skill, i) => {
                if(!skill) return;

                tl.fromTo(
                    skill,
                    {opacity: 0, y: 10, visibility : "hidden"},
                    {opacity: 1, y: 0, duration: 0.8, ease: "power3.out", visibility : "visible"},
                    "-=0.3"
                )
            })

            gsap.to(loaderRef.current,{
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    if (loaderRef.current) loaderRef.current.style.display = "none";
                },
            })
        }, 3000)

        return () => clearTimeout(timer)
    }, [allLoad])

    useEffect(() => {
        setAllLoad(true)
    }, []);


    return (
        <div className={style.Proficiency_container}>
            <Loader loaderRef={loaderRef}/>
            <div className={style.ProficiencyWrapper}>
                <div className={style.ProficiencyHeading} ref={headingRef} style={{ opacity: 0, visibility: "hidden" }}>
                    <span className={style.Proficiencyhead}>Proficiency.</span>
                </div>
            </div>
            <div className={style.skillsList} >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        ref={(el) => { if (el) skillRef.current[index] = el;}}
                        style={{ opacity: 0, visibility: "hidden" }}
                    >
                        <SkillBar name={skill.name} percent={skill.percent} />
                    </div>
                ))}
            </div>
        </div>
    );
}
