
import { useState } from 'react'
import './app.css';
import { Info } from './Info.jsx';
import './modal.css'
import { Modal } from './modal.jsx';
import './thanksModal.css'
import { Dropdown } from './dropdown.jsx';
import { ThanksModal } from './thanksModal.jsx';

function App() {

  const [showModal,setShowModal] = useState(false);
  const[showThanksModal,setShowThanksModal] = useState(false)
 
  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () =>{
    setShowModal(false);
    
  };


  const closeModalThank = () =>{
    setShowThanksModal(false)
  }

  return (
    <div className='container'>    
      <div className='img-container'>
        <header>
          <h3>crowfund</h3>
          <div className='enlaces'>
            <a href='#'>About</a>
            <a href='#'>Discover</a>
            <a href='#'>Get Started</a>
          </div>
        </header>
      <img src='../images/image-hero-desktop.jpg' alt='Hero image'></img>
    </div>
      <section className='section-1'>
        <img src='../images/logo-mastercraft.svg' alt='Mastercraft logo'></img>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='buttons'>
          <button className='btn-project' 
          onClick={openModal}>Back this project</button>
          <button>bookmark</button>
        </div>
      </section>
      <section className='section-2'>
      <div>
        <h3> $89,914</h3>
        <p>of $100,000 backed</p>
      </div>
      <div>
        <h3>5,007</h3>
        <p>total backers</p>
      </div>
      <div>
        <h3> 56</h3>
        <p>days</p>
      </div>
     
      </section>
    <Info/>
    {showModal &&
      <Modal closeModal={closeModal}/>}
    {showModal && <Dropdown closeModal={closeModal}/>}
    {showThanksModal && <ThanksModal closeModalThank={closeModalThank} />}

    </div>
    
   
  )
}

export default App
 