import { useState, useEffect } from "react";

function useMousedown(
  target: React.RefObject<HTMLDivElement>,
  exept?: React.RefObject<HTMLDivElement>
) {
  const [targetOn, setTargetOn] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", clicked);
    return () => {
      document.removeEventListener("mousedown", clicked);
    };
  });

  const clicked = (e: any) => {
    if (exept?.current?.contains(e.target)) {
      return;
    } else if (!target.current?.contains(e.target)) {
      setTargetOn(false);
    } else if (target.current?.contains(e.target)) {
      setTargetOn(true);
    }
  };

  const onClick = () => {
    setTargetOn(!targetOn);
  };

  return [targetOn, onClick, clicked];
}

export default useMousedown;
