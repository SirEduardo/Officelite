import { useState } from "react"
import { ThanksModal } from "./thanksModal"


export function Dropdown(){
    const [active,setActive] = useState(false)
    

    const handleBotton = () =>{
        setActive(true)
    }
    const closeModalThank = () =>{
        setActive(false)
    }

    return(
        <div className='dropdown'>
            <h5>Enter your pledge</h5>
            <input type='number' placeholder='$ 0'></input>
            <button onClick={handleBotton}>Continue</button>
            {active &&
                <ThanksModal closeModalThank ={closeModalThank}/>
            }
        </div>
    
    )
}