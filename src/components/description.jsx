import { useEffect, useRef } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";


export default function Description () {

    const nameRef = useRef(null);
    const roleRef = useRef(null);
    const desRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            nameRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 2.5, ease: "power3.inOut" }
        );

        gsap.fromTo(
            roleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 2.5, ease: "power3.inOut", delay: 0.2 }
        );

        gsap.fromTo(
            desRef.current,
            {y: 50, opacity : 0},
            {y: 0, opacity: 1, duration: 2.5, ease: "power3.inOut", delay: 0.5}
        )
    }, []);

    return(
        <div className={style.profile_container} >
            <div className={style.Description_set} >
                <div className={style.sets} ref={nameRef}>
                    <span className={style.heroName} >Barath B M</span>
                </div>
            </div>
            <div className={style.Description_set} >
                <div className={style.sets} ref={roleRef}>
                    <span className={style.heroRole}>Photographer | Designer</span>
                </div>
            </div>
            <div className={style.Description_set} >
                <div className={style.setes} ref={desRef}>
                    <span className={style.des}>“A creative designer and developer shaping modern digital experiences with a balance of clarity, motion, and detail. I focus on minimal design systems, smooth interactions, and immersive visuals — blending code, 3D, and photography to craft work that feels refined, functional, and unforgettable.”</span>
                </div>
            </div>
        </div>
    )
}