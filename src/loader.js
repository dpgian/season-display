import React from 'react'

export default function loader(props) {
  return (
    <div className='ui active dimmer'>
        <div className='ui big text loader'>
            {props.message}
        </div>  
    </div>
  )
}

loader.defaultProps = {
    message: 'Loading...'
}
