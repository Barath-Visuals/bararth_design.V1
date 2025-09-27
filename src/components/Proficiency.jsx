import SkillBar from "./skillbar";
import style from "../styles/styles.module.scss";

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

    return (
        <div className={style.Proficiency_container}>
            <div className={style.ProficiencyWrapper}>
                <div className={style.ProficiencyHeading}>
                <span className={style.Proficiencyhead}>Proficiency.</span>
                </div>
            </div>
            <div className={style.skillsList}>
                {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percent={skill.percent} />
                ))}
            </div>
        </div>
    );
}
