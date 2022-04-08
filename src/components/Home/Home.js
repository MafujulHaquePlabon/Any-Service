import React from 'react';
import './Home.css'
import { ArrowRightIcon } from '@heroicons/react/solid'
const Home = () => {
    const img="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/search-icon-white.svg"
    const imgb='https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/home-banner.webp'
    return (
      <div>
           <div>
            <div >
          
          <div id="carouselExampleCaptions" class="carousel mt-2 position slide   " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
   
  </div>
  <div class="carousel-inner absolute">
    <div class="carousel-item active">
      <img className='' src={imgb} class="d-block w-100  " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className='text-5xl font-bold mb-20 '>Your Personal Assistant</h1>
        <h3 className='text-3xl font-semibold mb-15'>Some representative placeholder content for the first slide.</h3>
        <form className="d-flex justify-center mb-5 ">
        <input class="form-control mt-3 me-2 w-50  " type="search" placeholder= "Find your service here e.g. AC, Car, Facial …"aria-label="Search"/>
        <button class="btn btn-outline-success mt-3 flex justify-center" type="submit"> <span className='text-white font-bold'>Search</span>
        <img className='my-auto ps-2 ' src={img} alt="search"></img>
        </button>
      </form>
      </div>
    </div>
  </div>
</div>      
   
   <div className='grid grid-cols-3 md:grid-cols-7  relative top '>
       <div>
       <img  className='flex ps-5' src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1601959826_ac_52x52.webp" alt="" />
       <h1 className='font-bold'>Ac Repair services</h1>
       </div>
       <div>
       <img className='flex ps-5' src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1583681524_tiwnn_52x52.webp" alt="" />
       <h1 className='font-bold'>Appliance Repair </h1>
       </div>
       <div>
       <img className='flex ps-5' src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/v4_uploads/category_icons/226/default_52x52.webp" alt="" />
      <h1 className='font-bold'>Painting & Renovation</h1>
       </div>
       <div>
       <img className='flex ps-5' src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1583681093_tiwnn_52x52.webp" alt="" />
       <h1 className='font-bold'> Shifting </h1>
       </div>
       <div>
       <img className='flex ps-5' src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1599673571_tiwnn_52x52.webp" alt="" />
       <h1 className='font-bold'>Beauty & Salon </h1>
       </div>
       <div>
       <img className='flex ps-5' src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1590661286_tiwnn_52x52.webp" alt="" />
       <h1 className='font-bold'>Men's Care & Salon </h1>
       </div>
       <div>
       <img className='flex ps-5' src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/all-services.svg" alt="All Services" alt="" />
       <h1 className='font-bold pt-3'>All services</h1>
       </div>
   </div>

      </div>
        </div>
        <div className='mb-10'>
            <div className='relative xyza' >
       <img className='flex ps-5' src="https://cdn-marketplacedev.s3.ap-south-1.amazonaws.com/sheba_xyz/images/webp/emi-banner.webp" alt="" />
   </div>
        </div>
       <div>
       <div className='home4sectionTitle my-5'>
          <h1>For your Home</h1>
        </div>
       <div className='section4 relative grid grid-cols-2 md:grid-cols-4 gap-5 mx-3 '>
         <div>
         <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1619428672_plumbingsanitaryservices_270x180.webp" alt="" />
           <h1 className='font-bold'>  Plumbing & Sanitary Services </h1>
         </div>
         <div>
         <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1612862065_paintingservices_270x180.webp" alt="" />
           <h1 className='font-bold'> 
              Painting Services </h1>
         </div>
         <div>
         <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617855940_homecleaning_270x180.webp" alt="" />
           <h1 className='font-bold'> 
              Home Cleaning
             </h1>
         </div>
         <div>
         <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617856509_pestcontrolservice_270x180.webp" alt="" />
           <h1 className='font-bold'>  
              Pest Control Service 
             </h1>
            
         </div>
         <div>
         <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1612862065_paintingservices_270x180.webp" alt="" />
           <h1 className='font-bold'>  
             
           Painting Services
            
             </h1>
            
         </div>
         <div>
         <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617855940_homecleaning_270x180.webp" alt="" />
           <h1 className='font-bold'>  
            
           Home Cleaning
            
             </h1>
            
         </div>
         <div  >
        <div>
        <img src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1595216678_houseshiftingservices_270x180.webp" alt="" />
           <h1 className='font-bold'>  
             
           House Shifting Services
            
             </h1>
        </div>
            
         </div>
         <div className='flex my-auto'>
            <h1 className='font-bold flex text-xl'>View All  <ArrowRightIcon className='text-black font-bold w-10 h-8'></ArrowRightIcon></h1>
             </div>
       </div>



       </div>
       </div>
    );
    
};

export default Home;