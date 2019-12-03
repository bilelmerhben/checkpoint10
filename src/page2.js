import React from "react";
import { Link } from "react-router-dom";
import Img from './img';
import Button from './button';
const Page2 = () => {
  return (<div>
    <h1 class="text-center">Developpement Web</h1>
    <Img src='/page2.jpg'></Img>
    <Img src='/page2-2.jpg'></Img>
    <Img src='/page2-3.png' ></Img>

    <Link to="/page1">
      <Button />
    </Link>
  </div>)
}
export default Page2;  