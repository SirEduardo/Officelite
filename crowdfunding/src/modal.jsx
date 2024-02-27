
import { useState } from 'react'
import './modal.css'
import { Dropdown } from './dropdown';
import './thanksModal.css'


export function Modal({closeModal}){

    const [selectedOption, setSelectedOption] = useState(false);

    const handleChange = (event) => {
      setSelectedOption(event.target.value); 
    };

    const [isOpen,setIsOpen] = useState(false);

    const toggleDropdown = () =>{
        setSelectedOption(!selectedOption)
        setIsOpen(!isOpen)
    }

    return(
        <div className="modal-container">
        <div className='modal'>
        <header className='modal-header'>
            <nav>
                <h2>Back this project</h2>
                <button className='close-modal' onClick={closeModal}>X</button>
            </nav>
            <div className='text'>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </div>
        </header>
        <div className="no-reward">
            <div className='input'>
                <label><input type="radio" value='noReward' checked = {selectedOption === 'noReward'} onChange={handleChange}  />Pledge with no reward</label>
                </div>   
            <div className="text">
            
                <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p> 
            </div>
        </div>
        <div className="modal-standard">
            <div className='input'>
                <label><input type="radio" value='standard' checked = {selectedOption === 'standard'} onChange={handleChange} onClick={toggleDropdown} />Bamboo Stand</label>
                <h4>Pledge $25 or more</h4>
                <p>101 <span className="grey">left</span></p>
            </div>
            <div className="text">
                <p>You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                {isOpen &&( 
                <Dropdown closeModal = {closeModal}/>
                )}
            </div>
        </div>
        <div className="modal-black-edition">
        <div className='input'>
            <label><input type="radio" value='blackEdition' checked = {selectedOption === 'blackEdition'} onChange={handleChange} onClick={toggleDropdown} />Black Edition Stand</label>
            <h4>Pledge $75 or more</h4>
            <p>64 <span className="grey">left</span></p>
            </div>
            <div className="text">
                <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                {isOpen &&(
                    <Dropdown closeModal = {closeModal}/>
                    )}
                </div>
        </div>
        <div className="modal-special-edition">
            <div className='input'>
                <label><input type="radio" value='specialEdition' checked = {selectedOption === 'specialEdition'} onChange={handleChange} />Mahogany Special Edition</label>
                <h4>Pledge $200 or more</h4>
                <p>0 <span className="grey">left</span></p>
            </div>
            <div className="text">
                <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
            
            </div>
        </div>
        </div>
    </div>
    )
}
