import { useMutation } from '@apollo/client';
import { createRef } from 'react';
import {createMessageMutation} from "./gqlSchema/index";
import './App.css';

function App() {
  const messageValue = createRef()
  const [addMessage] = useMutation(createMessageMutation)
  const submit = ( ) => {
    let message = messageValue.current.value;
    addMessage({variables:{data:{message}}})
    .then(data=>{
      console.log('response', data)
    }).catch(error=>{
      console.log("error", error)
    })
  }
  return (
    <div className="App">
      <input ref={messageValue} placeholder="message"/>
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default App;
