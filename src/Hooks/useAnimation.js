import { gsap } from "gsap";
import {useRef, useEffect} from 'react';

function useAnimation() {
    const animationRef = useRef();
      // wait until DOM has been rendered
      
    useEffect(() => {
        gsap.to(animationRef.current, {rotation: "360", duration: .5});
    });


    return animationRef;
}

export default useAnimation
