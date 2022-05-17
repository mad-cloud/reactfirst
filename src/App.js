import React from 'react';
import DivComponent from './components/DivComponent';
import DivClassComp from './components/DivClassComp';
import './style1.css';
let App=()=>{
  return(
    <>
    <div className='main_div'>
      <h1 style={{display:"inline-block",backgroundColor:"aqua"}}>Styling using Functional and Class Component</h1>
      <DivComponent />
      <DivClassComp />
    </div>
    </>
  )
}
export default App;
