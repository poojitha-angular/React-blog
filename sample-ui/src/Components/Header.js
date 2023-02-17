import './css/header.css'
function Header(){
    return(
        <div class='header-right'>
            <div class="right-nav">
                
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <div className='left-nav'>
               
                <a href="/challenges">Challenges</a>
                <a href="/banner">Scoreboard</a>
                <a href="/user">Users</a>
                <a href="/"><strong>Poojitha Shaganti</strong></a>

            </div>
         
           
        </div>

    )
}
export default Header;