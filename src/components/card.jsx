import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card() {
    return( 
        <>
        <div className="h-96 w-72 m-8 inline-block">
            <div className="bg-red-500 min-h-80 bg-cover bg-center" style={{backgroundImage: "url(https://i.pinimg.com/564x/dd/c5/75/ddc57569445a85a8ee020610cbff3c2f.jpg"}}>
               
            </div>
            <div>
                <div>
                    <span className="text-sm italic text-yellow-600">Birthday Oreo Cake</span>
                </div>
                <div>
                    <span className="text-sm text-yellow-900"><span className="text-pink-500"> <FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /> </span>12 reviews</span>
                </div>
                <div>
                    <span className="text-xs text-yellow-700">$60.00</span>
                </div>
            </div>
        </div>
        </>
    )
}