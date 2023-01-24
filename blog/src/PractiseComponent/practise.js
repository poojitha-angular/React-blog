import './css/practise.css'
function Header(props){
    const item=props.ite;
    if(item == "Veg"){
        return(
            <div>
                <h1 class="veg-heading">Vegetarian</h1>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1 class="nonveg-heading">Nonvegetarian</h1>
            </div>
        )
    }

}
export default Header;