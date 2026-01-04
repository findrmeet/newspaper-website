"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";
import { Menu } from "lucide-react";
import Image from "next/image";
import NavMenuMobile from "./NavMenuMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen((prev) => !prev);
  useGSAP(
    () => {
      // Only run if the element exists
      if (!mobileNavRef.current) return;

      // When opening (isOpen === true): animate FROM off-screen TO visible
      // When closing (isOpen === false): animate FROM visible TO off-screen (reverse)
      gsap.to(mobileNavRef.current, {
        x: isOpen ? "0%" : "-100%",
        opacity: isOpen ? 1 : 0,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    {
      dependencies: [isOpen], // Re-run every time isOpen changes
      scope: mobileNavRef,
    }
  );
  return (
    <>
      <div className="bg-blue-900  px-4 sm:bg-transparent flex flex-col sm:flex-row justify-between sm:items-center py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Menu
              className="sm:hidden text-white cursor-pointer"
              onClick={toggleMenu}
            />
            <Logo />
          </div>
          <Image
            className="sm:hidden cursor-pointer"
            src={"/avater.svg"}
            width={34}
            height={34}
            alt="avater"
          />
        </div>
        <div className="flex items-center gap-8 sm:w-min w-full ">
          <SearchForm />
          <NavMenu />
          <div className="hidden sm:block ">
            <LoginBtn />
          </div>
        </div>
      </div>

      <NavMenuMobile toggleMenu={toggleMenu} ref={mobileNavRef} />
    </>
  );
};

export default Navbar;
