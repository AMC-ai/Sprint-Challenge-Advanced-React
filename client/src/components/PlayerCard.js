import React from 'react';

const PlayerCard = props => {
    return (
        <div className="card">
            <div className="card-info">
                <h3 className="name">{props.player.name}</h3>
                <p>{props.player.country}</p>
                <p>{props.player.searches}</p>
            </div>
        </div>
    );
}
export default PlayerCard;