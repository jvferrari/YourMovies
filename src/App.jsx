import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useStore } from "./components/themeStore";

function App() {
    const { theme } = useStore();
  
    React.useEffect(() => {
      document.body.className = `theme-${theme}`;
    }, [theme]);
    
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
