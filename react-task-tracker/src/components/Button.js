import { useState } from "react";
import PropTypes from 'prop-types';

const Button = ({color, text})=>{
    // const [result, setResult] = useState(0)
    // const onClick = ()=> {
    //     setResult(result+1)
    // }
    const onClick = ()=>{
        console.log('click')
    }
    return(<>
        
        <button style={{backgroundColor:color}}
        className='btn'
        onClick={onClick}
        >{text}</button>
        </>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button