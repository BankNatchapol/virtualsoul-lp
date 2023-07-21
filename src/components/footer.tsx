import { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500"><a href="privacy.html">Privacy Policy</a> |&nbsp;© Made with ❤️ in 🇪🇸/🇧🇪 by <a href="https://blackbearlabs.ai/">https://blackbearlabs.ai/</a>,
              favicon/logo by <a href="https://www.vecteezy.com/free-vector/kawaii">Kawaii Vectors by Vecteezy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;