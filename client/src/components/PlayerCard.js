import React from 'react';

const PlayerCard = props => {
    return (
        <div className="card">
            {props.players.map(players => (

                <div key={players.id} className="player">

                    <h3>{players.name}</h3>
                    <p>{props.players.country}</p>
                    <p>{props.players.searches}</p>
                </div>
            ))}
        </div>
    );
}
export default PlayerCard;