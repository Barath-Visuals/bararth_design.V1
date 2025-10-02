import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "../styles/styles.module.scss";
import Loader from "./Loader";


export default function Imagecarousel ({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [allLoaded, setAllLoaded] = useState(false);
    const loadedCount = useRef(0);
    const trackRef = useRef(null);
    const intervalRef = useRef(null);
    const loaderRef = useRef(null);

    useEffect(() => {
        if(trackRef.current && allLoaded) {
            gsap.to(trackRef.current,{
                x : -(activeIndex * 100) + "%",
                duration : 0.8,
                ease : "power3.inOut",
            })
        }
    }, [activeIndex, allLoaded]);

    useEffect(() => {
        if (allLoaded) {
            startAutoSlide()
            return () => stopAutoSlide()
        }
    }, [activeIndex, allLoaded])

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 3000);
    }

    const stopAutoSlide = () => {
        if(intervalRef.current) clearInterval(intervalRef.current);
    }

    useEffect(() => {
        if(allLoaded) {
            const delayed = setTimeout(() => {

                const tl = gsap.timeline({defaults: { duration: 1.5, ease: "power3.inOut" }});
    
                tl.to(loaderRef.current, {
                    opacity : 0,
                    onComplete : () => {
                        if(loaderRef.current) loaderRef.current.style.display = "none"
                    }
    
                }, 0)
    
                .fromTo(trackRef.current, {
                    opacity : 0,
                    scale : 1.05,
                    visibility : "hidden",
                },
                {
                    opacity : 1,
                    scale : 1,
                    visibility : "visible",   
                },0)
            }, 3000);

            return () => clearTimeout(delayed)
        }
    }, [allLoaded])

    const handleImageLoad = () => {
        loadedCount.current += 1;
        if(loadedCount.current === images.length){
            setAllLoaded(true)
        }
    }

    return (
        <div className={styles.carouselWrapper} onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
            <div className={styles.imageArea}>
                <Loader loaderRef={loaderRef}/>
                <div className={styles.track} ref={trackRef} style={{ opacity: 0, visibility: "hidden" }}>
                    {images.map((src, i) => (
                        <div key={i} className={styles.slide}>
                            <img src={src} alt={`slide-${i}`} onLoad={handleImageLoad}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.pagination}>
                    {images.map((_, i) => (
                        <span
                        key={i}
                        className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
                <span className={styles.label}>Images</span>
            </div>
        </div>
    )
}