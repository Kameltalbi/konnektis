// src/components/AboutPage.jsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Section Hero */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de <span className="text-blue-600">Konnektis</span>
          </h1>
          <p className="text-lg text-gray-700">
            Notre mission est de permettre aux professionnels et entreprises de
            maximiser leur visibilité sur LinkedIn grâce à une plateforme simple,
            puissante et conforme aux meilleures pratiques.
          </p>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/600x400?text=Notre+Histoire"
              alt="Notre histoire"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre histoire</h2>
            <p className="text-gray-600 mb-4">
              Konnektis est née d’un constat simple : beaucoup d’entreprises ont
              du mal à tirer parti de LinkedIn pour atteindre leurs objectifs
              commerciaux. Nous avons donc créé une solution complète, du
              planning de contenu à l’analyse de performances, pour simplifier la
              vie des équipes marketing et dirigeants.
            </p>
            <p className="text-gray-600">
              Aujourd’hui, nous accompagnons des centaines de clients dans leur
              stratégie LinkedIn, en leur offrant des outils clairs, performants
              et sécurisés.
            </p>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Kamel Talbi", role: "CEO & Fondateur" },
              { name: "Sarah Johnson", role: "Directrice Marketing" },
              { name: "Michael Chen", role: "CTO" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    index % 2 === 0 ? "men" : "women"
                  }/${index + 30}.jpg`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos valeurs fondamentales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Nous innovons constamment pour offrir des outils à la pointe
                adaptés aux besoins de nos utilisateurs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Simplicité</h3>
              <p className="text-gray-600">
                Une interface intuitive qui facilite la prise en main, même pour
                les débutants.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Confiance</h3>
              <p className="text-gray-600">
                Sécurité, confidentialité et respect des données de nos clients
                sont notre priorité absolue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Rejoignez la communauté Konnektis
        </h2>
        <p className="text-lg text-blue-100 mb-6">
          Découvrez comment nous pouvons transformer votre stratégie LinkedIn.
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Commencer maintenant
        </a>
      </section>
    </div>
  );
}
