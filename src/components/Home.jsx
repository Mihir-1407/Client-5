import React from 'react'
import '../styles/Home.css'
import SimpleImageSlider from "react-simple-image-slider";
const Home = () => {    

    const images = [
        { url: "https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" },
        { url: "https://m.media-amazon.com/images/I/71UN7ycglPL._AC_UL480_FMwebp_QL65_.jpg" },
        { url: "https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" },
        { url: "https://m.media-amazon.com/images/I/71UN7ycglPL._AC_UL480_FMwebp_QL65_.jpg" },
        { url: "https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" },
    ];

    return (
        <>
            <SimpleImageSlider
                width={999}
                height={704}
                images={images}
                showBullets={true}
                showNavs={true}
            />

            <div className="facilities">
                <h1>Facilities &amp; Amenities</h1>
                <div className='facilitiesTwoBox'>
                    <div className='facilitiesBox facilitiesBoxLeft'>
                        <SimpleImageSlider
                            width={700}
                            height={404}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className='facilitiesBox facilitiesBoxRight'>
                        <ul>
                            <li>1. Wifi</li>
                            <li>2. Gym</li>
                            <li>3. 24-Hour Light</li>
                            <li>4. Late Entry</li>
                        </ul>

                    </div>
                </div>
            </div>


            <div className="about">
                <h1>About</h1>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aperiam voluptatum consectetur laboriosam, quos rerum nihil iusto culpa, placeat impedit consequuntur, molestiae labore harum molestias? Cum blanditiis reiciendis quo autem repellat earum at doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur suscipit maxime nemo ab, iste fugit iusto minus qui magnam, fuga corporis nisi deleniti commodi accusantium illo! Assumenda maiores magni doloribus fugiat hic id deserunt aspernatur eligendi, aliquam explicabo eos voluptatum laudantium blanditiis quae deleniti quam consequuntur quibusdam optio dolorum recusandae incidunt nulla! Ducimus, sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ullam libero blanditiis dolores in. Expedita doloremque fuga libero ipsum cumque accusantium dolore tempore quisquam est earum similique quos minus nostrum eligendi recusandae maxime harum, nesciunt ullam accusamus itaque ipsa odit. Dignissimos earum harum, ipsam, perferendis blanditiis, eveniet autem soluta cum non tempore ipsum tempora rerum.</div>
            </div>


            <div className="ourHostels">
                <h1>Our Hostels</h1>
                <div id="services">
                    <div className="box">
                        <img src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                        <h2 className="h-secondary">Hostel 1</h2>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint fuga impedit maiores repellat dignissimos perspiciatis explicabo sit iste. Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis voluptates molestias! Optio corporis praesentium asperiores repellendus repudiandae facere at a nesciunt officia?</p>
                    </div>
                    <div className="box">
                        <img src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                        <h2 className="h-secondary">Hostel 2</h2>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint fuga impedit maiores repellat dignissimos perspiciatis explicabo sit iste. Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis voluptates molestias! Optio corporis praesentium asperiores repellendus repudiandae facere at a nesciunt officia?</p>
                    </div>
                    <div className="box">
                        <img src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                        <h2 className="h-secondary">Hostel 3</h2>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint fuga impedit maiores repellat dignissimos perspiciatis explicabo sit iste. Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis voluptates molestias! Optio corporis praesentium asperiores repellendus repudiandae facere at a nesciunt officia?</p>
                    </div>
                    <div className="box">
                        <img src="https://m.media-amazon.com/images/I/610xVzJWA1L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                        <h2 className="h-secondary">Hostel 4</h2>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint fuga impedit maiores repellat dignissimos perspiciatis explicabo sit iste. Doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis voluptates molestias! Optio corporis praesentium asperiores repellendus repudiandae facere at a nesciunt officia?</p>
                    </div>
                </div>
                
                <div className="container"> 
                    <div className='bookNow center'>
                        <span><a href="#contact">Book Now</a></span>
                    </div>
                </div>
            </div>


            <div className="footer">
                Copyright &copy; www.thewizards.com All Rights reserved!
            </div>


        </>
    )
}

export default Home