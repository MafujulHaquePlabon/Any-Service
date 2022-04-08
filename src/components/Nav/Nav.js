import React from 'react';
import CustomLink from '../CustomLinks/CustomLink';

const Nav = ({item}) => {
  
    return (
       
          <div>
            
              <div className="mr-6 text-xl font-bold  ">
                  
                  <CustomLink to={item.link}>{item.name}</CustomLink>
             {/*  <a href={item.link}>{item.name}</a> */}
             
           </div>
          </div>
     
    );
};

export default Nav;