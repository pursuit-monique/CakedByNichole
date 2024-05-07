import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function calculateRating(average, length){
    let rating = [];
    average = Math.floor(average / length);
    for (let i = 1; i <= 5; i++){
        if (average / i >= .75){
            rating.push(<FontAwesomeIcon icon="fa-solid fa-star" key={'star'+i} />)
        } else if (average / i > .5) {
            rating.push(<FontAwesomeIcon icon="fa-solid fa-star-half" key={'star'+i}  />)
        } else {
            rating.push(<FontAwesomeIcon icon="fa-regular fa-star" key={'star'+i}  />)
        }
    }
    return rating;
}

export {calculateRating};