import { useEffect } from "react";

const useSwipe = (onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight) => {
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e?.changedTouches[0]?.screenX;
      touchStartY = e?.changedTouches[0]?.screenY;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e?.changedTouches[0]?.screenX;
      touchEndY = e?.changedTouches[0]?.screenY;
      handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 50) {
          onSwipeRight();
        } else if (deltaX < -50) {
          onSwipeLeft();
        }
      } else {
        if (deltaY > 50) {
          onSwipeDown();
        } else if (deltaY < -50) {
          onSwipeUp();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight]);
};

export default useSwipe;
