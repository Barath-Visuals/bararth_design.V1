import { useEffect, useRef } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";


export default function Description () {
    const desRef = useRef(null)
    const skillRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(desRef.current,
            {y : 50, opacity : 0},
            {y : 0, opacity : 1,
                duration: 2.5,
                ease: "power3.inOut",
            }
        )

        gsap.fromTo(skillRef.current,
            {y : 50, opacity : 0},
            {y : 0, opacity : 1,
                duration: 1.5,
                ease: "power3.inOut",
                delay: 1,
            }
        )
    }, [])

    return(
        <div className={style.skillContainer}>
            <div className={style.skillWrapper}>
                <div className={style.skillHeading} ref={desRef}>
                    <span className={style.head} >
                        Skills.
                    </span>
                </div>
            </div>
            <div className={style.skilldesWrapper} ref={skillRef}>
                {["HTML", "CSS", "React", "Python", "Adobe", "Davinci Resolve","GSAP","Color Grading", "3D","JavaScript", "Framer Motion", "Blender"].map((skill, index) => (
                <div key={index} className={style.skillDes} >
                    <span className={style.skillText}>{skill}</span>
                </div>
                ))}
            </div>
        </div>
    )
}