"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Seu nome ou título no canto esquerdo */}
        <div className="text-xl font-bold cursor-default select-none">
          Ana Paula Barros
        </div>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.29A1 1 0 105.7 5.71L10.59 10.6 5.7 15.49a1 1 0 101.42 1.42L12 12.83l4.88 4.88a1 1 0 001.42-1.42L13.41 10.6l4.89-4.89z"
              />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu desktop e mobile */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8`}
        >
          {["home", "sobre", "skills", "projetos", "conecte-se-comigo"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)} // Fecha menu ao clicar
                className="block px-3 py-2 rounded-md text-white cursor-pointer hover:text-blue-400 hover:scale-110 transition transform duration-200"
              >
                {section === "conecte-se-comigo"
                  ? "Contato"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
