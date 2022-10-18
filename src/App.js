import React, { useState, useEffect } from "react";
import Ideas from "./Ideas";
import Form from "./Form";
import "./App.css";
import ThemeContext from "./ThemeContext";
import { useReducer } from "react";

const initalState = {
  theme: "light",
  ideas: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    case "ADD_IDEA":
      return { ...state, ideas: [...state.ideas, action.ideas] };
    case "REMOVE_IDEA":
      const filteredIdeas = state.ideas.filter((idea) => idea.id !== action.id);
      return { ...state, ideas: filteredIdeas };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    document.title = `Ideabox (${state.ideas.length})`;
  });

  const addIdea = (newIdea) => {
    const action = { type: "ADD_IDEA", ideas: newIdea };
    dispatch(action);
  };

  const deleteIdea = (id) => {
    const action = { type: "REMOVE_IDEA", id };
    dispatch(action);
  };

  const toggleTheme = () => {
    const action = { type: "TOGGLE_THEME" };
    dispatch(action);
  };

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      <div className="App">
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Form addIdea={addIdea} />
        <Ideas ideas={state.ideas} deleteIdea={deleteIdea} />
      </div>
    </ThemeContext.Provider>
  );
}
