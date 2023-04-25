import { useState, useCallback } from "react";
import React from "react";

interface TextValues {
  [id: string]: string;
}

function useInput(initialForm: TextValues) {
  const [text, setText] = useState(initialForm);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setText((form) => ({ ...form, [name]: value }));
    },
    [text]
  );

  return [text, onChange, setText] as const; // 이부분 이해가 안된다 물어보기.
}

export default useInput;
