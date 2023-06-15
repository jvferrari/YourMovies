import {create} from "zustand";

const useStore = create((set) => ({
  theme: localStorage.getItem("theme") || "dark",
  color: localStorage.getItem("color") || "#ffffff", // Cor da fonte
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      const newColor = newTheme === "dark" ? "#ffffff" : "#000000"; // Cor da fonte correspondente ao tema
      localStorage.setItem("theme", newTheme);
      localStorage.setItem("color", newColor); // Salva a cor da fonte no armazenamento local
      return { theme: newTheme, color: newColor };
    });
  },
}));

export { useStore };