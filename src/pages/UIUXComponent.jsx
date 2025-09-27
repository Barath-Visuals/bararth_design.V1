import { useEffect, useRef } from "react";
import style from "../styles/stylestwo.module.scss";
import {gsap} from "gsap";
import UIUX1 from "../components/UIUX1";
import UIUX2 from "../components/UIUX2";

export default function UIUXComponent () {
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
                    <UIUX1/>
                </div>
                <div className={style.LeftContent} ref={uiux2Ref}>
                    <UIUX2/>
                </div>
            </div>
        </>
    )
}