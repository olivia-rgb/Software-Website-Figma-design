import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className="flex justify-between items-center px-16 py-2.5 bg-white shadow-sm max-md:px-5">
      <div className="flex gap-5 justify-between items-center max-w-full w-[1301px] max-md:flex-wrap">

        <div className="flex gap-2.5 items-center self-stretch my-auto text-lg font-black text-black ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4248d74c8b50f27ad72d98bfbb2d2706d32a077d25e0afc0b7514f3920eeda4?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="shrink-0 w-10 aspect-square"
          />
          <div className="">embedsocial</div>
        </div>

        <div className="flex gap-5 justify-between self-stretch my-auto text-base leading-6 text-black whitespace-nowrap">
          <div>Platform</div>
          <div>Widgets</div>
          <div>Templates</div>
          <div className="my-auto leading-[81%]">Pricing</div>
        </div>

        <div className="flex gap-5 justify-between self-stretch">
          <div className="my-auto text-base leading-3 text-black">Login</div>
          <div className="justify-center px-4 py-3 text-base font-bold leading-5 text-center text-white bg-blue-600 rounded">
            Start Free Trial
          </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Navbar