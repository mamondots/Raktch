"use client";
import Image from "next/image";
import Link from "next/link";
// import logo from "../assets/rekticLogo.png";
import { LuMenu } from "react-icons/lu";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:px-28 md:px-20 sm:px-18 px-12 py-6">
      <div className="flex justify-between items-center gap-8">
        <div>
          <Image
            src="https://i.ibb.co.com/qg0FYBt/rektic-Logo.png"
            alt="logo"
            width="30"
            height="30"
          ></Image>
        </div>

        <div className="lg:flex hidden justify-center items-center gap-8">
          <Link href={""}>Home</Link>
          <Link href={""}>Tours</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Contact Us</Link>
          <div>
            <Link
              href={""}
              className="px-6 py-3 bg-[#4DA528] text-[#fff] rounded"
            >
              Login Now
            </Link>
          </div>
        </div>

        <div className="lg:hidden block">
          <p
            onClick={() => setIsOpen(true)}
            className="text-xl p-1 border border-[#4ea72596] hover:bg-[#4ea72596] hover:text-[#fff] cursor-pointer duration-300"
          >
            <LuMenu />
          </p>
        </div>
      </div>

      {/* for mobile device */}
      <div
        className={`lg:hidden fixed duration-300 z-[999] top-0 left-0 bg-[#a5a6a344] w-full h-[100vh] ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="lg:w-1/3 md:w-2/3 sm:w-2/3 w-full bg-[#262626] py-6 lg:px-28 md:px-20 sm:px-18 px-12 h-screen">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  src="https://i.ibb.co.com/M9kYJRs/rektic2.png"
                  alt="logo"
                  width="30"
                  height="30"
                ></Image>
              </div>
              <div className="lg:hidden block">
                <p
                  onClick={() => setIsOpen(false)}
                  className="text-xl p-1 border border-[#fff] text-[#fff] hover:bg-[#fff] hover:text-[#262626] cursor-pointer duration-300"
                >
                  <HiOutlineXMark />
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 text-[#fff]">
              <Link href={""}>Home</Link>
              <Link href={""}>Tours</Link>
              <Link href={""}>About Us</Link>
              <Link href={""}>Contact Us</Link>
              <div>
                <Link
                  href={""}
                  className="px-6 py-3 bg-[#4DA528] text-[#fff] rounded"
                >
                  Login Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
