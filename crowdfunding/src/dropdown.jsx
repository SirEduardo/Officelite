import { useState } from "react"
import { ThanksModal } from "./thanksModal"


export function Dropdown({closeModal}){
    const [active,setActive] = useState(false)
    

    const handleButton = () =>{
    
        setActive(true); 
    }
    const closeModalThank = () =>{
        setActive(false);
      
    }

    return(
        <div className='dropdown'>
            <h5>Enter your pledge</h5>
            <input type='number' required placeholder='$ 0'></input>
            <button onClick={handleButton}>Continue</button>
            {active &&
                <ThanksModal closeModalThank ={closeModalThank}/>
            }
        </div>
    
    )
}