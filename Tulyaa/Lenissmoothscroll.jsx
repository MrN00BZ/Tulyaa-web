import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Lenissmoothscroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.raf(time);
      }
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
  );
}

export default Lenissmoothscroll;
