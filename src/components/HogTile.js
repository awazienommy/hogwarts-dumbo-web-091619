import React, { Component } from 'react'

export default class HogTile extends Component {

constructor(props) {
    super(props)

    this.state = {
         clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
}
    

    handleClick(){
        // console.log('clicked')
        this.setState({
            clicked: !this.state.clicked
        })
    }
    
    
    slugItOut(name){
        return name.split(" ").join("_").toLowerCase()
    }
    render() {
        // let hogName = this.props.hog.name
        // console.log(this.props)
        return (
            <div  onClick={this.handleClick} className='ui eight wide column'>
                <h2>{this.props.hog.name}</h2>
                <img alt={this.props.hog.name} src={`./hog-imgs/${this.slugItOut(this.props.hog.name)}.jpg`}/>
                 { this.state.clicked ? 
                     <div>
                        <p>Weight: {this.props.hog.weight}</p>
                        <p>Specialty: {this.props.hog.specialty}</p>
                        <p>Grease Status: {this.props.hog.greased ? 'Greased' : 'Not Greased'}</p>
                     </div>
                     : 
                     null
                 }
            </div>
        )
    }
}

