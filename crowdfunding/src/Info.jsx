

export function Info({openModal}){
    return(
        <section className='section-3'>
        <h3>About this Project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br/><br/> Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        <div className='bamboo-container'>
          <div className='bamboo'>
            <h3>Bamboo Stand</h3>
            <span>Pledge $25 or more</span>
            </div>
          <div>
            <p>Bamboo Stand Pledge $25 or more You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
          </div>
          <div className='button'>
            <div>
              <h3>101</h3>
              <p>left</p>
            </div>
            <button onClick={openModal}>Select Reward</button>
          </div>
        </div>
        <div className='black-edition-container'>
        <div className='black-edition'>
        <h3>Black Edition Stand</h3>
        <span>Pledge $75 or more</span>
        </div>
      <div>
        <p> You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
      </div>
      <div className='button'>
        <div>
          <h3>64</h3>
          <p>left</p>
        </div>
        <button onClick={openModal}>Select Reward</button>
        
      </div>
        </div>
        <div className='special-container'>
        <div className='special-edition'>
        <h3>Mahogany Special Edition</h3>
        <span>Pledge $200 or more</span>
        </div>
      <div>
        <p> You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
      </div>
      <div className='button'>
        <div>
          <h3>0</h3>
          <p>left</p>
        </div>
        <button disabled >Out of stock</button>
      </div>
        </div>
        </section>
    )
}