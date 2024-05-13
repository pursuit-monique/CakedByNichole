import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return(
        <>
            <footer className="bg-rose-100 w-screen h-62 mt-6 shadow border-t border-yellow-600">
                <div className="grid grid-cols-4 h-50 text-center">
                    <section className="col-span-1">
                        <div className="w-full mt-6"> 
                            <span className="list-none font-thasadith text-yellow-700 text-sm">
                                <ul className="mb-6">
                                    <li>FAQ</li>
                                    <li>Delivery Policy</li>
                                    <li>Careers</li>
                                    <li>Charity Work</li>
                                    <li>Order Policy</li>
                                </ul>
                            </span>
                        </div>
                    </section>
                    <section className="col-span-1">
                        <div className="w-full mt-6"> 
                            <span className="list-none font-thasadith text-yellow-700 text-sm">
                                <ul className="mb-6">
                                    <li>Flavour List</li>
                                    <li>Care Instructions</li>
                                    <li>Reviews</li>
                                    <li>Press</li>
                                    <li>Wholesale</li>
                                </ul>
                            </span>
                        </div>
                    </section>
                    <section className="col-span-2">
                    <div className="w-full h-12"> 
                        <div className="grid-rows-3 w-full mt-6">
                            <div className="text-yellow-900 text-sm underline font-thasadith mb-2 font-bold"> Newsletter</div>
                            <div>
                                <form action="/action_page.php">
                                    <input className="h-8 p-2 w-3/4 border border-yellow-800 bg-rose-100 placeholder-yellow-900 font-thasadith text-xs mb-2 rounded" type="text" id="newsletter" name="email" placeholder="Enter your email"></input>
                                    <span className="relative text-yellow-900" style={{right: "20px", top: "2px"}}><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span>
                                </form>
                            </div>
                            <div className="text-yellow-900">
                                <span className="m-1"><FontAwesomeIcon icon="fa-brands fa-facebook" /></span>
                                <span className="m-1"><FontAwesomeIcon icon="fa-brands fa-square-pinterest" /></span>
                                <span className="m-1"><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></span>
                                <span className="m-1"><FontAwesomeIcon icon="fa-brands fa-square-youtube" /></span>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
                <div className="w-full bg-rose-100 text-center p-2 border-t border-yellow-600"> <span className="font-thasadith text-yellow-700">Site created by Marcia Foster and Monique Correa</span></div>
            </footer>
        </>
    )
}