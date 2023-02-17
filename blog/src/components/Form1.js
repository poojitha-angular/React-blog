import React from "react";
class Form1 extends React.Component{
    constructor(){
        super()
        this.state={
            fname:' ',
            lname:' '
        }
    } 
    
    handleInputChange =(event)=>{
        this.setState({
            fname:event.target.value,
            
                });
        console.log(this.state.fname)
        
        
    }
    handleInputChanger =(event)=>{
        this.setState({
            lname:event.target.value,
            
                });
       
        console.log(this.state.lname)
        
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        // console.log('First Name is '+this.state.fname)
        // console.log('last Name is '+this.state.lname)
        const obj={
            "First Name":this.state.fname,
            "Last Name":this.state.lname

        };
        console.log(obj)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input type="text" value={this.state.fname} placeholder="Enter FirstName" onChange={this.handleInputChange} />
                    <label>Last Name</label>
                    <input type="text" value={this.state.lname} placeholder="Enter LastName" onChange={this.handleInputChanger} />
                    <input type="submit"/>
                </form>                
            </div>
        )
    }
}
export default Form1;