import React, { useState, useEffect } from "react";
import Ideas from "./Ideas";
import Form from "./Form";
import "./App.css";
import ThemeContext from "./ThemeContext";

export default function App() {
  const [ideas, setIdeas] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.title = `Ideabox (${ideas.length})`;
  });

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter((idea) => idea.id !== id);

    setIdeas(filteredIdeas);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} deleteIdea={deleteIdea} />
      </div>
    </ThemeContext.Provider>
  );
}
