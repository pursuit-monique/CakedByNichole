import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CardSkeleton() {
    return( 
        <>
        <div className="h-96 w-72 m-8 inline-block select-none">
            <div className="bg-gray-400 min-h-80 bg-cover bg-center animate-pulse">
               
            </div>
            <div>
                <div>
                    <span className="text-sm italic text-gray-400 bg-gray-400 animate-pulse">Birthday Oreo Cake</span>
                </div>
                <div>
                    <span className="text-sm italic text-gray-400 bg-gray-400 animate-pulse"><span className="text-gray-400"> <FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /> </span>12 reviews</span>
                </div>
                <div>
                    <span className="text-sm italic text-gray-400 bg-gray-400 animate-pulse">$60.00</span>
                </div>
            </div>
        </div>
        </>
    )
}