import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1) Logo + présentation */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-blue-600/90 flex items-center justify-center text-white font-bold">
              K
            </div>
            <span className="text-xl font-semibold text-white">Konnektis</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            Konnektis aide les équipes à <span className="text-gray-200">planifier</span>,
            <span className="text-gray-200"> amplifier</span> et
            <span className="text-gray-200"> analyser</span> leurs performances LinkedIn —
            en toute conformité. Gagnez du temps, augmentez votre portée et pilotez par la donnée.
          </p>
          <div className="mt-5 flex items-center gap-3 text-sm">
            <a href="mailto:contact@konnektis.com" className="hover:text-white">contact@konnektis.com</a>
            <span className="text-gray-600">•</span>
            <a href="tel:+21655053505" className="hover:text-white">+216 55 053 505</a>
          </div>
        </div>

        {/* 2) Navigation */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/features" className="hover:text-white">Fonctionnalités</NavLink></li>
              <li><NavLink to="/pricing" className="hover:text-white">Tarifs</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white">À propos</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/privacy-policy" className="hover:text-white">Politique de confidentialité</NavLink></li>
              <li><NavLink to="/terms-of-service" className="hover:text-white">Conditions d'utilisation</NavLink></li>
              <li><a href="#" className="hover:text-white">Sécurité</a></li>
              <li><a href="#" className="hover:text-white">RGPD</a></li>
            </ul>
          </div>
        </div>

        {/* 3) Coordonnées / Adresse */}
        <div>
          <h4 className="text-white font-semibold mb-4">Coordonnées</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">
              3, Rue Einstein, 2036 La Soukra — Tunisie
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=3%2C+Rue+Einstein%2C+La+Soukra%2C+Tunisie+2036"
                target="_blank" rel="noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Ouvrir dans Google Maps
              </a>
            </li>
            <li className="pt-3">
              <a
                href="https://wa.me/21698704385"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
              >
                {/* Icône WhatsApp simple */}
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.5 3.5A11.6 11.6 0 0 0 3.3 20.7L2 22l1.5-.4A11.6 11.6 0 1 0 20.5 3.5Zm-8.9 17A9.5 9.5 0 1 1 21 11 9.5 9.5 0 0 1 11.6 20.5Z"/>
                  <path d="M16.8 14.1c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.5.1-.6.7-.7.8-.2.1-.4 0a7.8 7.8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.4 0-.4.1-.5a3.2 3.2 0 0 0 .3-.4 1.6 1.6 0 0 0 .2-.4.4.4 0 0 0 0-.4c0-.1-.5-1.2-.7-1.6s-.4-.4-.6-.4h-.6a1 1 0 0 0-.7.4 2.3 2.3 0 0 0-.7 1.7 4 4 0 0 0 .8 2.2 9.3 9.3 0 0 0 3.6 3.5 8.3 8.3 0 0 0 2.6 1 2.2 2.2 0 0 0 1.5-.2 2 2 0 0 0 1-1.2 1.7 1.7 0 0 0 .1-.9c-.1-.1-.2-.1-.3-.2Z"/>
                </svg>
                +216 98 704 385
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Konnektis. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-gray-300">Confidentialité</a>
            <a href="/terms" className="hover:text-gray-300">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
