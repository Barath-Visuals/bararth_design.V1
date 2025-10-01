import { useEffect, useRef, useState } from "react";
import style from "../styles/styles.module.scss";
import {gsap} from "gsap";
import profilePic from "../assets/IMG_3444.jpg";
import Loader from "./Loader";



export default function Profile () {

    const imgRefs = useRef(null);
    const wrapperRef = useRef(null);
    const loaderRef = useRef(null);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
    if (loader) {
        const delayTimer = setTimeout(() => {
            const tl = gsap.timeline({
                defaults: { duration: 1.5, ease: "power3.inOut" }
            });

            tl.to(loaderRef.current, {
                opacity: 0,
                onComplete: () => {
                    if (loaderRef.current) {
                    loaderRef.current.style.display = "none";
                    }
                }
            }, 0)

            .fromTo(
                imgRefs.current,
                {
                    clipPath: "inset(100% 0 0 0)",
                    opacity: 0,
                    scale: 1.05,
                    visibility: "hidden",
                },
                {
                    clipPath: "inset(0% 0 0 0)",
                    opacity: 1,
                    scale: 1,
                    visibility: "visible",
                },
                0
            );
        }, 3000);

      return () => clearTimeout(delayTimer);
    }
  }, [loader]);
    return(
        <div className={style.profile_container}>
            <div className={style.profile_wrapper} ref={wrapperRef}>
                <Loader loaderRef={loaderRef}/>
                <img src={profilePic} alt="Profile" ref={imgRefs} onLoad={() => setLoader(true)} style={{ opacity: 0, visibility: "hidden" }} />
            </div>
        </div>
    )
}