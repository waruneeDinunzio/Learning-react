// import React, { Component } from "react";

// class Headers extends Component {

//     render(props){
//         return(
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//             </div>
//         )
//     }
// }

// export default Headers
import Button from "./Button";
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
        <h1>{title}</h1>
        <Button />
        {/* <button className='btn'>Add</button> */}
        </header>
    )
}
// CSS
// const headingstyle = {
//     color: 'red',
//     backgroundColor:'blue',
// }

// set default of prop 
Header.defaultProps = {
    title: "Task Trackers"
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header