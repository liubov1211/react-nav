import React from "react";
import post1 from "..//images/post1.jpg";
import post2 from "..//images/post2.jpg";
import post3 from "..//images/post3.jpg";
import avka1 from "..//images/avka1.jpg";
import avka2 from "..//images/avka2.jpg";
import avka3 from "..//images/avka3.jpg";
import facebook from "..//images/facebook.png"
const autor = [
    {
        name: "Anakin Skywalker",
        photo: avka1,
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: facebook,
        date: "• 25 nov.",
        imageBig: post1,
    },
    {
        name: "Anatoliy Bevz",
        photo: avka3,
        nickname: "@anton",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: facebook,
        date: "• 21 nov.",
        imageBig: post2,
    },
    {
        name: "Anna Kors",
        photo: avka2,
        nickname: "@annaCors",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: facebook,
        date: "• 20 nov.",
        imageBig: post3,
    }
]
const PublicationsPage = () => {
    return (
        <div>
            {autor.map((person) => {
                return (
                    <div className="App-header">
                        <img src={person.photo} className="App-logo" alt="logo" />
                        <div className="App-block">
                            <h4> {person.name} </h4>
                            <img src={person.image} className="App-facebook" />
                            <span>{person.nickname}</span>
                            <span> {person.date}</span>
                            <p>{person.content}</p>
                            <img src={person.imageBig} className="ImageWomen" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default PublicationsPage;