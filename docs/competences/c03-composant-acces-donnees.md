# C3. Développer des composants d’accès aux données

- [C3. Développer des composants d’accès aux données](#c3-développer-des-composants-daccès-aux-données)
  - [Versions](#versions)
  - [Routes, modeles, contrôleurs et services](#routes-modeles-contrôleurs-et-services)
  - [Sécurité](#sécurité)
  - [Validation des données](#validation-des-données)
  - [Base de données](#base-de-données)
  - [Tests](#tests)
  - [Documentation API](#documentation-api)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Routes, modeles, contrôleurs et services

| Tâche                                                           | Validée | Lien |
| --------------------------------------------------------------- | ------- | ---- |
| Création des dossiers et fichiers Routes (User, Room, Spot...)  | ✅      | [Routes](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/main/routes)     |
| Création des dossiers et fichiers Modèles (User, Room, Spot...) | ✅      | [Models](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/cfd3fbf9e7c28ee4d87051abdec347a8f319fa41/models)   |
| Mise en place des contrôleurs (User, Room, Spot...)             | ✅      | [Controllers](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/e67b7c575098b3fa0cf0a6773667fcd4d11aecc6/controllers)    |
| 🔜 Implémenter les services                                    | ❌       |      |

## Sécurité

| Tâche                                                      | Validée | Lien |
| ---------------------------------------------------------- | ------- | ---- |
| Sécurité et Authentification                               | ✅      |[sign up](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L14), [sign in](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L52)|
| Utiliser bcrypt pour le hashage des mots de passe          | ✅      |[Password](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L27) |
| Mettre en place l'authentification avec JWT (jsonwebtoken) | ✅      |[JWT Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/package.json#L18), [Token](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/controllers/auth.controller.js#L82), [verifyJWT](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0226ade2c7bb5bb45c5a5096247df377e61d1b25/middleware/verifyJWT.js)|

## Validation des données

| Tâche                                                           | Validée | Lien |
| --------------------------------------------------------------- | ------- | ---- |
| 🔜 Intégrer express-validator pour la validation des données   | ❌      |      |
| 🔜 Nettoyer les données entrantes pour prévenir les injections | ❌      |      |
| Établir une nomenclature cohérente pour le code                 | ✅      |      |
| Commenter et expliquer les segments de code complexes           | ✅      |      |

## Base de données

| Tâche                                                | Validée | Lien |
| ---------------------------------------------------- | ------- | ---- |
| 🔜 Concevoir le schéma de base de données           | ❌      |      |
| Créer les tables et relations conformément au schéma | ❌      |      |

## Tests

| Tâche                                                                   | Validée | Lien |
| ----------------------------------------------------------------------- | ------- | ---- |
| 🔜 Définir une matrice de test pour couvrir toutes les fonctionnalités | ❌      |      |
| 🔜 Implémenter les tests unitaires et d'intégration                    | 🟠      |[tests case]()|

## Documentation API

| Tâche                                               | Validée | Lien |
| --------------------------------------------------- | ------- | ---- |
| 🔜 Préparer la documentation de l'API avec Swagger | ❌      |      |
