import React from 'react'
import  {Link} from 'gatsby'
import Foo from './Foo'
import styled from 'styled-components'


const Menu = styled.div`
    max-width:100%;
    display:flex;
    flex-direction:row;
    margin:50px auto;
    align-content:space-evenly;
    justify-content:space-evenly;
` 
 
function Gbm() {
    return(
    <Menu>
        <Link to="/" className="a-button">Go back to the homepage</Link>
        <Foo></Foo>
    </Menu>
    )
}

export default Gbm;