import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/restaurants")
            .then((response) => response.json())
            .then((data) => setRestaurants(data));

    })
    return (
        <div>
            <h1>Restaurants</h1>
            <section className="container mb-4">
                <div className="row row-cols-1  row-cols-lg-3 row-cols-xl-4 g-4">
                    {restaurants.map((restaurant) => (
                        <div className="col" key={restaurant.id} >
                            <Link to={'/restaurants/${restaurant.id'} >

                                <div className="card h-100">
                                    <img
                                        src={restaurant.imageUrl}
                                        className="card-img-top"
                                        alt="Kártya kép 1"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">{restaurant.name}</h5>
                                        <p className="card-text">
                                           {restaurant.description1}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                    )}

                </div>
            </section>
        </div>

    )
}