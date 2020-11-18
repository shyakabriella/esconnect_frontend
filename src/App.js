import ImageSlider from "./components/Slider";
import "./css/style.css";
import "./css/slick.css";
import "./css/App.css";

function App() {
  return (

    <div id="top-header">
      
      <header>
     
     <div id="top-header">
       <div class="container">
       
       </div>
     </div>
    
     <div id="header">
       <div class="container">
         <div class="pull-left">
          
           <div class="header-logo">
             <a class="logo" href="index.html">
               <img src="/img/logo5.png" alt="" />
             </a>
           </div>
      
           <div class="header-search">
             <form>
               <input
                 class="input search-input"
                 type="text"
                 placeholder="Search" />

               <select class="input search-categories">
                 <option value="0">All Categories</option>
                 <option value="1">Category 01</option>
                 <option value="1">Category 02</option>
               </select>
               <button class="search-btn"><i class="fa fa-search"></i></button>
             </form>
           </div>
           
         </div>
         <div class="pull-right">
           <ul class="header-btns">
            
             <li class="header-cart dropdown default-dropdown">
              
               <div class="custom-menu">
                 <div id="shopping-cart">
                   <div class="shopping-cart-list">
                     <div class="product product-widget">
                       <div class="product-thumb">
                         <img src="/img/thumb-product01.jpg" alt="" />
                       </div>
                       <div class="product-body">
                         <h3 class="product-price">
                           7,000Frw <span class="qty">x3</span>
                         </h3>
                         <h2 class="product-name"><a href="#">Shoes</a></h2>
                       </div>
                       <button class="cancel-btn">
                         <i class="fa fa-trash"></i>
                       </button>
                     </div>
                     <div class="product product-widget">
                       <div class="product-thumb">
                         <img src="/img/thumb-product01.jpg" alt="" />
                       </div>
                       <div class="product-body">
                         <h3 class="product-price">
                           30,000Frw <span class="qty">x3</span>
                         </h3>
                         <h2 class="product-name"><a href="#">Bags</a></h2>
                       </div>
                       <button class="cancel-btn">
                         <i class="fa fa-trash"></i>
                       </button>
                     </div>
                   </div>
                   <div class="shopping-cart-btns">
                     <button class="main-btn">View Cart</button>
                     <button class="primary-btn">
                       Checkout <i class="fa fa-arrow-circle-right"></i>
                     </button>
                   </div>
                 </div>
               </div>
             </li>
            
             <li class="nav-toggle">
               <button class="nav-toggle-btn main-btn icon-btn">
                 <i class="fa fa-bars"></i>
               </button>
             </li>
             
           </ul>
         </div>
       </div>
      
     </div>
   
   </header>
  
   <div id="navigation">
   
     <div class="container">
       <div id="responsive-nav">
        
         <div class="category-nav">
           <span class="category-header">Categories <i class="fa fa-list"></i></span>
           <ul class="category-list">
            
             <li class="dropdown side-dropdown">
               <a
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 aria-expanded="true">Phones & Accessories <i class="fa fa-angle-right"></i></a>
               <div class="custom-menu">
                 <div class="row">
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">PHONES</h3>
                       </li>
                       <li><a href="#">iPhone - Apple</a></li>
                       <li><a href="#">Samsung</a></li>
                       <li><a href="#">Tecno</a></li>
                       <li><a href="#">Huawei</a></li>
                       <li><a href="#">Nokia</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">TELEVISIONS</h3>
                       </li>
                       <li><a href="#">LG</a></li>
                       <li><a href="#">Star Times</a></li>
                       <li><a href="#">Samsung</a></li>
                       <li><a href="#">Sony</a></li>
                       <li><a href="#">Hisense</a></li>
                     </ul>
                     <hr class="hidden-md hidden-lg" />
                   </div>
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">CAMERAS</h3>
                       </li>
                       <li><a href="#">Canon</a></li>
                       <li><a href="#">Nikon</a></li>
                       <li><a href="#">Sony</a></li>
                       <li><a href="#">Panasonic</a></li>
                       <li><a href="#">Fujifilm</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">HEADPHONES</h3>
                       </li>
                       <li><a href="#">Bose</a></li>
                       <li><a href="#">Sony</a></li>
                       <li><a href="#">Philips</a></li>
                       <li><a href="#">Sennheiser</a></li>
                       <li><a href="#">Adudio-Technica</a></li>
                     </ul>
                   </div>
                   <div class="col-md-4 hidden-sm hidden-xs">
                     <a class="banner banner-2" href="#">
                       <img src="/img/banner23.png" alt="" />
                       <div class="banner-caption">
                        
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
             </li>
            
             <li class="dropdown side-dropdown">
               <a
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 aria-expanded="true">Computer & Office<i class="fa fa-angle-right"></i></a>
               <div class="custom-menu">
                 <div class="row">
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Computers</h3>
                       </li>
                       <li><a href="#">hp</a></li>
                       <li><a href="#">asus</a></li>
                       <li><a href="#">dell</a></li>
                       <li><a href="#">lenovo</a></li>
                       <li><a href="#">alienware</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">office furnitures</h3>
                       </li>
                       <li><a href="#">office chairs</a></li>
                       <li><a href="#">office tables</a></li>
                       <li><a href="#">Executive chairs</a></li>
                       <li><a href="#">wooden office</a></li>
                       <li><a href="#">office cabins</a></li>
                     </ul>
                     <hr class="hidden-md hidden-lg" />
                   </div>
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Computers</h3>
                       </li>
                       <li><a href="#">apple</a></li>
                       <li><a href="#">acer</a></li>
                       <li><a href="#">microsoft</a></li>
                       <li><a href="#">razer</a></li>
                       <li><a href="#">Huawei</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">office furnitures</h3>
                       </li>
                       <li><a href="#">office sofa</a></li>
                       <li><a href="#">modular office</a></li>
                       <li><a href="#">computer tables</a></li>
                       <li><a href="#">Revolving chairs</a></li>
                       <li><a href="#">visitor chair</a></li>
                     </ul>
                   </div>
                   <div class="col-md-4 hidden-sm hidden-xs">
                     <a class="banner banner-2" href="#">
                       <img src="/img/product03.png" alt="" />
                       <div class="banner-caption">
                        
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
             </li>

             
             <li class="dropdown side-dropdown">
               <a
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 aria-expanded="true">Jewelry & Watches<i class="fa fa-angle-right"></i></a>
               <div class="custom-menu">
                 <div class="row">
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Neck</h3>
                       </li>
                       <li><a href="#">necklace</a></li>
                       <li><a href="#">bolo tie</a></li>
                       <li><a href="#">choker</a></li>
                       <li><a href="#">carcanet</a></li>
                       <li><a href="#">pendant</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Arms</h3>
                       </li>
                       <li><a href="#">Armlet</a></li>
                       <li><a href="#">bangle</a></li>
                       <li><a href="#">bracelets</a></li>
                       <li><a href="#">cuff links</a></li>
                       <li><a href="#">amulet</a></li>
                     </ul>
                     <hr class="hidden-md hidden-lg" />
                   </div>
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Body</h3>
                       </li>
                       <li><a href="#">Belly chain</a></li>
                       <li><a href="#">Body piercing Jewelry</a></li>
                       <li><a href="#">breastplate</a></li>
                       <li><a href="#">brooch</a></li>
                       <li><a href="#">chatelaine</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Hands</h3>
                       </li>
                       <li><a href="#">championship ring</a></li>
                       <li><a href="#">class ring</a></li>
                       <li><a href="#">engagement ring</a></li>
                       <li><a href="#">wedding ring</a></li>
                       <li><a href="#">slave bracelet</a></li>
                     </ul>
                   </div>
                   <div class="col-md-4 hidden-sm hidden-xs">
                     <a class="banner banner-2" href="#">
                       <img src="/img/product02.jpg" alt="" />
                       <div class="banner-caption">
                         
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
             </li>
             <li class="dropdown side-dropdown">
               <a
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 aria-expanded="true">Bags & Shoes<i class="fa fa-angle-right"></i></a>
               <div class="custom-menu">
                 <div class="row">
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">brand name</h3>
                       </li>
                       <li><a href="#">nike</a></li>
                       <li><a href="#">adidas</a></li>
                       <li><a href="#">jordan</a></li>
                       <li><a href="#">reebok</a></li>
                       <li><a href="#">vans</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">brand name</h3>
                       </li>
                       <li><a href="#">libron</a></li>
                       <li><a href="#">testoni</a></li>
                       <li><a href="#">berluti</a></li>
                       <li><a href="#">skechers</a></li>
                       <li><a href="#">under armour</a></li>
                     </ul>
                     <hr class="hidden-md hidden-lg" />
                   </div>
                   <div class="col-md-4">
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">brand name</h3>
                       </li>
                       <li><a href="#">converse</a></li>
                       <li><a href="#">puma</a></li>
                       <li><a href="#">new balance</a></li>
                       <li><a href="#">fila</a></li>
                       <li><a href="#">bostonia</a></li>
                     </ul>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Bag name</h3>
                       </li>
                       <li><a href="#">hand bag</a></li>
                       <li><a href="#">hobo bag</a></li>
                       <li><a href="#">messenger bag</a></li>
                       <li><a href="#">backpack</a></li>
                       <li><a href="#">doctor's bag</a></li>
                     </ul>
                   </div>
                   <div class="col-md-4 hidden-sm hidden-xs">
                     <a class="banner banner-2" href="#">
                       <img src="/img/product07.jpg" alt="" />
                       <div class="banner-caption">
                      
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
             </li>
            
           </ul>
         </div>
        
         <div class="menu-nav">
           <span class="menu-header">Menu <i class="fa fa-bars"></i></span>
           <ul class="menu-list">
             <li><a href="index.html">Home</a></li>
             
             <li><a href="Furniture.html">Furnitures</a></li>
         
             <li class="dropdown mega-dropdown full-width">
               <a
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 aria-expanded="true">Women <i class="fa fa-caret-down"></i></a>

                
               <div class="custom-menu">
                 <div class="row">
                   <div class="col-md-3">
                     <div class="hidden-sm hidden-xs">
                       <a class="banner banner-1" href="#">
                         <img src="/img/banner09.jpg" alt="" />
                         <div class="banner-caption text-center">
                           <h3 class="white-color text-uppercase">Jeans</h3>
                         </div>
                       </a>
                       <hr />
                     </div>
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Categories</h3>
                       </li>
                       <li><a href="Womens.html">BoyFriends</a></li>
                       <li><a href="Womens.html">Wides</a></li>
                       <li><a href="Womens.html">Skinny</a></li>
                       <li><a href="Womens.html">Slim Fit</a></li>
                       <li><a href="Womens.html">Flares</a></li>
                     </ul>
                   </div>
                   <div class="col-md-3">
                     <div class="hidden-sm hidden-xs">
                       <a class="banner banner-1" href="#">
                         <img src="/img/banner07.jpg" alt="" />
                         <div class="banner-caption text-center">
                           <h3 class="white-color text-uppercase">Bags</h3>
                         </div>
                       </a>
                     </div>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Categories</h3>
                       </li>
                       <li><a href="Womens.html">Hobo Bags</a></li>
                       <li><a href="Womens.html">Quilted Bags</a></li>
                       <li><a href="Womens.html">Wristlet Bags</a></li>
                       <li><a href="Womens.html">Sling Bags</a></li>
                       <li><a href="Womens.html">Clutch Bags</a></li>
                     </ul>
                   </div>
                   <div class="col-md-3">
                     <div class="hidden-sm hidden-xs">
                       <a class="banner banner-1" href="#">
                         <img src="/img/banner08.jpg" alt="" />
                         <div class="banner-caption text-center">
                           <h3 class="white-color text-uppercase">
                             Accessories
                           </h3>
                         </div>
                       </a>
                     </div>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Categories</h3>
                       </li>
                       <li><a href="Womens.html">Watches</a></li>
                       <li><a href="Womens.html">muffs</a></li>
                       <li><a href="Womens.html">Eyewears</a></li>
                       <li><a href="Womens.html">bracelets</a></li>
                       <li><a href="Womens.html">necklaces</a></li>
                     </ul>
                   </div>
                   <div class="col-md-3">
                     <div class="hidden-sm hidden-xs">
                       <a class="banner banner-1" href="#">
                         <img src="/img/banner06.jpg" alt="" />
                         <div class="banner-caption text-center">
                           <h3 class="white-color text-uppercase">Shoes</h3>
                         </div>
                       </a>
                     </div>
                     <hr />
                     <ul class="list-links">
                       <li>
                         <h3 class="list-links-title">Categories</h3>
                       </li>
                       <li><a href="Womens.html">Ankle Boots</a></li>
                       <li><a href="Womens.html">High Heels</a></li>
                       <li><a href="Womens.html">Mules</a></li>
                       <li><a href="Womens.html">Gladiator sandals</a></li>
                       <li><a href="Womens.html">Court Shoes</a></li>
                     </ul>
                   </div>
                 </div>
               </div>
             </li>

             <li><a href="Mens.html">Men</a></li>
           
             <li><a href="Kids.html">Kids</a></li>
            
             <li class="dropdown default-dropdown">
               <a
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 aria-expanded="true">Pages <i class="fa fa-caret-down"></i></a>
               <ul class="custom-menu">
                 <li><a href="index.html">Home</a></li>
                
                 <li><a href="Products.html">Products</a></li>
                 <li><a href="Rent.html">Rent</a></li>
                 <li><a href="Product-page.html">Product Details</a></li>
                 <li><a href="checkout.html">Checkout</a></li> 
                 <li><a href="AboutUs.html">About Us</a></li>
               </ul>
             </li>
           </ul>
         </div>
       
       </div>
     </div>
   
   </div>
   
   <div id="home">
     
     <div class="container">
     
       <div class="home-wrap">
        

 <ImageSlider />
       </div>
     </div>
   </div>
  

   <div class="section">
     <div class="container">
       <div class="section-title1">
         <h2 class="title">Our Products Categories</h2>
         <div class="pull-right">
          
       </div>
       <br />
       <div class="row">
         <div class="col-md-4 col-sm-6">
           <a class="banner banner-1" href="./Mens.html">
             <img src="image/id22.jpg" alt="" />
             <div class="banner-caption text-center">
               <h2 class="white-color">PANS</h2>
             </div>
           </a>
         </div>
      
         <div class="col-md-4 col-sm-6">
           <a class="banner banner-1" href="./Mens.html">
             <img src="../image/id15.jpg" alt="" />
             <div class="banner-caption text-center">
               <h2 class="white-color">SHOE</h2>
             </div>
           </a>
         </div>
        
         <div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
           <a class="banner banner-1" href="./Mens.html">
             <img src="./image/id23.jpg" alt="" />
             <div class="banner-caption text-center">
               <h2 class="white-color">SHIRT</h2>
             </div>
           </a>
         </div>
       </div>
     </div>
   </div>

   <div class="section">
     <div class="container">
       <div class="row">
         <div class="col-md-12">
           <div class="section-title">
             <h2 class="title">Deals Of The Day</h2>
             <div class="pull-right">
               <div class="product-slick-dots-1 custom-dots"></div>
             </div>
           </div>
         </div>
         
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="banner banner-2">
             <img src="/img/banner14.jpg" alt="" />
             <div class="banner-caption">
               <h2 class="white-color">NEW<br />COLLECTION</h2>
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
         </div>
        
         <div class="col-md-9 col-sm-6 col-xs-6">
           <div class="row">
             <div id="product-slick-1" class="product-slick">
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                  
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/image/id1.jpg" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">
                     35,000Frw <del class="product-old-price"></del>
                   </h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#"></a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
              
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                  
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/image/id2.jpg" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">
                     15,000Frw <del class="product-old-price"></del>
                   </h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#"></a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
               
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                 
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/image/id4.jpg" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">
                     25,000Frw <del class="product-old-price"></del>
                   </h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#"></a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
             
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                  
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/image//id5.jpg" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">
                     35,000Frw <del class="product-old-price"></del>
                   </h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#"></a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       
       <div class="row">
         <div class="col-md-12">
           <div class="section-title">
             <h2 class="title">Deals Of The Day</h2>
             <div class="pull-right">
               <div class="product-slick-dots-2 custom-dots"></div>
             </div>
           </div>
         </div>
       
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single product-hot">
             <div class="product-thumb">
               <div class="product-label">
               </div>
               
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product05.png" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 25,000Frw <del class="product-old-price">30,000Frw</del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">HeadPhones</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
        
         <div class="col-md-9 col-sm-6 col-xs-6">
           <div class="row">
             <div id="product-slick-2" class="product-slick">
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/img/product02.png" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">20,000Frw</h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#">HeadPhones</a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
              
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                   <div class="product-label">
                   </div>
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/img/product09.png" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">
                     80,000Frw <del class="product-old-price">100,000Frw</del>
                   </h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#">Camera</a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/img/product20.jpg" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">30,000Frw</h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name">
                     <a href="#">Watches & Music</a>
                   </h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
              
               <div class="product product-single">
                 <div class="product-thumb">
                   <div class="product-label">
                     <span>New</span>
                   </div>
                   <button class="main-btn quick-view">
                     <i class="fa fa-search-plus"></i> Quick view
                   </button>
                   <img src="/img/product18.jpg" alt="" />
                 </div>
                 <div class="product-body">
                   <h3 class="product-price">25,000Frw</h3>
                   <div class="product-rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star-o empty"></i>
                   </div>
                   <h2 class="product-name"><a href="#">Watches</a></h2>
                   <div class="product-btns">
                     <button class="main-btn icon-btn">
                       <i class="fa fa-heart"></i>
                     </button>
                     <button class="main-btn icon-btn">
                       <i class="fa fa-exchange"></i>
                     </button>
                     <button class="primary-btn add-to-cart">
                       <i class="fa fa-shopping-cart"></i>
                       <a href="Shop.html"> Order Now</a>
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   
   <div class="section section-grey">
     <div class="container">
       <div class="row">
         <div class="col-md-8">
           <div class="banner banner-1">
             <img src="/img/banner_10.jpg" alt="" />
             <div class="banner-caption text-center">
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
         </div>
        
         <div class="col-md-4 col-sm-6">
           <a class="banner banner-1" href="#">
             <img src="/img/banner_8.jpg" alt="" />
             <div class="banner-caption text-center">
               <h2 class="white-color">NEW COLLECTION</h2>
             </div>
           </a>
         </div>
         
         <div class="col-md-4 col-sm-6">
           <a class="banner banner-1" href="#">
             <img src="/image/id10.jpg" alt="" />
             <div class="banner-caption text-center">
               <h2 class="white-color">NEW COLLECTION</h2>
             </div>
           </a>
         </div>
       </div>
     </div>
   </div>
   
   <div class="section">
     <div class="container">
       <div class="row">
         <div class="col-md-12">
           <div class="section-title">
             <h2 class="title">Latest Products</h2>
           </div>
         </div>
         
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product02.png" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">20,000Frw</h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">HeadPhones</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
        
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product12.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 12,000Frw <del class="product-old-price"></del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Jeans</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
       
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product13.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">17,000Frw</h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Shoes</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
        
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product14.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">30,000Frw</h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Bags</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
       
       <div class="row">
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="banner banner-2">
             <img src="/img/banner16.jpg" alt="" />
             <div class="banner-caption">
               <h2 class="red-color">NEW<br />COLLECTION</h2>
               <button class="primary-btn">
                 <a href="Shop.html">Shop Now</a>
               </button>
             </div>
           </div>
         </div>
        
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product01.png" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 1,200,000Frw <del class="product-old-price"></del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Mac Book</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
        
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product016.png" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 300,000Frw <del class="product-old-price"></del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Samsung edge 8</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
        
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/img/product03.png" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 600,000Frw <del class="product-old-price"></del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Hp Machine</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
       
       <div class="row">
         <div class="col-md-12">
           <div class="section-title">
             <h2 class="title">Picked For You</h2>
           </div>
         </div>
       
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/image/id21.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">14,000Frw</h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#">Bags</a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
       
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/image/id14.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">37,000Frw</h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#"></a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
         
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/image/id11.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 25,000Frw <del class="product-old-price"></del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#"></a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
         
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="product product-single">
             <div class="product-thumb">
               <div class="product-label">
                 <span>New</span>
               </div>
               <button class="main-btn quick-view">
                 <i class="fa fa-search-plus"></i> Quick view
               </button>
               <img src="/image/id20.jpg" alt="" />
             </div>
             <div class="product-body">
               <h3 class="product-price">
                 11,000Frw <del class="product-old-price"></del>
               </h3>
               <div class="product-rating">
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star"></i>
                 <i class="fa fa-star-o empty"></i>
               </div>
               <h2 class="product-name"><a href="#"></a></h2>
               <div class="product-btns">
                 <button class="main-btn icon-btn">
                   <i class="fa fa-heart"></i>
                 </button>
                 <button class="main-btn icon-btn">
                   <i class="fa fa-exchange"></i>
                 </button>
                 <button class="primary-btn add-to-cart">
                   <i class="fa fa-shopping-cart"></i>
                   <a href="Shop.html"> Order Now</a>
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   
   <footer id="footer" class="section section-grey">
     <div class="container">
       <div class="row">
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="footer">
             <div class="footer-logo">
               <a class="logo" href="index.html">
                 <img src="/img/logo5.png" alt="" />
               </a>
             </div>

             <p>
               <b>Which sounds better? "How to Change a Flat Tire" or "The Best
                 Way the Change a Flat Tire."</b><br /><br />
             </p>

             <ul class="-social">
               <li>
                 <a href="#"><i class="fa fa-facebook"></i></a>
               </li>
               <li>
                 <a href="#"><i class="fa fa-twitter"></i></a>
               </li>
               <li>
                 <a href="#"><i class="fa fa-instagram"></i></a>
               </li>
               <li>
                 <a href="#"><i class="fa fa-google-plus"></i></a>
               </li>
               <li>
                 <a href="#"><i class="fa fa-pinterest"></i></a>
  

               </li>
             </ul>
           </div>
         </div>

         
        
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="footer">
             <h3 class="footer-header">Pages</h3>
             <ul class="list-links">

               <li><a href="index.html">Home</a></li>
               <li><a href="Products.html">Product</a></li>
               <li><a href="Rent.html">Rent</a></li>
               <li><a href="Product-page.html">Product List</a></li>
               <li><a href="AboutUs.html">About Us</a></li>
             </ul>
           </div>
         </div>

         <div class="clearfix visible-sm visible-xs"></div>

         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="footer">
             <h3 class="footer-header">Customer Service</h3>
             <ul class="list-links">
               <li><a href="#">About Us</a></li>
               <li><a href="#">Advertising</a></li>
               <li><a href="#">Sell Products</a></li>
               <li><a href="#">Shiping & Return</a></li>
               
             </ul>
           </div>
         </div>
       
         <div class="col-md-3 col-sm-6 col-xs-6">
           <div class="footer">
             <h3 class="footer-header">Stay Connected</h3>
             <p>
               +250788 248 122<br />
               +250782 667 888<br />
               +250728 554 467<br />
               +250730 059 034
             </p>
             <form>
               <div class="form-group">
                 <input class="input" placeholder="Enter Email Address" />
               </div>
               <button class="primary-btn">Join Us</button>
             </form>
           </div>
         </div>
       </div>
       <hr/>
       <div class="row">
         <div class="col-md-8 col-md-offset-2 text-center">
           <div class="footer-copyright">
             Copyright
             
             | Advertised <i class="fa fa-heart-o" aria-hidden="true"></i> by
             <a href="index.html" target="_blank"><b>E&S Connect</b></a>
           </div>
         </div>
       </div>
     </div>
     
   </footer>
   
    </div>
    </div>


     
   
  );
  
}
export default App;