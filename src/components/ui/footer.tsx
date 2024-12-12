"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container w-[85%]  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">GAF Travel & Event</h4>
          <p>
            Votre partenaire de confiance pour vos voyages, hôtels, visas, et
            événements en Tunisie. Explorez le monde avec nous.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/qui-sommes-nous" className="hover:underline">
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link href="/voyages" className="hover:underline">
                Voyages
              </Link>
            </li>
            <li>
              <Link href="/hotels" className="hover:underline">
                Hôtels
              </Link>
            </li>
            <li>
              <Link href="/visa" className="hover:underline">
                Visa
              </Link>
            </li>
            <li>
              <Link href="/voyages-daffaires" className="hover:underline">
                VIP
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Avenue Habib Bourguiba, Tunis, Tunisie</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+216 71 352 114</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>contact@gaftravel.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t text-gray-300 border-gray-700 pt-4 text-center">
        <p>© 2024 GAF Travel & Event. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
