import './thanksModal.css'

export function ThanksModal(closeModal){
    return(
        <div className='thanks-container'>
            <div className='thanks-modal'>
                <img src="../images/icon-check.svg"/>
                <div>
                    <span>Thanks for your support!</span>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaing is completed</p>
                    <button onClick={closeModal}>Got it!</button>
                </div>
            </div>
     
        </div>
    )
}