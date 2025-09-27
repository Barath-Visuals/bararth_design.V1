import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "../styles/styles.module.scss";

export default function Imagecarousel ({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        if(trackRef.current) {
            gsap.to(trackRef.current,{
                x : -(activeIndex * 100) + "%",
                duration : 0.8,
                ease : "power3.inOut",
            })
        }
    }, [activeIndex]);

    useEffect(() => {
        startAutoSlide()
        return () => stopAutoSlide()
    }, [activeIndex])

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 3000);
    }

    const stopAutoSlide = () => {
        if(intervalRef.current) clearInterval(intervalRef.current);
    }

    return (
        <div className={styles.carouselWrapper} onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
            <div className={styles.imageArea}>
                <div className={styles.track} ref={trackRef}>
                    {images.map((src, i) => (
                        <div key={i} className={styles.slide}>
                            <img src={src} alt={`slide-${i}`} />
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