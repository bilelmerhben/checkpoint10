import React from "react";
import { Link } from "react-router-dom";
import Img from './img';
import Button from './button';
const Page1 = () => {
  return (<div>

    <h1 class="text-center">Informatique</h1>
    <Img  src='/page1.jpg'></Img>
    <Img src='/page1-2.jpg'></Img>
    <Img src='/page1-3.jpg'></Img>
    <Link to="/"><Button /></Link>
  </div>)
}
export default Page1; 