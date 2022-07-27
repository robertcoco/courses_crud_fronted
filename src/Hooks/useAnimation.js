import { gsap } from "gsap";
import {useRef, useEffect} from 'react';

function useAnimation() {
    const animationRef = useRef();
      // wait until DOM has been rendered
      
    useEffect(() => {
        gsap.to(animationRef.current, {rotation: "360", duration: .5});
        gsap.to(".card", {rotation: 360, duration: .5});
        gsap.to(".image", {rotation: 360, duration: 1});
        gsap.fromTo(".form", {opacity: 0, duration: 3}, {opacity: 1, duration: 4, delay: 1});
    });


    return animationRef;
}

export default useAnimation
