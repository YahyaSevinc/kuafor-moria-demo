import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export const use3DAnimation = (delay = 0) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)' 
      : 'perspective(1000px) rotateX(15deg) rotateY(-15deg) translateZ(-100px)',
    scale: isVisible ? 1 : 0.8,
    config: config.gentle,
  });

  return { ref, springProps, isVisible };
};

export const useFloatingAnimation = (delay = 0) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translateY(0px)' 
      : 'translateY(30px)',
    config: config.wobbly,
  });

  return { ref, springProps, isVisible };
};

export const useParallaxAnimation = (intensity = 0.1) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const springProps = useSpring({
    transform: `translateY(${scrollY * intensity}px)`,
    config: config.slow,
  });

  return { ref, springProps, inView };
};

export { animated };
