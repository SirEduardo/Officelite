import { useState } from "react"
import { ThanksModal } from "./thanksModal"


export function Dropdown(closeModal){
    const [active,setActive] = useState(false)
    

    const handleBotton = () =>{
        setActive(!active)
        closeModal(true)
    }

    return(
        <div className='dropdown'>
        <h5>Enter your pledge</h5>
        <input type='number' placeholder='$ 0'></input>
        <button onClick={handleBotton}>Continue</button>
        {active &&(
            <ThanksModal closeModal ={closeModal}/>
            )}
        </div>
    
    )
}