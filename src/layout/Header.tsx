import React from 'react'

function Header() {
  return (
      <header className="py-4 pl-10 pr-24 font-inter-bold flex justify-between items-center">
          <div>
              <h1 className="text-2xl">DeluxeFleet</h1>
          </div>
          <div>
              <ul className="flex gap-14 text-base">
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      </header>
  )
}

export default Header