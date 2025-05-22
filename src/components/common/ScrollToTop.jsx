import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
<<<<<<< HEAD
      behavior: "smooth", 
=======
      behavior: "smooth", // ya "auto" for instant scroll
>>>>>>> f288242 (Added)
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
