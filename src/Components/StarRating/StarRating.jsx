import React, {useState} from "react";

export default function StarRating({maxRating, className, onSetRating}) {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    return (
        <div className={`star-rating ${className}`}>
            <div className="star-rating__stars">
                {Array.from({length: maxRating}, (_, i) => (
                    <Star
                        key={i + 1}
                        full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                        onRate={() => {
                            setRating(i + 1);
                            onSetRating(i + 1);
                        }}
                        onHoverIn={() => setTempRating(i + 1)}
                        onHoverOut={() => setTempRating(0)}
                    />
                ))}
                <p className="star-rating__count">{tempRating || rating || 0}</p>
            </div>
        </div>
    )
}

function Star({onRate, onHoverIn, onHoverOut, full}) {

    return (
        <img
            src={full ? './full-star.svg' : './star.svg'}
            alt='star'
            className="star star-rating__star"
            onClick={onRate}
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
        />
    )
}
