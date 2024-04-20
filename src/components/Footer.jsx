import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
        <div className="flex flex-col justify-center items-center p-20 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
          <div className="mt-4 text-6xl font-black text-center text-black max-md:max-w-full max-md:text-4xl">
            Ready to dive in?
            <br />
            Create your widget today.
          </div>
          <div className="mt-5 text-lg leading-6 text-center text-black w-[580px] max-md:max-w-full">
            Display Instagram Stories Widget on your website, that auto-syncs,
            and updates each time you add a photo in your active story.{" "}
          </div>
          <div className="flex gap-0 mt-12 max-w-full text-base w-[406px] max-md:mt-10">
            <div className="justify-center items-start px-3.5 py-5 text-gray-400 bg-white rounded-md border-blue-600 border-solid border-[3px] max-md:pr-5">
              Enter your email...
            </div>
            <div className="flex item-center gap-2.5 px-4 py-3 font-bold text-center text-white bg-blue-600 rounded-none leading-[133%]">
              <div>Start Free Trial</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57d74f082d68c03bda1bf39faab91592d832065a8031041c043d78855e194f32?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                className="shrink-0 my-auto aspect-[0.87] fill-black fill-opacity-0 w-[13px]"
              />
            </div>
          </div>
          <div className="flex gap-2.5 justify-between mt-5 mb-4 text-sm text-black">
            <div>Free 7-day trial</div>
            <div>Easy setup</div>
            <div>Cancel any time</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-9 pb-20 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="mb-16 max-w-full w-[1286px] max-md:mb-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10">
                <div className="flex gap-2.5 self-start text-lg font-bold whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e374a42249a1f2d472a14fb595d0fe6ad0953adec858d727bf8682862f01df?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 w-10 aspect-square"
                  />
                  <div className="flex-auto my-auto">embedsocial</div>
                </div>
                <div className="mt-8 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  rhoncus suspendisse mattis ultricies adipiscing quam pretium
                  eleifend.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col pt-2 text-white max-md:mt-10">
                      <div className="text-lg font-black leading-7">
                        Product
                      </div>
                      <div className="mt-8 text-base leading-6">
                        Reviews management
                        <br />
                        Embed Instagram stories
                        <br />
                        Display Instagram feeds
                        <br />
                        Collect reviews
                        <br />
                        Send email requests
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col py-2 text-white max-md:mt-10">
                      <div className="text-lg font-black leading-7">
                        Company
                      </div>
                      <div className="mt-7 text-base leading-6">
                        About EmbedSocial
                        <br />
                        Brand Guidelines
                        <br />
                        Press Kit
                        <br />
                        Support
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow py-2 text-white whitespace-nowrap max-md:mt-10">
                      <div className="text-lg font-black leading-7">
                        Integrations
                      </div>
                      <div className="mt-7 text-base leading-6">
                        WordPress
                        <br />
                        Shopify
                        <br />
                        Magento
                        <br />
                        Squarespace
                        <br />
                        Intercom
                        <br />
                        Slack
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow py-2 text-white whitespace-nowrap max-md:mt-10">
                      <div className="text-lg font-black leading-7">
                        Integrations
                      </div>
                      <div className="mt-7 text-base leading-6">
                        WordPress
                        <br />
                        Shopify
                        <br />
                        Magento
                        <br />
                        Squarespace
                        <br />
                        Intercom
                        <br />
                        Slack
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer