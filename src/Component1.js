import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Component1 = ({myAlert='My name is aly',name='Aly'}) =>{
    function HandleClick(e){
            e.preventDefault();
            alert("This is an alert");
    }
    return(
        <>
        <span>
        <Button style={{height:50,width:150}} onClick={HandleClick}>Press me!</Button>
        </span>
        <span>
         <h1 style={{marginTop:10}}>My name is {name}</h1>   
        </span>
        </>
    );
};

export default Component1;