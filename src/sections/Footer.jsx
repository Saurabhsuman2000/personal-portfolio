import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">
          <a
            href="#"
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-black"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-blue-500"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Saurabhsuman2000"
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-black"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/saurabh_suman01/"
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        <p>@ 2025 saurabh. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
