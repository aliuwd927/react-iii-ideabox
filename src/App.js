import React, { useState, useEffect } from "react";
import Ideas from "./Ideas";
import Form from "./Form";
import "./App.css";
import ThemeContext from "./ThemeContext";
import { useReducer } from "react";

const initalState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};

export default function App() {
  const [ideas, setIdeas] = useState([]);
  const [state, dispatch] = useReducer(reducer, initalState);

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
    const action = { type: "TOGGLE_THEME" };
    dispatch(action);
  };

  return (
    <ThemeContext.Provider value={state.theme}>
      <div className="App">
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Form addIdea={addIdea} />
        <Ideas ideas={ideas} deleteIdea={deleteIdea} />
      </div>
    </ThemeContext.Provider>
  );
}
