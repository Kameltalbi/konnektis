// src/components/FeaturesPage.jsx
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  {
    title: "Planification intelligente de posts",
    description:
      "Publiez vos contenus aux moments où votre audience est la plus active grâce à notre algorithme d'analyse de performance.",
  },
  {
    title: "Curation automatisée de contenu",
    description:
      "Recevez chaque jour une sélection de publications pertinentes à commenter ou liker, filtrées par notre IA.",
  },
  {
    title: "Génération de commentaires par IA",
    description:
      "L’IA rédige des réponses contextualisées que vous validez avant publication, pour des interactions toujours pertinentes.",
  },
  {
    title: "Engagement Pods intelligents",
    description:
      "Rejoignez des groupes d’engagement ciblés composés de professionnels de votre secteur pour maximiser votre portée organique.",
  },
  {
    title: "Campagnes de messages personnalisés",
    description:
      "Envoyez automatiquement invitations et relances personnalisées tout en respectant les quotas LinkedIn.",
  },
  {
    title: "Dashboard KPI en temps réel",
    description:
      "Suivez vos indicateurs clés (impressions, engagement, abonnés) via un tableau clair et visuel.",
  },
  {
    title: "Analyse concurrentielle",
    description:
      "Comparez vos performances avec celles d’autres acteurs de votre secteur grâce aux données publiques et API autorisées.",
  },
  {
    title: "Suggestions de hashtags optimisés",
    description:
      "Optimisez la portée de vos posts avec des hashtags testés et validés par nos analyses.",
  },
  {
    title: "Détection d’opportunités d’interaction",
    description:
      "Recevez des alertes dès qu’un prospect ou influenceur clé publie ou commente.",
  },
  {
    title: "Score d’impact de publication",
    description:
      "Chaque post reçoit un score basé sur sa portée, son engagement et la qualité de l’audience touchée.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Les fonctionnalités de <span className="text-yellow-300">Konnektis</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-blue-100">
          Maximisez votre impact sur LinkedIn grâce à nos outils intelligents,
          conçus pour économiser votre temps et booster vos résultats.
        </p>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Prêt à booster votre visibilité sur LinkedIn ?
        </h2>
        <p className="text-gray-600 mb-6">
          Essayez Konnektis gratuitement pendant 14 jours — aucune carte bancaire requise.
        </p>
        <a
          href="/auth"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Commencer gratuitement
        </a>
      </section>
    </div>
  );
}
