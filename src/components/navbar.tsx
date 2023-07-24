import { ReactElement } from "react";

const Navbar = (): ReactElement => {
  return (
    <div className="mx-auto max-x-7xl px-2 sm:px-2 lg:px-80">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <a href="/" className="border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-label="page">
            VirtualSoul-AI
          </a>
          <a href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
            About Project
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;