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
      if (mobileNavRef.current) {
        gsap.fromTo(
          mobileNavRef.current,
          { x: "-100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        );
      }
    },
    {
      dependencies: [isOpen], // Re-run when isOpen changes
      scope: mobileNavRef,
      // Reset position when closing (for clean reverse)
      revertOnUpdate: true,
    }
  );
  return (
    <>
      <div className="bg-blue-900  px-4 sm:bg-transparent flex flex-col sm:flex-row justify-between sm:items-center py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Menu className="sm:hidden text-white cursor-pointer" />
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
