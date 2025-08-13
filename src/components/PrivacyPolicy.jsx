import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-6">Dernière mise à jour : 13 Août 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Konnektis (« nous », « notre », « nos ») s'engage à protéger vos données personnelles conformément à la législation tunisienne en vigueur, notamment la Loi n°2004-63 du 27 juillet 2004 relative à la protection des données à caractère personnel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Données collectées</h2>
          <p className="mb-2">Nous collectons :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Informations d'identification (nom, prénom, email)</li>
            <li>Données de connexion (adresse IP, logs)</li>
            <li>Données de navigation et d'utilisation</li>
            <li>Données de paiement (traitement sécurisé par un prestataire agréé)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Fournir et maintenir nos services</li>
            <li>Améliorer l'expérience utilisateur</li>
            <li>Communiquer avec vous</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Base légale du traitement</h2>
          <p>Conformément à la loi tunisienne, le traitement de vos données est basé sur :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Votre consentement explicite</li>
            <li>L'exécution d'un contrat</li>
            <li>Le respect d'une obligation légale</li>
            <li>Notre intérêt légitime</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Conservation des données</h2>
          <p>Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la loi tunisienne.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Vos droits</h2>
          <p>Conformément à la loi tunisienne, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p>Pour exercer ces droits, veuillez nous contacter à l'adresse : <a href="mailto:contact@konnektis.tn" className="text-blue-600 hover:underline">contact@konnektis.tn</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Sécurité</h2>
          <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Transfert de données</h2>
          <p>Vos données peuvent être transférées et traitées dans des pays autres que la Tunisie, avec des garanties appropriées conformément à la loi tunisienne.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
          <p>Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications prendront effet dès leur publication sur notre site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité, veuillez nous contacter :</p>
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
