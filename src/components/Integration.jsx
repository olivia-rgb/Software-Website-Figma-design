import React from 'react'

const Integration = () => {
  return (
    <div className="flex justify-center items-center px-16 bg-white max-md:px-5">
      <div className="flex flex-col justify-center p-14 max-w-full rounded-2xl bg-slate-100 w-[1300px] max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto text-xl text-black max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-3 justify-between px-2.5 py-3 text-base font-medium text-center text-blue-600 whitespace-nowrap bg-indigo-50 rounded">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df82a67476b6ac9654764d2cc384fcf2cd6903772f3f76c58470c396ff2ddd4a?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-square fill-black fill-opacity-0 w-[17px]"
                  />
                  <div>Integrations</div>
                </div>
                <div className="self-stretch mt-8 text-5xl font-black max-md:max-w-full max-md:text-4xl">
                  Works with 99.9% of <br />
                  web platforms
                </div>
                <div className="self-stretch mt-8 max-md:max-w-full">
                  We integrate with tons of other apps, ecoomerce platforms or
                  web builders. Native apps are avaialble, too.{" "}
                </div>
                <div className="flex gap-2.5 justify-center mt-8 leading-[156%]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb713676d99d3281014a06371510aa3a845b19d3051566a769aa578a22c507eb?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 my-auto aspect-square fill-black fill-opacity-0 w-[18px]"
                  />
                  <div>Works with any website</div>
                </div>
                <div className="flex gap-2.5 justify-center mt-2.5 leading-[156%]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6acec07d7ddc60f19e7f90082f55ee45fcaa34f3e17d779f5f0abac5d847038?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 my-auto aspect-square fill-black fill-opacity-0 w-[18px]"
                  />
                  <div>No coding required to embed</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a4f59962b2720fda12f9efffaaeaf1c2c82dc43b792febcab5fd2ce34344200?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="grow w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integration