import './App.css';
import {Navbar,Haeder,RowCarousel,CardCarrousel,Cards,CardsProduct,CardImg,Footer} from'./component'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Haeder />
     <img src="https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png" style={{width: "100%"}} alt="" />
     <RowCarousel />
    <CardCarrousel />
    <Cards class="row mx-3 bg-secondary" img1="https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png" img2="https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png" img3="https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png"/>
    <CardsProduct text="Recomended For You"/>
    <Cards text="Mega deals of the day" class="row mx-2 bg-warning" img1="https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-01.png" img2="https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-02.png" img3="https://k.nooncdn.com/cms/pages/20220516/4f2f689e2774faa782f5541f7198af0d/en_mb_uae-mega-01.png" />
    <Cards class="row mx-3" img3="https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png" img2="https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png" img1="https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png" />
    <Cards class="row mx-3 bg-warning" text="Clearence Deals" img3="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png" img2="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png" img1="https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-01.png" />
    <CardsProduct text="More Clearence"/>
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk-uae-free-delivery-banner-strip.png"  alt="" />
    <CardsProduct text="Trending deals in electronics"/>
    <Cards class="row mx-3" img3="https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-spot-women-01.png" img2="https://k.nooncdn.com/cms/pages/20220218/0a3aa81cd5cd61e00d09bb556e4a0467/en_dk_uae-spot-03.png" img1="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-spot-01.png"/>
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-strip-01G.png"  alt="" />
    <CardsProduct text="Trending deals in laptops"/>
    <Cards text="Deals Only on noon" class="row mx-3 bg-primary" img3="https://k.nooncdn.com/cms/pages/20220514/748bf56982867c107f39b365f76d14ca/en_mb_uae-deals-03.png" img2="https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-02.png" img1="https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-01.png" />
    <CardsProduct text="Trending Deals in Mobiles" />
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif" className='mx-1' alt="" />
    <CardImg clas="row m-1 bg-success" text="Groceries" img2="https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-03.png" img1="https://k.nooncdn.com/cms/pages/20220112/4d90a77f391834f5df66e403d031fa6a/en_cat-01.png"/>
    <CardsProduct text="Trending deals in kitchen"/>
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-strip-011.gif" className='mx-1'  alt="" />
    <CardImg class="text-center" text="50-80% off Men's Fashion" clas="row m-1 bg-danger" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-08.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-02.png" />
    <CardImg class="text-center" text="50-80% off Women's Fashion" clas="row m-1 bg-danger" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-02.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-08.png" />
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20220513/566de6256fc734f249b05d5ec115504f/en_dk_uae-hero-03.png" alt="" />
    <img  style={{width: "100%"}}src="https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-mashreq-1strip-01.gif" alt="" />
    <CardImg clas="row m-1 bg-secondary"  text="Electronics" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png"/>
    <CardImg clas="row m-1"  text="Mobiles accessories" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png"/>
    <CardImg clas="row m-1 bg-secondary"  text="Laptops" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png"/>
    <CardImg clas="row m-1"  text="Accesoties" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png"/>
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20211018/ecde4ae8250d6cd07b29d4de4b106f61/en_strip-00.png" alt="" />
    <CardImg clas="row m-1"  text="Toys" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png"/>
    <CardImg clas="row m-1"  text="Games" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png"/>
    <CardImg clas="row m-1"  text="Glasses" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png"/>
    <CardImg clas="row m-1"  text="Shoes" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png"/>
    <CardImg clas="row m-1"  text="Clothes" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png"/>
    <CardImg clas="row m-1"  text="Wallet" img2="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-04.png" img1="https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-07.png"/>
    <img style={{width: "100%"}} src="https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_plp.jpg" alt="" />
    <Footer />
    </div>
  );
}

export default App;