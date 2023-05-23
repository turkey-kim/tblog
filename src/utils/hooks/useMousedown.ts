import { useState, useEffect } from "react";

// 타킷 액티브 관리; 클릭 시 타깃 활성화, 논타깃 클릭 시 비활성화
// 예외사항 지정 가능.

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
