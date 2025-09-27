import { useEffect, useRef } from "react";
import style from "../styles/stylestwo.module.scss";
import {gsap} from "gsap";
import Company from "../components/company";
import SocialMedia from "../components/socialmedia";

export default function RightComponent () {
    const uiux1Ref = useRef(null);
    const uiux2Ref = useRef(null);

    useEffect(() => {
        const uiux1El = uiux1Ref.current;
        const uiux2El = uiux2Ref.current;

        gsap.set(uiux1El, { scale : 0, borderRadius: "50%", opacity: 0, transformOrigin : "top left" });
        gsap.to(uiux1El, { scale : 1, borderRadius: "30px", opacity: 1, duration: 1, ease: "power3.inOut", delay: 0.3 });

        gsap.set(uiux2El, { scale : 0, borderRadius: "50%", opacity: 0, transformOrigin : "top left"});
        gsap.to(uiux2El, { scale : 1, borderRadius: "30px", opacity: 1, duration: 1, ease: "power3.inOut", delay: 0.6 });
    }, []);
    return(
        <>
            <div className={style.leftWrappers}>
                <div className={style.LeftContent} ref={uiux1Ref}>
                    <Company/>
                </div>
                <div className={style.LeftContent} ref={uiux2Ref}>
                    <SocialMedia/>
                </div>
            </div>
        </>
    )
}