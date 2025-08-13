// src/components/ContactPage.jsx
import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contactez <span className="text-blue-600">Konnektis</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Une question, un besoin spécifique, une démo ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Coordonnées */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Adresse */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              {/* Map Pin Icon */}
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"/>
                <circle cx="12" cy="11" r="2" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
            <p className="mt-2 text-gray-600">
              3, Rue Einstein<br/>2036 La Soukra, Tunisie
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=3%2C+Rue+Einstein%2C+La+Soukra%2C+Tunisie+2036"
              target="_blank" rel="noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Téléphone / WhatsApp */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              {/* Phone Icon */}
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h2l2 4-2 2a12 12 0 006 6l2-2 4 2v2a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Téléphone & WhatsApp</h3>
            <div className="mt-2 space-y-1">
              <a href="tel:+21655053505" className="text-gray-700 hover:text-blue-600">+216 55 053 505</a>
              <div className="text-gray-400">—</div>
              <a href="https://wa.me/21698704385" target="_blank" rel="noreferrer"
                 className="text-gray-700 hover:text-blue-600">
                WhatsApp : +216 98 704 385
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              {/* Mail Icon */}
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16v12H4z" />
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <a href="mailto:contact@konnektis.com" className="mt-2 block text-gray-700 hover:text-blue-600">
              contact@konnektis.com
            </a>
          </div>
        </div>
      </section>

      {/* Carte Google Maps */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <div className="rounded-xl overflow-hidden shadow-sm border">
          <iframe
            title="Konnektis - La Soukra"
            className="w-full h-[350px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=3,+Rue+Einstein,+La+Soukra,+Tunisie&output=embed"
          />
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Écrivez-nous</h2>
            <p className="mt-3 text-gray-600">
              Laissez-nous un message — nous répondons sous 24h ouvrées.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="vous@entreprise.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone (optionnel)</label>
                  <input
                    type="tel"
                    className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+216 …"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Sujet</label>
                <input
                  type="text"
                  className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sujet de votre demande"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="5"
                  className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Expliquez-nous votre besoin…"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Envoyer le message
              </button>
              <p className="text-xs text-gray-500 mt-2">
                En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>

          {/* Encadré infos pratiques */}
          <div className="bg-gray-50 rounded-xl p-6 border">
            <h3 className="text-lg font-semibold text-gray-900">Infos pratiques</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><span className="font-medium">Adresse :</span> 3, Rue Einstein, 2036 La Soukra, Tunisie</li>
              <li><span className="font-medium">Email :</span> <a className="text-blue-600 hover:underline" href="mailto:contact@konnektis.com">contact@konnektis.com</a></li>
              <li><span className="font-medium">Téléphone :</span> <a className="text-blue-600 hover:underline" href="tel:+21655053505">+216 55 053 505</a></li>
              <li><span className="font-medium">WhatsApp :</span> <a className="text-blue-600 hover:underline" href="https://wa.me/21698704385" target="_blank" rel="noreferrer">+216 98 704 385</a></li>
              <li><span className="font-medium">Horaires :</span> Lun–Ven 9:00–18:00 (Tunis)</li>
            </ul>
            <div className="mt-6 p-4 bg-white rounded-lg border">
              <p className="text-sm text-gray-600">
                Besoin d’une démo ? <a href="/pricing" className="text-blue-600 hover:underline">Choisissez un plan</a> et nous vous guidons pas à pas.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
