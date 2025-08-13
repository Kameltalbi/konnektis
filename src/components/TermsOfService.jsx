import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Dernière mise à jour : 13 Août 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptation des CGU</h2>
          <p className="mb-4">
            L'utilisation des services de Konnektis SARL (« Konnektis », « nous », « notre ») est soumise à l'acceptation préalable et au respect intégral des présentes Conditions Générales d'Utilisation (CGU).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description du service</h2>
          <p className="mb-4">
            Konnektis propose une plateforme de gestion et d'optimisation de présence sur LinkedIn, comprenant des outils de planification, d'analyse et d'automatisation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Compte utilisateur</h2>
          <p className="mb-2">3.1. Pour accéder à nos services, vous devez créer un compte en fournissant des informations exactes et à jour.</p>
          <p className="mb-2">3.2. Vous êtes responsable de la confidentialité de vos identifiants de connexion.</p>
          <p>3.3. Vous devez être âgé d'au moins 18 ans pour utiliser nos services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Engagements de l'utilisateur</h2>
          <p>En utilisant nos services, vous vous engagez à :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 mt-2">
            <li>Ne pas violer les droits de propriété intellectuelle</li>
            <li>Ne pas utiliser le service à des fins illégales ou frauduleuses</li>
            <li>Respecter les conditions d'utilisation de LinkedIn</li>
            <li>Ne pas perturber le bon fonctionnement du service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Propriété intellectuelle</h2>
          <p className="mb-4">
            Tous les éléments composant le service (logiciels, textes, images, etc.) sont la propriété exclusive de Konnektis ou de ses concédants de licence.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Tarifs et paiement</h2>
          <p className="mb-2">6.1. Les prix sont indiqués en dinars tunisiens (TND) toutes taxes comprises.</p>
          <p className="mb-2">6.2. Le paiement est dû à la souscription et renouvelable selon la période choisie.</p>
          <p>6.3. Tout remboursement est soumis à nos conditions de remboursement disponibles sur demande.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Résiliation</h2>
          <p className="mb-4">
            Vous pouvez résilier votre compte à tout moment. Konnektis se réserve le droit de suspendre ou résilier tout compte en cas de violation des présentes CGU.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Responsabilité</h2>
          <p className="mb-2">8.1. Konnektis ne pourra être tenu pour responsable des dommages indirects résultant de l'utilisation du service.</p>
          <p>8.2. Konnektis décline toute responsabilité concernant l'utilisation qui pourrait être faite de LinkedIn par l'utilisateur.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Protection des données</h2>
          <p className="mb-4">
            Le traitement des données personnelles est régi par notre Politique de Confidentialité et est conforme à la législation tunisienne sur la protection des données personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Loi applicable et juridiction compétente</h2>
          <p className="mb-2">10.1. Les présentes CGU sont régies par le droit tunisien.</p>
          <p>10.2. En cas de litige, les tribunaux tunisiens seront seuls compétents.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Modifications des CGU</h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication sur notre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
          <p>Pour toute question concernant ces CGU, veuillez nous contacter :</p>
          <address className="not-italic mt-2">
            Konnektis SARL<br />
            [Adresse complète en Tunisie]<br />
            Email : <a href="mailto:contact@konnektis.tn" className="text-blue-600 hover:underline">contact@konnektis.tn</a><br />
            Téléphone : [Numéro de téléphone]
          </address>
        </section>
      </div>
    </div>
  );
}
