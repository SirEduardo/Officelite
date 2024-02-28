/*eslint-disable react/prop-types*/
import { useState } from "react"
import { ThanksModal } from "./thanksModal"


export function Dropdown({minValue}){
    const [active,setActive] = useState(false);
    const [pledgeValue,setPledgeValue] = useState("");
    const [error,setError] = useState("");

    const handleButton = () =>{
        const parsedValue = parseFloat(pledgeValue)
        if(!isNaN(parsedValue) && parsedValue >= minValue) {
        setActive(true);
        setError("");
        }else{
            setError("Please enter a valid number for your pledge.")
        } 
    }
    
    const closeModalThank = () =>{
        setActive(false);
        setPledgeValue("");
        setError(""); 
    };
    const handleInputChange = (event) =>{
        setPledgeValue(event.target.value);
    }

    return(
        <div className='dropdown'>
            <h5>Enter your pledge</h5>
            <input 
            type='number'  
            placeholder={`$ ${minValue}`}
            min={minValue} 
            value={pledgeValue} 
            onChange={handleInputChange} 
            required
            ></input>
            <button onClick={handleButton}>Continue</button>
            {error && <p className="error">{error}</p>}
            {active && <ThanksModal closeModalThank ={closeModalThank}/>
            }
        </div>
    
    )
}