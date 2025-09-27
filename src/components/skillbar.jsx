import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../styles/styles.module.scss";

export default function SkillBar({ name, percent }) {
    const totalBlocks = 55;
    const filledBlocks = Math.round((percent / 100) * totalBlocks);
    const barRef = useRef([]);

    useEffect(() => {
        gsap.set(barRef.current, { height: 0, opacity: 0, transformOrigin: "bottom center" });

        gsap.to(barRef.current, {
            height: "15px",
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.05,
        });
    }, []);

    return (
        <div className={style.skillBar}>
            <div className={style.skillInfo}>
                <span className={style.skillName}>{name}</span>
                <span className={style.skillPercent}>{percent}%</span>
            </div>
            <div className={style.blockBar}>
                {[...Array(totalBlocks)].map((_, index) => (
                <div
                    key={index}
                    ref={(el) => (barRef.current[index] = el)}
                    className={`${style.block} ${index < filledBlocks ? style.filled : ""}`}
                />
                ))}
            </div>
        </div>
    );
}
