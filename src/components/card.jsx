
import { Link } from 'react-router-dom';

import { calculateRating } from '../helpers/functions';

export default function Card({cakeData}) {
    const {id, image, name, reviews, price} = cakeData;
    const reviewsCount = reviews.length;
    const total = reviews.reduce((a, b) => a + b.rating, 0);


    return( 
        <>
            <div className="h-96 w-72 m-8 inline-block" key={id+1}>
                <Link to={`./${id}`} state={cakeData } >
                    <div className="bg-red-500 min-h-80 bg-cover bg-center" style={{backgroundImage: `url(${image}`}}>
                
                    </div>
                </Link>
            <div>
                <div>
                    <span className="text-sm italic text-yellow-600 font-thasadith font-black">{name}</span>
                </div>
                <div>
                    <span className="text-pink-500"> {calculateRating(total, reviewsCount)} </span><span className="text-sm font-thasadith text-yellow-900 ms-1">{reviewsCount} reviews</span>
                </div>
                <div>
                    <span className="text-xs text-yellow-700 font-thasadith">${price.toFixed(2)}</span>
                </div>
            </div>
        </div>
        </>
    )
}