import React from "react";
import Card from "./Card";
import "./Ideas.css";
import { useContext } from "react";

import ThemeContext from "./ThemeContext";
const Ideas = () => {
  const [state, dispatch] = useContext(ThemeContext);
  //Issue: Solution is missing delete function
  const deleteIdea = (id) => {
    const action = { type: "REMOVE_IDEA", id };
    dispatch(action);
  };

  const ideaCards = state.ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    );
  });

  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
