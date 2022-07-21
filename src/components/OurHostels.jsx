import React from "react";
import "../styles/OurHostels.css";
import ReactStars from "react-rating-stars-component";

const OurHostels = () => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 2.5,
        isHalf: true
    };

    return (
        <div>
            <div className="container" id="container">
                <div className="productCard">
                    <img
                        src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg"
                        alt="Hostel Name"
                    />
                    <div className="hostelNameRating">
                        <p>Hostel Name</p>
                        <div>
                            <ReactStars {...options} />
                        </div>
                    </div>
                    <span>Price Range:- 12000-17000</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsa illo commodi minima magnam, aperiam cum
                        officia, blanditiis et harum recusandae nobis
                        consequatur. Soluta perspiciatis magni adipisci
                        expedita, cum ut sint voluptas quasi culpa nobis!
                    </p>
                    <div className="bookNow center button">
                        <span>
                            <a href="#contact">Book Now</a>
                        </span>
                    </div>
                </div>
                <div className="productCard">
                    <img
                        src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg"
                        alt="Hostel Name"
                    />
                    <div className="hostelNameRating">
                        <p>Hostel Name</p>
                        <div>
                            <ReactStars {...options} />
                        </div>
                    </div>
                    <span>Price Range:- 12000-17000</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsa illo commodi minima magnam, aperiam cum
                        officia, blanditiis et harum recusandae nobis
                        consequatur. Soluta perspiciatis magni adipisci
                        expedita, cum ut sint voluptas quasi culpa nobis!
                    </p>
                    <div className="bookNow center button">
                        <span>
                            <a href="#contact">Book Now</a>
                        </span>
                    </div>
                </div>
                <div className="productCard">
                    <img
                        src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg"
                        alt="Hostel Name"
                    />
                    <div className="hostelNameRating">
                        <p>Hostel Name</p>
                        <div>
                            <ReactStars {...options} />
                        </div>
                    </div>
                    <span>Price Range:- 12000-17000</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsa illo commodi minima magnam, aperiam cum
                        officia, blanditiis et harum recusandae nobis
                        consequatur. Soluta perspiciatis magni adipisci
                        expedita, cum ut sint voluptas quasi culpa nobis!
                    </p>
                    <div className="bookNow center button">
                        <span>
                            <a href="#contact">Book Now</a>
                        </span>
                    </div>
                </div>
                <div className="productCard">
                    <img
                        src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg"
                        alt="Hostel Name"
                    />
                    <div className="hostelNameRating">
                        <p>Hostel Name</p>
                        <div>
                            <ReactStars {...options} />
                        </div>
                    </div>
                    <span>Price Range:- 12000-17000</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsa illo commodi minima magnam, aperiam cum
                        officia, blanditiis et harum recusandae nobis
                        consequatur. Soluta perspiciatis magni adipisci
                        expedita, cum ut sint voluptas quasi culpa nobis!
                    </p>
                    <div className="bookNow center button">
                        <span>
                            <a href="#contact">Book Now</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHostels;
