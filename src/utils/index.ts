export const truncateString = (str: string, maxLength: number) => {
  if (str) {
    if (str.length >= maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  }
};

export const scrollToBottom = (cotainerId: string) => {
  const container = document.getElementById(cotainerId); // 컨테이너의 실제 ID로 변경

  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};
