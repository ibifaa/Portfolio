import React from 'react'
// import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-full h-[50px] bg-[#ffffff] leading-[50px] flex items-center shadow-md flex items-center'>
      <div className='container'>
        <div className="flex items-center justify-between w-full">
          {/* ================ logo ============== */}
          <div className="flex items-center gap-[10px]">
          <span className='w-[35px] h-[35px] bg-cyan-400 text-[#000000] text-[18px] font-[500]
          rounded-full flex items-center justify-center' >IB</span>
          <div className="leading-[20px] font-[700]">
            <h2 className='text-xl text-[#000000]'>Ibifaa I.A</h2>
          </div>
          </div>
       {/*===================logo end ================ */}

       {/*=================== nav-item  ================ */}
       <div >
       <ul className='flex text-[#000000] gap-[20px]'>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Portfolio</li>
            <li><a href=""></a>Contact</li>
          </ul>
       </div>
          
        {/*=================== nav-end  ================ */}
        </div>
      </div>
    </header>
  )
}

