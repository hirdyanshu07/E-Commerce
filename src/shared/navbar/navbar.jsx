import React from 'react';
import customizeLogo from '../../assets/logoImage.PNG' 
import '../../styles/navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='bg-slate-500 flex justify-between'>
        <div className='p-5 w-10'>
            <img className='logoStyling' src={customizeLogo} alt='' />
        </div>
        

    </div>
</>
)
}

export default Navbar;
