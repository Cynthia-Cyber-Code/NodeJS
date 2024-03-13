# C8. Développer des composants dans le langage d’une base de données

- [C8. Développer des composants dans le langage d’une base de données](#c8-développer-des-composants-dans-le-langage-dune-base-de-données)
  - [Versions](#versions)
  - [Sécuritée](#sécuritée)
  - [Logs](#logs)
  - [Tests](#tests)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Sécuritée

| Tâche                                                   | Validée | Validation |
| ------------------------------------------------------- | :-----: | ---------- |
| Utilisation d'Express Validator                         |   ❌    |            |
| Intégration de bcrypt pour le hashage des mots de passe |   ✅    |[Hashed Password](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/controllers/auth.controller.js#L27)|
| Sanitisation avec Joi                                   |   ❌    |            |
| Accès aux données restreint par rôle                    |   ✅    |[Function Role](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L9), [Exemple AllUsers](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L22)|
| Implémentation du champ updatedAt dans les modèles      |   ✅    |[updatedAt](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/seeders/20230928094833-demo-user.js#L13), [Exemple Screen Table Plus with updatedAt in User](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0b5d7cdae90708c29d3dc4ff8ba694faf896edc5/docs/Screens/updatedAt%20in%20User%20Model%20about%20TablePlus.png)|
| Utilisation de try/catch pour la gestion d'erreurs      |   🟠     |[Exemple try catch in the project](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/middleware/verifyJWT.js#L14), [Then/Catch](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/controllers/user.controller.js#L70)|

## Logs

| Tâche                                                    | Validée | Validation |
| -------------------------------------------------------- | :-----: | ---------- |
| Configuration et utilisation des logs (Morgan + Winston) |   ❌    |            |

## Tests

| Tâche                                                  | Validée | Validation |
| ------------------------------------------------------ | :-----: | ---------- |
| Développement de tests unitaires pour chaque composant |   ❌    |            |
