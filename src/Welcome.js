/*import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props){
    super(props);
  }
    render(){
        return <h1>hola {this.props.name}</h1>
    }
}
export default Welcome; // Don’t forget to use export default!
*/

import React from 'react';
const Welcome = (props)=>{
  return(<h1>hola {props.name}</h1>);
}

export default Welcome;