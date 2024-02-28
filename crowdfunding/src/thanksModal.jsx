/*eslint-disable react/prop-types*/
import './thanksModal.css'

export function ThanksModal({closeModalThank}){
    
    return(
        <div className='thanks-container'>
            <div className='thanks-modal'>
                <img src="../images/icon-check.svg" alt='Icon check'/>
                <div>
                    <span>Thanks for your support!</span>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaing is completed</p>
                    <button onClick={closeModalThank}>Got it!</button>
                </div>
            </div>
     
        </div>
    )
}