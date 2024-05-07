
import Card from "../components/card"
import CardSkeleton from "../components/cardSkeleton"

export default function Index(){

    const dummy_data = [{id: 1, image:"https://sugarandsparrow.s3.us-west-2.amazonaws.com/flour/wp-content/uploads/2020/04/15223115/Vegan-Chocolate-Oreo-Cake-Recipe-2-746x1024.jpg", name: "Oreo Birthday Cake", reviews: [{user: 'Jane Doe', rating: 1}, {user: 'John Doe', rating: 1}, {user: 'Garfield', rating: 1}, {user: 'Kashmir Swift', rating: 4}  ], price: 60}, {id: 2, image: "https://www.piesandtacos.com/wp-content/uploads/2019/08/key-lime-pie-cake-50.jpg", name: "Key Lime Pie", reviews: [{user: 'Jane Doe', rating: 5}, {user: 'John Doe', rating: 5}, {user: 'Garfield', rating: 5}, {user: 'Kashmir Swift', rating: 4}], price: 120}, {id: 3, image: "https://i.pinimg.com/564x/dd/c5/75/ddc57569445a85a8ee020610cbff3c2f.jpg", name: "Chocolate Cake", reviews: [{user: 'Jane Doe', rating: 1}, {user: 'John Doe', rating: 5}, {user: 'Garfield', rating: 5}, {user: 'Kashmir Swift', rating: 4}, {user: 'Dylan Swift', rating: 1}, {user: 'Edwin Swift', rating: 4}   ], price: 30}]
    return(
        <>
            {dummy_data.map(entry => <Card cakeData={entry} />)}
        </>
    )
}