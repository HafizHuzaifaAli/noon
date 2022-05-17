function Navbar(props){
    return(<nav className="navbar navbar-expand-lg bg-warning ">
  <div className="container-fluid">
    <div className="navbar-brand fw-bold" ><i className="fa-solid fa-border-none"></i> noon</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-flag-usa bg-danger"></i> Deliver to <span className="fw-bold">Dubai</span>
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><div className="dropdown-item" >UAE</div></li>
            <li><div className="dropdown-item" >KAS</div></li>
            <li><div className="dropdown-item" >Egypt</div></li>
          </ul>
        </li>

        <li className="nav-item">
          <input className="form-control" style={{width:"800px"}} type="search" placeholder="What are you looking for?" aria-label="Search" />
        </li>
      </ul>
        <ul className="d-flex navbar-nav">
        <li className="nav-item">
          <div className="nav-link" >Al-Arabia</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" ><i className="fa-solid fa-user"></i> Sign In</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" ><i className="fa-solid fa-cart-shopping"></i> Cart</div>
        </li>
        </ul>
      
    </div>
  </div>
</nav>)
} ;
function Haeder(props){
 return( <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand fw-bold text-primary">All Categories      <i className="fa-solid fa-caret-down"></i></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-3" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold" aria-current="page">Electronic</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold " aria-current="page">Men</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold " aria-current="page">Women</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold active" aria-current="page">Home</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold">Beauty & Fragnence</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold">Baby & toys</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold">Grocery</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold">Storts</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold">Bestsellers</div>
        </li>
        <li className="nav-item">
          <div className="nav-link btn px-3 fw-bold">Sell on noon</div>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}
function RowCarousel(props){
    return(
      <div className="row p-0 m-1">
        <div className="col-md-9 p-0 m-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://k.nooncdn.com/cms/pages/20220510/15678653c198e2192174ec7fe227ecfa/en_dk_uae-hero-04.png" className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_dk_uae-hero.png" className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220428/1747658ec328951b40462b55f6285f18/en_hero.gif" className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220512/fa19c97b89fdb59cdf96b2505dbf7908/en_dk_uae-slider-01.png" className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220505/12c64234eb40d3716a7ac909a89df125/en_dk_uae-hero-01.png" className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://k.nooncdn.com/cms/pages/20220504/d1f4c72311df40f79df6e159f096f210/en_dk_ksa_hero-bulk-01.png" className="d-block w-100"  alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="col-md-3 p-0 m-0">
          <img style={{height:"213px",width:"100%"}} src="https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-03.png" alt="" />
        </div>
      </div>
    )
}
function CardCarrousel(props){
  return(<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="row">
      <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" className="d-block w-10 "  alt="..." />
      </div>
      <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" className="d-block w-10 "  alt="..." />
          
        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png" className="d-block w-10 "  alt="..." />


        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
    </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" className="d-block w-10 "  alt="..." />
      </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" className="d-block w-10 "  alt="..." />
          
        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png" className="d-block w-10 "  alt="..." />


        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        
    </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" className="d-block w-10 "  alt="..." />
      </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" className="d-block w-10 "  alt="..." />
          
        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png" className="d-block w-10 "  alt="..." />


        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        
    </div>
    </div>
    <div className="carousel-item">
      <div className="row">
      <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" className="d-block w-10 "  alt="..." />
      </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" className="d-block w-10 "  alt="..." />
          
        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_mb_uae-cat-04.png" className="d-block w-10 "  alt="..." />


        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        <div className="col-md-2">
      <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" className="d-block w-10 "  alt="..." />
      

        </div>
        
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>)
}
function Cards(props){
  return(<div className={props.class}>
    <h3 className="fw-bold">{props.text}</h3>
    <div className="col-md-4">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
   
      <img src={props.img1} className="img-fluid rounded-start h-100" alt="..." />
    
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div className="card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
  
      <img src={props.img2} className="img-fluid rounded-start h-100" alt="..." />
    
  </div>
</div>
    </div>
    <div className="col-md-4">
    <div className="card mb-3" style={{maxWidth: "540px;"}}>
  <div className="row g-0">
    
      <img src={props.img3} className="h-100 img-fluid rounded-start" alt="..." />
  </div>
</div>
    </div>
  </div>)
}
function CardsProduct(props){
  return(
    <div className="row mx-1 bg-light">
      <h1 className="fw-bold fs-4">{props.text}</h1>
    <div className="col-md-2">
    <div className="card" style={{width: "12rem"}}>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">T500 Bluetooth Full
Touch Call Smartw…</h5>
    <p className="card-text">AED 36.50</p>
    <div>Arrives</div>
    <div>Tommorow</div>
    <div className="d-flex justify-content-between">
      <div className="bg-warning">express</div>
      <div><i className="fa-solid fa-star"></i> 4.1</div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-2">
    <div className="card" style={{width: "12rem"}}>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">T500 Bluetooth Full
Touch Call Smartw…</h5>
    <p className="card-text">AED 36.50</p>
    <div>Arrives</div>
    <div>Tommorow</div>
    <div className="d-flex justify-content-between">
      <div className="bg-warning">express</div>
      <div><i className="fa-solid fa-star"></i> 4.1</div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-2">
    <div className="card" style={{width: "12rem"}}>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">T500 Bluetooth Full
Touch Call Smartw…</h5>
    <p className="card-text">AED 36.50</p>
    <div>Arrives</div>
    <div>Tommorow</div>
    <div className="d-flex justify-content-between">
      <div className="bg-warning">express</div>
      <div><i className="fa-solid fa-star"></i> 4.1</div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-2">
    <div className="card" style={{width: "12rem"}}>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">T500 Bluetooth Full
Touch Call Smartw…</h5>
    <p className="card-text">AED 36.50</p>
    <div>Arrives</div>
    <div>Tommorow</div>
    <div className="d-flex justify-content-between">
      <div className="bg-warning">express</div>
      <div><i className="fa-solid fa-star"></i> 4.1</div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-2">
    <div className="card" style={{width: "12rem"}}>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">T500 Bluetooth Full
Touch Call Smartw…</h5>
    <p className="card-text">AED 36.50</p>
    <div>Arrives</div>
    <div>Tommorow</div>
    <div className="d-flex justify-content-between">
      <div className="bg-warning">express</div>
      <div><i className="fa-solid fa-star"></i> 4.1</div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-2">
    <div className="card" style={{width: "12rem"}}>
  <img src="https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">T500 Bluetooth Full
Touch Call Smartw…</h5>
    <p className="card-text">AED 36.50</p>
    <div>Arrives</div>
    <div>Tommorow</div>
    <div className="d-flex justify-content-between">
      <div className="bg-warning">express</div>
      <div><i className="fa-solid fa-star"></i> 4.1</div>
    </div>
  </div>
</div>
    </div>
  </div>
  )
}
function CardImg(props){
  return(<div className={props.clas}>
    <h2 className={props.class}>{props.text}</h2>
    <div className="col-md-2"><img src={props.img1} alt="" /></div>
    <div className="col-md-2"><img src={props.img2} alt="" /></div>
    <div className="col-md-2"><img src={props.img1} alt="" /></div>
    <div className="col-md-2"><img src={props.img2} alt="" /></div>
    <div className="col-md-2"><img src={props.img1} alt="" /></div>
    <div className="col-md-2"><img src={props.img2} alt="" /></div>
  </div>)
}
function Footer(){
  return(
    <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">Home</li>
          <li className="nav-item mb-2">Features</li>
          <li className="nav-item mb-2">Pricing</li>
          <li className="nav-item mb-2">FAQs</li>
          <li className="nav-item mb-2">About</li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
  )
}
export {Navbar,Haeder,RowCarousel,CardCarrousel,Cards,CardsProduct,CardImg,Footer}