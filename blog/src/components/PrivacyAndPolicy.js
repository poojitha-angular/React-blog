import { render } from '@testing-library/react';
import React from 'react';

class PrivacyAndPolicy extends React.Component{
    constructor(){
       
    super()
    // this.a=123;
    this.state ={
        name:"Pooja"
    }
        this.changer=this.changer.bind(this)

    }
    changer(){
        console.log("changet hit");
        this.setState({
            name:"Nithin"
        })
    }
render(){
    return (
        <div>
          <h1>This is a Terms and conditions page</h1>
          <h2>{this.props.number}</h2>
          {/* <h2>{this.a}</h2> */}
          <h2>My name is: {this.state.name}</h2>
          <button  onClick={this.changer}>Change Name</button>
        </div>
    )
}
}
export default PrivacyAndPolicy;