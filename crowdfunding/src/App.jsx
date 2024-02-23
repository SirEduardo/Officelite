
import './App.css'

function App() {


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
      <img src='../images/image-hero-desktop.jpg'></img>
    </div>
      <section className='section-1'>
        <img src='../images/logo-mastercraft.svg'></img>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='buttons'>
          <button className='btn-project'>Back this project</button>
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
      <section className='section-3'>
        <h3>About this Project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
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
              <h3>101</h3><p>left</p>
            </div>
            <button>Select Reward</button>
          </div>
        </div>
        </section>

    </div>

   
  )
}

export default App
 