import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateCursor = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      requestAnimationFrame(animateCursor);
    };

    const addHover = () => cursor.classList.add('cursor-hover');
    const removeHover = () => cursor.classList.remove('cursor-hover');

    window.addEventListener('mousemove', moveCursor);
    animateCursor();

    const interactables = document.querySelectorAll('a, button, [data-cursor]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    // Hide default cursor on desktop
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = '';
    };
  }, []);

  // Don't show on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
