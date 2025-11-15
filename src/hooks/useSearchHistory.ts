import { useEffect, useState } from "react";

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const addToHistory = (city: string) => {
    const newHistory = [city, ...history.filter((h) => h !== city)].slice(0, 5); // máximo 5
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return { history, addToHistory };
}
