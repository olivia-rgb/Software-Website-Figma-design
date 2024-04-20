import React from 'react'

const About = () => {
  return (
    <div>
    <div className="flex justify-center items-center px-16 py-2.5 bg-white max-md:px-5 mt-10">
      <div className="justify-center max-w-full w-[1300px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/118523ce725e29b20147442b44f757c85d6e6ef51e6c4e837644bbdc11653b1a?apiKey=f417b8c00fe14582a1a201b8017683ae&"
              className="grow w-full shadow-sm aspect-[1.52] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="text-5xl font-black text-black max-md:text-4xl">
                Widgets for every website.
              </div>
              <div className="flex gap-4 p-4 mt-8 rounded-xl">
                <div className="flex flex-col justify-center">
                  <div className="flex gap-0.5 items-start px-1 py-4 w-10 h-10 bg-gray-400 rounded-lg">
                    <div className="shrink-0 w-2.5 h-2.5 bg-slate-50 rounded-[50px]" />
                    <div className="shrink-0 w-2.5 h-2.5 bg-slate-50 rounded-[50px]" />
                    <div className="shrink-0 w-2.5 h-2.5 bg-slate-50 rounded-[50px]" />
                  </div>
                </div>
                <div className="my-auto text-xl font-medium leading-5 text-center text-gray-400">
                  Highlights
                </div>
              </div>
              <div className="flex gap-4 p-4 mt-2.5 text-xl font-medium leading-5 text-center text-gray-400 whitespace-nowrap rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec7012e0081ea08913806f6ae723762bc5203b2e9fad197d08f3be85b9472176?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                  className="shrink-0 w-10 aspect-square"
                />
                <div className="my-auto">Popover</div>
              </div>
              <div className="flex gap-4 p-4 mt-2.5 rounded-md">
                <div className="flex flex-col justify-center">
                  <div className="flex gap-0.5 items-center px-1 py-2 w-10 h-10 bg-gray-400 rounded-lg">
                    <div className="shrink-0 self-stretch my-auto w-2 h-4 rounded-sm bg-slate-50" />
                    <div className="shrink-0 self-stretch w-3.5 h-6 rounded bg-slate-50" />
                    <div className="shrink-0 self-stretch my-auto w-2 h-4 rounded-sm bg-slate-50" />
                  </div>
                </div>
                <div className="my-auto text-xl font-medium leading-5 text-center text-gray-400">
                  Inline slideshows
                </div>
              </div>
              <div className="flex gap-4 p-4 mt-2.5 text-xl font-medium leading-5 text-center text-gray-400 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbd5da8db42c3ab6a3a270a32b0dbf87b00fe2685346b78173f5577eefcc321?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                  className="shrink-0 w-10 aspect-square"
                />
                <div className="my-auto">Story list gallery</div>
              </div>
              <div className="flex gap-4 p-4 mt-2.5 text-xl font-medium leading-5 text-center text-blue-600 rounded-md bg-slate-100">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b79bdcbb99392b495b9fd87dd9e74d123d3b26f94097b2a8a2444fc2bb4543f?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                  className="shrink-0 w-10 aspect-square"
                />
                <div className="my-auto">Carousel gallery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About