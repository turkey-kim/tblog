import { useState, useCallback } from "react";
import React from "react";

interface TextValues {
  [id: string]: string;
}

function useInput(initialText: TextValues) {
  const [text, setText] = useState(initialText);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setText((text) => ({ ...text, [name]: value })); // []의 의미는 name이 동적으로 할당되기 때문.
    },
    [text]
  );

  return [text, onChange, setText] as const; // 이부분 이해가 안된다 물어보기.
}

export default useInput;
