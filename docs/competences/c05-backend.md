# C5. Développer la partie backend d’une interface utilisateur web

- [C5. Développer la partie backend d’une interface utilisateur web](#c5-développer-la-partie-backend-dune-interface-utilisateur-web)
  - [Versions](#versions)
  - [Fonctionnel](#fonctionnel)
  - [Structure](#structure)
  - [POO](#poo)
  - [Sécurité](#sécurité)
  - [Outils, méthodes et docs](#outils-méthodes-et-docs)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Fonctionnel

| Tâches                                        | Statut | Validation |
| --------------------------------------------- | ------ | ---------- |
| Les implementations du code sont fonctionnels | ✅     |[README.md/Résultats](https://github.com/Cynthia-Cyber-Code/NodeJS?tab=readme-ov-file#resultat)|

## Structure

| Tâches       | Statut | Validation |
| ------------ | ------ | ---------- |
| Route        | ✅     |[Routes](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/main/routes)|
| Controller   | ✅     |[Controllers](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/e67b7c575098b3fa0cf0a6773667fcd4d11aecc6/controllers)|
| 🔜 Services | ❌     |            |

## POO

| Tâches                   | Statut | Validation |
| ------------------------ | ------ | ---------- |
| 🔜 Classe               | ❌     |            |
| 🔜 Bonnes pratiques POO | ❌     |            |

## Sécurité

| Tâches              | Statut | Validation |
| ------------------- | ------ | ---------- |
| Authentification    | ✅     |[auth routes](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/auth.route.js), [auth controller](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/controllers/auth.controller.js)|
| Authorisation       | ✅     |[Function Role](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L9), [Exemple AllUsers](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L22)|
| Sign in             | ✅     |[sign in](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L52)|
| Sign up             | ✅     |[sign up](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L14)|
| bcrypt              | ✅     |[bycript Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/package.json#L11), [Salt](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/controllers/auth.controller.js#L26), [Compare](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/controllers/auth.controller.js#L64)|
| jwt                 | ✅     |[JWT Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/package.json#L18), [Token](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L82), [verifyJWT](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/middleware/verifyJWT.js)|
| Mot de passe oublié | 🟠     |[ForgottenPassword](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/f759e2adbb9023ed3eea5f070405250e45b404a8/controllers/auth.controller.js#L89)|

## Outils, méthodes et docs

| Tâches                                                  | Statut | Validation |
| ------------------------------------------------------- | ------ | ---------- |
| POSTMAN                                                 | ✅     |[README.md/ Resultat Postman](https://github.com/Cynthia-Cyber-Code/NodeJS?tab=readme-ov-file#resultat)|
| 🔜 Validation des données (express validator)          | ❌     |            |
| 🔜 Purification des données (JOI)                      | ❌     |            |
| 🔜 Mise en place des logs (morgan et autre winston)    | ❌     |            |
| 🔜 Schema bdd / schema du projet / explication du code | ✅     |[README.md](https://github.com/Cynthia-Cyber-Code/NodeJS?tab=readme-ov-file#)|
| 🔜 5 sources de veille                                 | ❌     |            |
| 🔜 Explication d’un concept                            | ❌     |            |
| 🔜 Dossier type d'une démarche de travail              | ❌     |            |
