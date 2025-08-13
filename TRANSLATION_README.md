# 🌍 Système de Traduction Konnektis

Ce projet utilise **react-i18next** pour gérer les traductions français/anglais.

## 📦 Dépendances Installées

```bash
npm install react-i18next i18next i18next-browser-languagedetector
```

## 🗂️ Structure des Fichiers

```
src/
├── i18n.js                    # Configuration principale i18n
├── locales/
│   ├── fr.json               # Traductions françaises
│   └── en.json               # Traductions anglaises
└── components/
    ├── LanguageSwitcher.jsx  # Composant de changement de langue
    └── Header.jsx            # Header avec traductions
```

## 🚀 Utilisation

### 1. Dans un Composant React

```jsx
import { useTranslation } from 'react-i18next';

const MonComposant = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
};
```

### 2. Changer de Langue

```jsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <button onClick={() => changeLanguage('fr')}>FR</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};
```

## 🔧 Configuration

### Fichier `src/i18n.js`

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation: enTranslations },
  fr: { translation: frTranslations }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',        // Langue par défaut
    debug: true,              // Mode debug (désactiver en production)
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });
```

### Import dans `main.jsx`

```javascript
import './i18n';  // Doit être importé avant App
```

## 📝 Ajouter de Nouvelles Traductions

### 1. Dans `fr.json`

```json
{
  "nouvelleSection": {
    "titre": "Mon Titre en Français",
    "description": "Ma description en français"
  }
}
```

### 2. Dans `en.json`

```json
{
  "nouvelleSection": {
    "titre": "My Title in English",
    "description": "My description in English"
  }
}
```

### 3. Utilisation dans le Composant

```jsx
<h2>{t('nouvelleSection.titre')}</h2>
<p>{t('nouvelleSection.description')}</p>
```

## 🌟 Fonctionnalités

- ✅ **Détection automatique** de la langue du navigateur
- ✅ **Persistance** de la langue choisie (localStorage)
- ✅ **Fallback** vers le français si la langue n'est pas disponible
- ✅ **Changement dynamique** de langue sans rechargement
- ✅ **Support complet** français/anglais
- ✅ **Interface utilisateur** avec boutons FR/EN

## 🎯 Bonnes Pratiques

1. **Organisez** les traductions par sections logiques
2. **Utilisez des clés descriptives** (ex: `hero.title` au lieu de `title`)
3. **Traduisez tout le contenu** visible par l'utilisateur
4. **Testez** les deux langues régulièrement
5. **Gardez** les fichiers de traduction synchronisés

## 🔍 Débogage

En mode développement, activez `debug: true` dans `i18n.js` pour voir :
- La langue détectée
- Les clés manquantes
- Les changements de langue

## 📱 Responsive

Le sélecteur de langue s'adapte automatiquement aux écrans mobiles et est intégré dans le Header.

---

**Note** : Ce système est maintenant entièrement fonctionnel ! Vous pouvez changer de langue en cliquant sur les boutons FR/EN dans le Header. 🎉


