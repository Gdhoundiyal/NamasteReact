import { useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(true);

  window.addEventListener("online", () => {
    setStatus(true);
  });

  window.addEventListener("offline", () => {
    setStatus(false);
  });

  return status;
};

export default useStatus;
