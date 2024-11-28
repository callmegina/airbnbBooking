"use client"

import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-850" />
  },
  {
    name: 'Reservations',
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-850" />
  },
  {
    name: 'My Profile',
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-850" />
  }
]
export default function SideNavigation() {

  const pathname = usePathname();
  console.log(pathname)

  return (

    <nav className="border-r border-primary-800">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link className={`py-3 px-5 hover:bg-primary-800 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-850 ${pathname === link.href ? "bg-primary-750" : ""
              }`} href={link.href}>{link.icon}<span>{link.name}</span></Link>
          </li>
        ))}
        <li className="mt-auto">
          Signout
        </li>
      </ul>
    </nav>
  )
}