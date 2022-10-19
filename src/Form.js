import React, { useState, useContext } from "react";
import "./Form.css";
import ThemeContext from "./ThemeContext";

export default function Form() {
  const [state, dispatch] = useContext(ThemeContext);
  //console.log(state);
  const [localTitle, setLocalTitle] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    //What I've learned converting from class to functional component:

    //To set multiple properties inside state Object
    //we use ...state
    //we then use [event.target.name] => ['title','discription']
    //this is how we update multiple value
    //Idea: Ping TuringSchool Examples for React III Ideabox to update Form.js
    setLocalTitle({
      ...localTitle,
      [event.target.name]: value,
    });
  };

  const submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...localTitle,
    };
    console.log(localTitle);
    //props.addIdea(newIdea);
    const action = { type: "ADD_IDEA", ideas: newIdea };
    //console.log(dispatch(action));
    dispatch(action);
    clearInputs();
  };

  const clearInputs = () => {
    setLocalTitle({ title: "", description: "" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={localTitle.title}
        onChange={(event) => handleChange(event)}
      />

      <input
        type="text"
        placeholder="Description"
        name="description"
        value={localTitle.description}
        onChange={(event) => handleChange(event)}
      />

      <button onClick={(event) => submitIdea(event)}>SUBMIT</button>
    </form>
  );
}

// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: '',
//       description: ''
//     }
//   }

// handleChange = event => {
//   this.setState({[event.target.name]: event.target.value})
// }

// submitIdea = event => {
//   event.preventDefault();
//   const newIdea = {
//     id: Date.now(),
//     ...this.state
//   }
//   this.props.addIdea(newIdea);
//   this.clearInputs();
// }

// clearInputs = () => {
//   this.setState({ title: '', description: '' });
// }

//   render() {
//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='Title'
//           name='title'
//           value={this.state.title}
//           onChange={event => this.handleChange(event)}
//         />

//         <input
//           type='text'
//           placeholder='Description'
//           name='description'
//           value={this.state.description}
//           onChange={event => this.handleChange(event)}
//         />

//         <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
//       </form>
//     )
//   }
// }

// export default Form;
