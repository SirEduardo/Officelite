import { useState } from "react"
import { ThanksModal } from "../thanksModal"


export function DropdownBlackEdition(closeModal){
    const [active,setActive] = useState(false)
    

    const handleBotton = () =>{
        setActive(true)
        closeModal()
    }
    const closeModalThank = () =>{
        setActive(false)
    }

    return(
        <div className='dropdown'>
            <h5>Enter your pledge</h5>
            <input type='number' min={75} max={200} placeholder='$ 0'></input>
            <button onClick={handleBotton}>Continue</button>
            {active &&
                <ThanksModal closeModalThank ={closeModalThank}/>
            }
        </div>
    
    )
}