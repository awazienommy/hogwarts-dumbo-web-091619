import React, { Component } from 'react'
import HogTile from './HogTile'

class HogList extends Component {
    render() {
        return (
            <div className='ui grid container'>
               {
                this.props.hogs.map(hog => {
                    // console.log(hog)

                  return <HogTile hog={hog}/>
                })
                }
            </div>
        )
    }
}

export default HogList
