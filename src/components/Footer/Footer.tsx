import { Earth, Facebook, Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#EFF4FB] px-4">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 custom-container py-12 border-b border-gray-400 justify-between">
        <div className="space-y-4">
          {/* logo */}
          <Image src={"/logo-static.svg"} width={172} height={40} alt="logo" />
          {/* description */}
          <p className="text-sm max-w-sm">
            We bring together all major Bangladeshi national, regional, and
            online newspapers on one platform, making it easy for readers to
            access news from trusted sources in one place. Our goal is to
            simplify news discovery and provide quick access to reliable
            information.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Newspapers</h3>
          <ul className="flex  flex-col gap-4 text-sm">
            <li className="cursor-pointer">National Newspapers</li>
            <li className="cursor-pointer">Online News Portals</li>
            <li className="cursor-pointer">Regional Newspapers</li>
            <li className="cursor-pointer">English Newspapers</li>
            <li className="cursor-pointer">Sports News</li>
            <li className="cursor-pointer">Job News</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Important Links</h3>
          <ul className="flex  flex-col gap-4 text-sm">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">All Newspapers</li>
            <li className="cursor-pointer">Today’s Papers</li>
            <li className="cursor-pointer">E-Paper</li>
            <li className="cursor-pointer">Live TV</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="flex  flex-col gap-4 text-sm">
            <li className="cursor-pointer flex gap-2 items-center">
              <Mail size={16} /> support@yourwebsite.com
            </li>
            <li className="cursor-pointer flex gap-2 items-center">
              <Earth size={16} /> www.banglanewspaper.com
            </li>
          </ul>
          <div className="flex gap-3">
            <Facebook className="bg-gray-300 p-2 box-content rounded-full size-4  cursor-pointer hover:text-indigo-500" />
            <Youtube className="bg-gray-300 p-2 box-content rounded-full size-4 cursor-pointer hover:text-indigo-500" />
            <Linkedin className="bg-gray-300 p-2 box-content rounded-full size-4 cursor-pointer hover:text-indigo-500" />
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs">
        © 2025 All Bangla Newspaper. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
