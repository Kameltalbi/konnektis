// src/components/AuthPage.jsx
import React, { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  const switchToLogin = () => setMode("login");
  const switchToSignup = () => setMode("signup");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: appeler votre backend /auth (login/signup) ou NextAuth côté Next.js
    // Exemple: fetch("/api/auth/login", { method:"POST", body: JSON.stringify(form) })
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Section gauche : CTA bleu */}
      <section className="md:w-1/2 bg-blue-600 text-white flex items-center">
        <div className="w-full max-w-lg mx-auto px-8 py-16">
          <div className="mb-8">
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
              Konnektis
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Accélérez votre visibilité sur LinkedIn
          </h1>
          <p className="mt-4 text-blue-100 text-lg">
            Planifiez, amplifiez et analysez vos performances — en toute conformité.
          </p>
          <ul className="mt-8 space-y-3 text-blue-100">
            <li>• Planification et calendrier de contenu</li>
            <li>• Boost ciblé & pods d’engagement</li>
            <li>• Analytics en temps réel & recommandations IA</li>
          </ul>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#form"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              onClick={switchToSignup}
            >
              Commencer gratuitement
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Voir les tarifs
            </a>
          </div>
          <p className="mt-6 text-xs text-blue-100/80">
            Essai gratuit 14 jours • Pas de carte bancaire requise
          </p>
        </div>
      </section>

      {/* Section droite : Formulaire */}
      <section id="form" className="md:w-1/2 flex items-center">
        <div className="w-full max-w-md mx-auto px-8 py-16">
          {/* Onglets */}
          <div className="mb-8 flex gap-2">
            <button
              onClick={switchToLogin}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                mode === "login"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Connexion
            </button>
            <button
              onClick={switchToSignup}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                mode === "signup"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Inscription
            </button>
          </div>

          {/* Bouton OAuth LinkedIn (placeholder) */}
          <a
            href="/api/auth/linkedin" // TODO: remplacer par votre endpoint OAuth
            className="flex items-center justify-center w-full border rounded-lg py-3 hover:bg-gray-50 transition"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.135 1.447-2.135 2.943v5.663H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.366-1.852 3.6 0 4.265 2.37 4.265 5.453v6.29zM5.337 7.433a2.063 2.063 0 11.002-4.126 2.063 2.063 0 01-.002 4.126zM6.98 20.452H3.69V9h3.29v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            Continuer avec LinkedIn
          </a>

          {/* Séparateur */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-3 text-xs uppercase text-gray-400">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre prénom"
                    name="firstName"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                    name="lastName"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="vous@entreprise.com"
                name="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                required
                className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={mode === "signup" ? "Créez un mot de passe" : "Votre mot de passe"}
                name="password"
                minLength={8}
              />
              <p className="text-xs text-gray-500 mt-1">8 caractères minimum</p>
            </div>

            {mode === "signup" && (
              <div className="flex items-start gap-2">
                <input id="tos" type="checkbox" required className="mt-1"/>
                <label htmlFor="tos" className="text-sm text-gray-600">
                  J’accepte les <a href="/terms" className="text-blue-600 hover:underline">Conditions d’utilisation</a> et la{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">Politique de confidentialité</a>.
                </label>
              </div>
            )}

            {mode === "login" && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" /> Se souvenir de moi
                </label>
                <a href="/reset-password" className="text-sm text-blue-600 hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {mode === "login" ? "Se connecter" : "Créer mon compte"}
            </button>
          </form>

          {/* Switch bas */}
          <p className="mt-6 text-sm text-gray-600">
            {mode === "login" ? (
              <>
                Nouveau sur Konnektis ?{" "}
                <button onClick={switchToSignup} className="text-blue-600 hover:underline">
                  Créer un compte
                </button>
              </>
            ) : (
              <>
                Vous avez déjà un compte ?{" "}
                <button onClick={switchToLogin} className="text-blue-600 hover:underline">
                  Se connecter
                </button>
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
}
