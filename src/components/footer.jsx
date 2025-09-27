import { useEffect, useRef } from "react";
import style from "../styles/footer.module.scss";
import {gsap} from "gsap";

export default function Footer () {

    const svgRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            svgRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1,
                duration: 2,
                ease: "power3.inOut",
            }
        );
    }, []);

    return (
        <div className={style.Header_container}>
            <div className={style.Header_wrappers}>
                <div className={style.Header_wrapper} ref={svgRef}>
                    <span className={style.Header_wrapperContainer}>
                        copyrights @ 2025 barathdesign.inc | All rights reserverd
                    </span>
                </div>
            </div>
        </div>
    )
}