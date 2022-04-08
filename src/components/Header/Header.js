import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Header.css'

const Header = () => {
    const [open,setOpen]=useState(false);
    const logo="https://cdn-marketplacedev.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/sheba.svg"
    const items=[
    {id:2,name:'Home',link:"/Home"},
    {id:3,name:'All Services',link:"/AllServices"},
    {id:4,name:'Login',link:"/Login"},
   /*  {id:5,name:'Coupons',link:"/Coupons"},
    {id:6,name:'Contact',link:"/Contact"}  */
]
    return (
        <div className=' bg-indigo-200 py-4 headr'>
            <div onClick={()=>setOpen(!open)} className="w-12  h-11  md:hidden ">
               {
                 open?<XIcon></XIcon> :  <MenuIcon></MenuIcon>
               }
            </div>
            <ul className={` md:flex justify-around w-full bg-indigo-200 absolute md:static  duration-500 ease-in ${open?'top-16':'top-[-120px]'}`}>
            <div className='xyz'>
                <img className='h-8 '  src={logo} alt="" />
                 
              </div>
            <div className='flex'>
            {
                items.map(item=><Nav key={item.id} item={item}></Nav>)
            }
            </div>
        </ul>
        </div>
    );
};

export default Header;