import { useEffect, useState } from "react";

export default function useDebounce(value, delay, action) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(action(value));
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  });

  return debouncedValue;
}
