
const restaurants = [
  {
    name: "Pizza Hut",
    cuisine: "Pizza, Fast Food",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Burger King",
    cuisine: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    name: "Biryani House",
    cuisine: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
  },
   {
    name: "KFC",
    cuisine: "Chicken",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
  },
]
function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-warning fs-3" href="#">
            SWIGGY
          </a>

          <div>
            <button className="btn btn-outline-dark me-2">
              Sign In
            </button>

            <button className="btn btn-warning text-white">
              Order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Order food & groceries.
              Discover best restaurants.
            </h1>

            <p className="lead text-muted mt-3">
              Fast delivery at your doorstep.
            </p>

            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location"
              />

              <button className="btn btn-warning text-white">
                Search
              </button>
            </div>
          </div>

          

        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">
          Popular Restaurants
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                className="card-img-top"
                alt="Pizza"
              />

              <div className="card-body">
                <h5>Pizza Hut</h5>
                <p className="text-muted">
                  Pizza, Fast Food
                </p>
                <button className="btn btn-warning text-white">
                  View Menu
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                className="card-img-top"
                alt="Burger"
              />

              <div className="card-body">
                <h5>Burger King</h5>
                <p className="text-muted">
                  Burgers, Snacks
                </p>
                <button className="btn btn-warning text-white">
                  View Menu
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe"
                className="card-img-top"
                alt="Biryani"
              />

              <div className="card-body">
                <h5>Biryani House</h5>
                <p className="text-muted">
                  Biryani, Indian
                </p>
                <button className="btn btn-warning text-white">
                  View Menu
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Food Categories */}

<section className="container py-5">
  <h2 className="fw-bold mb-4">What's on your mind?</h2>

  <div className="row text-center">

    <div className="col-md-2 col-6 mb-4">
      <div className="card border-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
          className="card-img-top p-3"
        />
        <h6>Pizza</h6>
      </div>
    </div>

    <div className="col-md-2 col-6 mb-4">
      <div className="card border-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
          className="card-img-top p-3"
        />
        <h6>Burger</h6>
      </div>
    </div>

    <div className="col-md-2 col-6 mb-4">
      <div className="card border-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          className="card-img-top p-3"
        />
        <h6>Biryani</h6>
      </div>
    </div>

    <div className="col-md-2 col-6 mb-4">
      <div className="card border-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2718/2718224.png"
          className="card-img-top p-3"
        />
        <h6>Cakes</h6>
      </div>
    </div>

    <div className="col-md-2 col-6 mb-4">
      <div className="card border-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          className="card-img-top p-3"
        />
        <h6>Ice Cream</h6>
      </div>
    </div>

    <div className="col-md-2 col-6 mb-4">
      <div className="card border-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
          className="card-img-top p-3"
        />
        <h6>Dosa</h6>
      </div>
    </div>

  </div>
</section>

   {/* Offers */}

<section className="container py-5">
  <h2 className="fw-bold mb-4">Best Offers</h2>

  <div className="row">

    <div className="col-md-4">
      <div className="bg-warning text-white p-4 rounded">
        <h4>50% OFF</h4>
        <p>On your first order</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-danger text-white p-4 rounded">
        <h4>FREE DELIVERY</h4>
        <p>Above ₹199 orders</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="bg-success text-white p-4 rounded">
        <h4>BUY 1 GET 1</h4>
        <p>Selected restaurants</p>
      </div>
    </div>

  </div>
</section>

<section className="container py-5">
  <h2 className="fw-bold mb-4">
    Top Restaurants Near You
  </h2>

  <div className="row">

    {restaurants.map((item, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card shadow-sm h-100">

          <img
            src={item.image}
            className="card-img-top"
            alt={item.name}
          />

          <div className="card-body">
            <h5>{item.name}</h5>
            <p>{item.cuisine}</p>

            <button className="btn btn-warning text-white">
              Order Now
            </button>
          </div>

        </div>
      </div>
    ))}

  </div>
</section>

<section className="bg-dark text-white py-5">
  <div className="container text-center">

    <h2 className="fw-bold">
      Get the Swiggy App
    </h2>

    <p>
      Order food, groceries and more.
    </p>

    <button className="btn btn-light me-2">
      Play Store
    </button>

    <button className="btn btn-light">
      App Store
    </button>

  </div>
</section>

<footer className="bg-black text-white pt-5">

  <div className="container">

    <div className="row">

      <div className="col-md-3">
        <h3 className="text-warning fw-bold">
          SWIGGY
        </h3>

        <p>
          Delivering happiness at your doorstep.
        </p>
      </div>

      <div className="col-md-3">
        <h5>Company</h5>

        <ul className="list-unstyled">
          <li>About Us</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
        </ul>
      </div>

      <div className="col-md-3">
        <h5>Contact</h5>

        <ul className="list-unstyled">
          <li>Help & Support</li>
          <li>Partner With Us</li>
          <li>Ride With Us</li>
        </ul>
      </div>

      <div className="col-md-3">
        <h5>Legal</h5>

        <ul className="list-unstyled">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

    </div>

    <hr />

    <p className="text-center mb-0 pb-3">
      © 2025 Swiggy Clone | Built with React & Bootstrap
    </p>

  </div>

</footer>


    </>
  )
}

export default App