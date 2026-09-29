# Guide — Protéger votre base contre les clones (App Check)

## D'abord, une chose importante à comprendre

La clé `apiKey` dans `firebase-config.js` **n'est pas un mot de passe secret** — c'est une idée reçue très répandue. Google le confirme explicitement : cette clé identifie simplement votre projet Firebase auprès de Google, un peu comme un numéro de compte visible publiquement. Elle ne donne, à elle seule, aucun accès à vos données.

Ce qui protège réellement votre base de données, ce sont :
1. **Les règles de sécurité** (déjà en place depuis le guide précédent) — qui définissent qui peut lire, créer, modifier.
2. **App Check** — un mécanisme qui vérifie que chaque requête vient bien de votre vrai site, et pas d'un clone, d'un script automatisé, ou d'un usage détourné.

Ce guide active cette seconde protection.

---

## Étape 1 — Créer une clé reCAPTCHA v3 (gratuite)

1. Allez sur [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin/create)
2. Connectez-vous avec le même compte Google que Firebase
3. Remplissez le formulaire :
   - **Label** : `Engage221`
   - **Type de reCAPTCHA** : choisissez **reCAPTCHA v3**
   - **Domaines** : ajoutez `link4dev.github.io`
4. Acceptez les conditions et cliquez sur **Envoyer** (Submit)
5. Vous obtenez deux clés : une **clé de site** (site key) et une **clé secrète** (secret key). Copiez la **clé de site** — c'est la seule dont on a besoin ici.

---

## Étape 2 — Activer App Check dans Firebase

1. Dans la console Firebase, menu de gauche : cherchez **App Check** (souvent sous **Build** ou dans une section **Réglages du projet**)
2. Cliquez sur l'onglet **Apps**, puis sur votre application Web
3. Choisissez le fournisseur **reCAPTCHA v3**
4. Collez la **clé de site** obtenue à l'étape 1, et la **clé secrète** dans le champ demandé
5. Enregistrez

---

## Étape 3 — Ajouter la clé dans le site

Ouvrez `firebase-config.js` et remplacez :

```js
const RECAPTCHA_SITE_KEY = "VOTRE_CLE_RECAPTCHA_V3";
```

par votre vraie clé de site, par exemple :

```js
const RECAPTCHA_SITE_KEY = "6Lc_exemple_de_cle_v3";
```

Uploadez le fichier mis à jour sur GitHub.

---

## Étape 4 — Forcer l'application de la protection (optionnel mais recommandé)

Une fois que vous avez vérifié que tout fonctionne toujours normalement sur le site (pendant quelques jours, App Check fonctionne en mode "surveillance" sans bloquer) :

1. Dans la console Firebase > **App Check** > onglet **APIs**
2. À côté de **Realtime Database**, cliquez sur **Enforce** (Appliquer/Forcer)

⚠️ À partir de ce moment, **seules les requêtes passant par votre vrai site** (avec un App Check valide) pourront lire ou écrire dans la base. Un clone hébergé ailleurs, même avec vos mêmes clés Firebase copiées, sera bloqué.

---

## En résumé

| Protection | Rôle |
|---|---|
| Règles de sécurité (déjà faites) | Définissent qui a le droit de faire quoi |
| App Check (ce guide) | Vérifie que la requête vient bien de votre site |
| Clé API Firebase | N'est pas un secret — inutile de la cacher |

Besoin d'aide sur une étape ? On peut la refaire ensemble pas à pas.
