import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = (scroll / height) * 100;
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      ref={barRef}
      style={{ width: '0%' }}
      role="progressbar"
      aria-label="Page scroll progress"
    />
  );
}
