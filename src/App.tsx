import React, { ReactElement } from "react";
import Navbar from "./components/navbar";
import Icon from "../assets/Soul-ai-final-light-bg.png";
import NekoDemo from "../assets/neko-demo.png";
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
                Like ChatGPT , but with Avatar Charecters and More interaction
              </span>
            </h1>
            <p className="mt-6 text-lo leading-8 text-gray-600">
              MemoryGPT agents will recall details from past conversations and adjust it's behavior to your preferences. You can try it free today in our experimental release. Brought to you with ❤️ by
              <a href="https://blackbearlabs.ai">Virtualsoul-labs.ai</a>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://app.memorygpt.io/chat/chat" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Chat now</a>
              <a href="about-project.html" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="flow-roor sm:mt-24 p-16 text-center">
            <div className="-m-2 mb-10 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
              <span className="text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl">
                Meet Neko, the first Avatar powered by VirtualSoul-Ai.
              </span>
            </div>
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4" >
              <img src={NekoDemo} />
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">What / Who is VisualSoul-Ai for?</h2>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      🧑&zwj;🏫
                    </div>
                    Coaching
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Long Term memory is essential for coaching agents.</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                      👋
                    </div>
                    Friend
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Sometimes you just need someone to talk to who can give you some advice and support.</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                      👨&zwj;💻
                    </div>
                    Productivity
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">It's useful to have a ChatGPT-based agent with long term memory.</dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      ✨
                    </div>
                    Curious minds
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">People who enjoy playing aroud with the newest tech and want to push it to the limit.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-indigo-100">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to be blown away?<br />Chat for free today.</h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a href="https://app.memorygpt.io/chat/chat" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Chat now</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App; 