import React, { ReactElement } from "react";
import Navbar from "./components/navbar";
import Icon from "../assets/Soul-ai-final-light-bg.png";
import DemoBG from "../assets/interface-bg.png";
import Footer from "./components/footer";

function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <img width={180} src={Icon} alt="VirtualSoul Icon" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Introducing <br />
              VirtualSoul-AI.
              <br />
              <span className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                Like ChatGPT , but with Avatar Characters and More interaction
              </span>
            </h1>
            <p className="mt-6 text-lo leading-8 text-gray-600">
              VirtualSoul-AI is services using chatGPT for create Artificial life with many platforms interaction 3D Model, Metahuman model and  2D Model. with our services you can create many thing such like Avatar Chatbot, AI Influencer , AI Vtuber , AI Branding Characters and
              <br />whatever you must like !! ❤️
              {/* <a href="https://blackbearlabs.ai">Virtualsoul-labs.ai</a> */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contract us</a>
              <a href="about-project.html" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="flow-roor sm:mt-24 p-16 text-center">
            <div className="-m-2 mb-10 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
              <span className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                VirtualSoul-Ai services for supports many platforms characters.
              </span>
            </div>
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4" >
              <img width={1500} height={1000} src={DemoBG} />
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">What / Who is VisualSoul-Ai for?</h2>
              <h3 className="font-normal">Who want to make our <span className="font-semibold text-red-600">characters branding to have life !!</span></h3>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      🧑&zwj;🏫
                    </div>
                    Virtual Influencer
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600"> we understand how is hard to find someone to match with your brand Identity <br /> Let Create Them 🧑.</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                      👋
                    </div>
                    Event promote
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">you need someone to promoting you online event 24 hr nonstop. Let using AI to do it !!!</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                      👨&zwj;💻
                    </div>
                    Ai Vtuber
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600"> Ai VTuber !! can entertain your Fanclub even singsong. with customize personalize (sound, look, chat)</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      ✨
                    </div>
                    Smart Avatar Chatbot
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">If you know ai chatbot. you must love ❤️ avatar chatbot <br />more interaction and more smarter than normal chatbot. 🧑 </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-indigo-100">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Create new Life with AI?<br />Contract us Now.</h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a href="" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contract us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App; 