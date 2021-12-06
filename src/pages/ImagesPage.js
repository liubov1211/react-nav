import React from "react";
import k1 from "..//images/k1.jpg";
import k2 from "..//images/k2.jpg";
import k3 from "..//images/k3.jpg";
import k4 from "..//images/k4.jpg";
import k5 from "..//images/k5.jpg";
import k6 from "..//images/k6.jpg";
import k7 from "..//images/k7.jpg";
import k8 from "..//images/k8.jpg";

const ImagesPage = () => {
    return (
        <div className="imgBlock">
            <img src={k2}></img>
            <img src={k3}></img>
            <img src={k4}></img>
            <img src={k5}></img>
            <img src={k6}></img>
            <img src={k8}></img>
            <img src={k7}></img>
            <img src={k1}></img>
        </div>
    )
}

export default ImagesPage;