import React, { ReactElement } from "react";
import Navbar from "./components/navbar";
import Icon from "../assets/Soul-ai-final-1.png";
import DemoBG from "../assets/interface-bg.png";
import Footer from "./components/footer";

function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <div className="relative isolate pt-14">
        <div className="pt-12 sm:py-32 lg:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <img width={180} src={Icon} alt="VirtualSoul Icon" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span>Welcome to the World of</span>
              <br />
            </h1>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl pt-4">
              VirtualSoul-AI
            </h1>
            <br />
            <h1>
              <span className="text-1xl font-bold tracking-tight text-gray-600 sm:text-3xl">
                Engaging Conversations, Dynamic Avatars, and Interactive Experiences Redefined
              </span>
            </h1>
            <p className="mt-6 text-lo leading-8 text-gray-600">
              VirtualSoul-AI: Empowering creativity with AI. Our advanced language models bring life to 3D, Metahuman, and 2D characters across platforms. From AI chatbots to live streamers and unique brand personas, explore endless possibilities with us. Create, engage, love!💖
              {/* <a href="https://blackbearlabs.ai">Virtualsoul-labs.ai</a> */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="" className="rounded-md bg-[#38c0ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#59e6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38c0ff]">Contact us</a>
              <a href="about-project.html" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="flex flex-col flow-roor sm:mt-24 p-16 text-center  items-center">
            <div className="-m-2 mb-10 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
              <span className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                VirtualSoul-AI offers services to enhance characters across a variety of platforms.
              </span>
            </div>
            <div className="-m-2 max-w-5xl  rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 lg:mt-[16px]" >
              <img width={1000} height={720} src={DemoBG} />
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-[#38c0ff]">
                Do you want to make your character branding come alive?
              </h2>
              <h3 className="font-semibold text-[24px] text-[#9943df]">VisualSoul-AI is the answer!</h3>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      💃
                    </div>
                    Virtual Influencer
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">We recognize the challenge of finding a suitable match for your brand identity. Let's collaborate to shape them perfectly!</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                      📢
                    </div>
                    Event Promotion
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Need continuous promotion for your online event? Utilize AI for 24-hour non-stop marketing!</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                      👨&zwj;💻
                    </div>
                    AI Live Streamer
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Experience the AI live streamer! It can entertain your fan club, even engage in sing-alongs. Enjoy customization options for sound and character personalization.</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      🤖
                    </div>
                    Smart Avatar Chatbot
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">If you're familiar with AI chatbots, you're going to adore avatar chatbots. They offer more interaction and are considerably more intelligent than traditional chatbots. 💁‍♂️🧠</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-[#dbf4ff]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Looking to breathe life into your character? <br />Reach out to us today !!</h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a href="" className="rounded-md bg-[#38c0ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#59e6ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#59e6ff]">Contact us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App; 
