import React from 'react'
 class Postform extends React.Component{
     constructor(props){
         super(props)
         this.state={
             posts:[]
         }
    
    }
    render(){
        return(
            <div>
    <h1>Post</h1>
    <h3>Add Post </h3>

            </div>
        )
    }
}


export default Postform 