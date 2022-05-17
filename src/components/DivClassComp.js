import React, { Component } from 'react';

export class DivClassComp extends Component {
    state={
        showDiv:false//Initial value
    }
  render() {
    return(
        <>
         <button className='but2' onClick={()=>this.setState({showDiv:!this.state.showDiv})}>To see styling in class component</button> {/*setState is a function*/}
         {this.state.showDiv && <div className='div2'><h2>This is created using Class Component</h2>
                                <p>This is done using external CSS</p>
                                <p style={{color:'blue'}}>This is done using inline CSS</p>
                               </div>
                               }
        </>
    )
  }
}

export default DivClassComp;


