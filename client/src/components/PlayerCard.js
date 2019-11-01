import React from 'react';

const PlayerCard = props => {
    return (
        <div className="card">
            {props.players.map(players => (

                <div key={players.id} className="player">

                    <h3>{players.name}</h3>
                    <p>{players.country}</p>
                    <p>{players.searches}</p>
                </div>
            ))}
        </div>
    );
}
export default PlayerCard;