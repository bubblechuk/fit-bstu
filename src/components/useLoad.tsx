import {useState, useRef, useEffect} from 'react'
export const useLoad = (src: string) => {
    const [isVisible, setVisible] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([elem]) => {
            if (elem.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.1})
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }
        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        }
    }, [])
    return {imageRef, isVisible, src: isVisible ? src : ''}
}