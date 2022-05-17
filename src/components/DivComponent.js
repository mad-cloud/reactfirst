import React, {useState} from 'react';

let DivComponent=()=>{
    const [show, setShow]=useState(false);
    return(
        <>
        <div>
            <button className='but1' onClick={()=>setShow(!show)}>To see styling in functional component</button>
            
        </div>
        {show && <div className='div'><h2>This is created using functional Component</h2>
                      <p>This is done using external CSS</p>
                      <p style={{color:'blue'}}>This is done using inline CSS</p>
                 </div>
        }
        </>
    )
}
export default DivComponent;