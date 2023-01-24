import './css/header.css'

function Header(){
    return (
        <div>
        
          <nav class="navbar">
            <div class="left">
                <h2 class="heading">RT-Blogs</h2>
            </div>
            <div class="right">
                <a href="#" class="link">Home</a>
                <a href="Post/index.html" class="link">Post</a>
                <a href="ContactUs/index.html" class="link">Contact Us</a>
            </div>
        </nav>
        </div>
      
    )
}

export default Header;