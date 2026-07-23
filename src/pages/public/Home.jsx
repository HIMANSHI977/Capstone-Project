import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    name: "Women",
    image: "/images/lady2.jpg",
  },
  {
    name: "Men",
    image: "/images/men2.jpg",
  },
  {
    name: "Bags",
    image: "/images/bags.jpg",
  },
  {
    name: "Heels",
    image: "/images/heels.jpg",
  },
  {
    name: "Accessories",
    image: "/images/jwelery.jpg",
  },
];

const collections = [
  {
    title: "Modern Essentials",
    image: "/images/collect2.jpg",
  },
  {
    title: "Minimal Luxury",
    image: "/images/collect1.jpg",
  },
  {
    title: "Classic Neutrals",
    image: "/images/collect3.jpg",
  },
];

const arrivals = [
  {
    name: "Oversized Blazer",
    image:"/images/blazer.jpg",
  },
  {
    name: "Shoulder Bag",
    image: "/images/bag.jpg",
  },
  
  {
    name: "Leather Sandals",
    image: "/images/sandals.jpg",
  },
  {
    name: "Silk Dress",
    image: "/images/dress.jpg",
  },
];


function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">



      <section className="hero">

        <div className="hero-text">

          <span>
            SPRING / SUMMER 2026
          </span>

          <h1>
            WHERE
            <br />
            ELEGANCE
            <br />
            MEETS EDGE
          </h1>


          <p>
            Timeless silhouettes.
            Modern craftsmanship.
            Designed for the now and forever.
          </p>

<button onClick={() => navigate("/products")}>
  SHOP THE COLLECTION
</button>

        </div>



        <div className="hero-image">

          <img
  src="/images/banner.jpg"
  alt="Banner"
/>

        </div>


      </section>




      <section className="categories">


        {
          categories.map((item,index)=>(
            
            <div 
              className="category"
              key={index}
            >

              <img 
                src={item.image}
                alt={item.name}
              />

              <p>
                {item.name}
              </p>


            </div>

          ))
        }


      </section>






      {/* NEW ARRIVALS */}


      <section className="arrivals">


        <div className="section-title">

          <h2>
            NEW ARRIVALS
          </h2>

<span
  onClick={() => navigate("/products")}
  style={{ cursor: "pointer" }}
>
  VIEW ALL
</span>
        </div>




        <div className="arrival-grid">


          {
            arrivals.map((item,index)=>(

              <div 
                className="arrival-card"
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <h3>
                  {item.name}
                </h3>


              </div>


            ))
          }


        </div>


      </section>

{/* =========================
    SHOP COLLECTION
========================= */}

<section id="collections" className="collections">
  <div className="section-title">

    <h2>SHOP COLLECTION</h2>

<span
  onClick={() => navigate("/products")}
  style={{ cursor: "pointer" }}
>
  VIEW ALL
</span>
  </div>

  <div className="collection-grid">

    {collections.map((item, index) => (

      <div
        className="collection-card"
        key={index}
      >

        <img
          src={item.image}
          alt={item.title}
        />

        <div className="collection-content">

          <h3>{item.title}</h3>

          <button onClick={() => navigate("/products")}>
  SHOP NOW
</button>
        </div>

      </div>

    ))}

  </div>

</section>


    </div>
    
  );
}


export default Home;