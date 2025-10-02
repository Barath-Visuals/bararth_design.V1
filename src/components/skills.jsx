import { useEffect, useRef, useState } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";
import Loader from "./Loader";


export default function Description () {
    const desRef = useRef(null);
    const skillRefs = useRef([]);
    const [allLoad, setAllLoad] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        if (!allLoad) return;

        const timer = setTimeout(() => {
            const tl = gsap.timeline();

            tl.to(loaderRef.current,
                {
                    opacity : 0 ,
                    duration : 1 ,
                    onComplete: () => {
                        if (loaderRef.current) loaderRef.current.style.display = "none";
                    },
                }
            )

            tl.fromTo(desRef.current,
                {y : 50, opacity : 0, visibility : "hidden"},
                {y : 0, opacity : 1,
                    duration: 1.5,
                    ease: "power3.inOut",
                    visibility : "visible"
                }
            )

            skillRefs.current.forEach((skill, i) => {
                if(!skill) return;

                tl.fromTo(
                    skill,
                    {y : 30, opacity : 0, visibility : "hidden"},
                    {y : 0, opacity : 1,
                        duration: 0.6,
                        ease: "power3.inOut",
                        visibility : "visible"
                    },"-=0.3"
                )
            })
        }, 3000);

        return () => clearTimeout(timer);

    }, [allLoad]);

    useEffect(() => {
        setAllLoad(true);
    }, []);

    return(
        <div className={style.skillContainer}>
            <Loader loaderRef={loaderRef}/>
            <div className={style.skillWrapper}>
                <div className={style.skillHeading} ref={desRef} style={{ opacity: 0, visibility: "hidden" }}>
                    <span className={style.head} >
                        Skills.
                    </span>
                </div>
            </div>
            <div className={style.skilldesWrapper} >
                {["HTML", "CSS", "React", "Python", "Adobe", "Davinci Resolve","GSAP","Color Grading", "3D","JavaScript", "Framer Motion", "Blender"].map((skill, index) => (
                <div key={index} className={style.skillDes} style={{ opacity: 0, visibility: "hidden" }} ref={(el) => {if (el) skillRefs.current[index] = el;}}>
                    <span className={style.skillText}>{skill}</span>
                </div>
                ))}
            </div>
        </div>
    )
}