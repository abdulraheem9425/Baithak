import { useEffect } from "react";

const BlockCopyOnly = () => {
  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
    };

    const disableTextSelection = (e) => {
      e.preventDefault();
    };

    document.addEventListener("copy", handleCopy);
    document.addEventListener("selectstart", disableTextSelection);

    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("selectstart", disableTextSelection);
    };
  }, []);

  return null;
};

export default BlockCopyOnly;
