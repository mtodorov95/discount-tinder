import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css'


function TinderCards(props){

    const [people, setPeople] = useState([
        {
            name: "steve jobs",
            url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
        },
        {
            name: "mark",
            url: "https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2"
        }
    ]);


    return (
        <div>
            <div className="card__container">
            {people.map((person) => (
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
            >
                <div
                style={{backgroundImage: `url(${person.url})`}} 
                className="card">
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>))}
            </div>
            
        </div>
    );
}

export default TinderCards;