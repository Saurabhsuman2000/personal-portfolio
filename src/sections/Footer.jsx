import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">
          <a
            href="#"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-[#0077B5] text-white "
            target="_blank"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/Saurabhsuman2000"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-900 text-white "
            target="_blank"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.instagram.com/saurabh_suman01/"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white "
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
