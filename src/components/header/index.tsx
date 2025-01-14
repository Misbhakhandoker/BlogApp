"use client";

import { menuItems } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import Button from "../button";
import ThemeToggler from "../theme";
import {signIn, signOut, useSession} from "next-auth/react"
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const {data:session} = useSession()
  console.log("session :", session);
  

  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <div>
      <header
        className={`top-0 left-0 z-40 flex w-full items-center bg-transparent py-4`}
      >
        <div className="relative mx-4 flex items-center justify-center w-full">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              className={`text-[30px] font-extrabold cursor-pointer block w-full `}
              href={"/"}
            >
              NextBlog
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={handleNavbarToggle}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[7px] rotate-45" : ""}
                        `}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "opacity-0" : ""}
                        `}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarOpen ? "top-[-8px] rotate-45" : ""}
                        `}
                />
              </button>
              <nav
              id="navbarCollapse"
              className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 
            px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

            ${
              navbarOpen
                ? "visible top-full opacity-100"
                : "invisible top-[120%] opacity-0"
            }
            `}
              >
                <ul className="block lg:flex lg:space-x-12">
                    {menuItems.map(item =>
                        <li className="group relative" key={item.id}>
                            <Link href={item.path} className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:inline-flex lg:py-6 lg:py-0`} >{item.label}</Link>
                        </li>
                    )}
                </ul>
              </nav>
            </div>
            <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0">
               {session !== null ?  <Button onClick={() => signIn()} text="Create" />: null } 
                <Button onClick={() => session !== null ? signOut() : signIn('github')} text={session !== null ? "LogOut" : "LogIn"} />
            </div>
            <div className="flex gap-3 items-center">
            <ThemeToggler />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
