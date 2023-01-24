
import './css/contactus.css'
function Contactus(){
    return (
        <div>
         <form class="contact-form">
            <div class="top">
                <input type="text" placeholder="Enter name" class="type1"/>
                <input type="email" placeholder="Enter email" class="type1"/>
            </div>
            <div class="middle">
                <input type="text" placeholder="enter details" class="type2"></input>
            </div>
            <div class="bottom">
                <button type="submit" class="submit-btn">Send</button>
            </div>
        </form>
    </div>
    
    )
}
export default Contactus;