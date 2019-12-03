import React from "react";
import { Link } from "react-router-dom";
import Img from './img';
import Button from './button';
const Page3 = () => {
  return (<div>
    <h1 class="text-center">Learn React</h1>
    <Img src='/page3.jpg'></Img>
    <Img src='/page3-2.png'></Img>
    <Img src='/page3-3.jpeg' ></Img>

    <Link to="/page2">
      <Button />
    </Link>
  </div>)
}
export default Page3;