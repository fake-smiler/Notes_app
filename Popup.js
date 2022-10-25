import React from 'react';
import {useState} from 'react';
import './Popup.css';
const Popup = (props) => {
    const [val,setVal] = useState(props.edit.text);
    const handleChange = (event) => {
        setVal(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();      // load agadhu
    props.update(val)
     }
    return (
        <div className = "outer">
             <center>
                 <div className = "popup">
                     <center>
                         <h1>Update Pannikonga...</h1>
                         <form onSubmit = {handleSubmit}>
                             <input type="text" value = {val} onChange = {handleChange}/>
                             <input type="submit"value="UPDATE"/>
                         </form>
                     </center>
                 </div>
             </center>

        </div>
    );
};
export default Popup;