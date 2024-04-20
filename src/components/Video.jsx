import React from 'react'

const Video = () => {
  return (
        <div className="flex justify-center items-center px-16 bg-white max-md:px-5">
          <div className="justify-end px-9 py-7 max-w-full bg-gray-900 rounded-2xl w-[1300px] max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch pr-7 my-auto text-lg text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-black max-md:max-w-full max-md:text-4xl">
                    It was love at first story
                  </div>
                  <div className="mt-6 mr-5 leading-7 max-md:mr-2.5 max-md:max-w-full">
                    “Great plugin and amazing support. I trialed several plugins
                    that try to accomplish the same thing. None of them did it as
                    beautifully and as simple as EmbedStories”
                  </div>
                  <div className="mt-4 mr-5 leading-7 max-md:mr-2.5 max-md:max-w-full">
                    <span className="font-bold">Bertha Jo,</span> CEO at jacole
                  </div>
                  <div className="self-start mt-9 text-4xl text-center">jacole</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0cd024b9dfc657fad7a2accac1bab174148bea984c2e0551aa76a437e2f32b7?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                  className="grow w-full aspect-[1.54] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>    
  )
}

export default Video