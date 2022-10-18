import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [state, setState] = useState({
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
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...state,
    };
    console.log(state);
    props.addIdea(newIdea);
    clearInputs();
  };

  const clearInputs = () => {
    setState({ title: "", description: "" });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={state.title}
        onChange={(event) => handleChange(event)}
      />

      <input
        type="text"
        placeholder="Description"
        name="description"
        value={state.description}
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
