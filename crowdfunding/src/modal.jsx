import './modal.css'


function Modal(){
    return(
        <div className="container">
            <header>
                <h2>Back this project</h2>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </header>
            <div className="no-reward">
                <input type="checkbox"><label>Pledge with no reward</label></input>
                <div className="text">
                    <p>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p> 
                </div>
            </div>
            <div className="standard">
                <input type="checkbox"><label>Bamboo Stand</label></input>
                <h3>Pledge $25 or more</h3>
                <p>101 <span className="grey">left</span></p>
                <div className="text">
                    <p>You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                </div>
            </div>
            <div className="black-edition">
                <input type="checkbox"><label>black Edition Stand</label></input>
                <h3>Pledge $75 or more</h3>
                <p>64<span className="grey">left</span></p>
                <div className="text">
                    <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to out Backer member list. Shipping is included.</p>
                </div>
            </div>
            <div className="special-edition">
                <input type="checkbox"><label>Mahogany Special Edition</label></input>
                <h3>Pledge $200 or more</h3>
                <p>0<span className="grey">left</span></p>
                <div className="text">
                    <p>You get two Special Edition Mahogany stands, a Backer T-Shit, and a personal thank you. you’ll be added to our Backer member list. Shippingis included.</p>
                </div>
            </div>

        </div>
    )
} 

export default Modal