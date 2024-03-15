# C11. Développer des composants métier

- [C11. Développer des composants métier](#c11-développer-des-composants-métier)
  - [Versions](#versions)
  - [Classes et Bonnes Pratiques Objet](#classes-et-bonnes-pratiques-objet)
  - [Modèles](#modèles)
  - [Validation et Sanitisation des Données](#validation-et-sanitisation-des-données)
  - [Diagrammes](#diagrammes)
  - [Tests Unitaires](#tests-unitaires)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Classes et Bonnes Pratiques Objet

| Tâche                                         | Validée | Validation |
| --------------------------------------------- | :-----: | ---------- |
| 🔜 Création des classes                      |   ❌    |            |
| 🔜 Application des principes de POO          |   ❌    |            |
| 🔜 Nommage cohérent et explicite des classes |   ❌    |            |

## Modèles

| Tâche                                | Validée | Validation |
| ------------------------------------ | :-----: | ---------- |
| Création des modèles de données      |   ✅    |[Models](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/70ba3ef0f0994c46ecb428888e0dc23d8be8f3d5/models)|
| Implémentation du champ updatedAt    |   ✅    |[updatedAt](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/seeders/20230928094833-demo-user.js#L13), [Exemple Screen Table Plus with updatedAt in User](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0b5d7cdae90708c29d3dc4ff8ba694faf896edc5/docs/Screens/updatedAt%20in%20User%20Model%20about%20TablePlus.png)|
| Accès aux données restreint par rôle |   ✅    |[Function Role](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L9), [Exemple AllUsers](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L22)|

## Validation et Sanitisation des Données

| Tâche                                             | Validée | Validation |
| ------------------------------------------------- | :-----: | ---------- |
| 🔜 Validation des entrées avec Express Validator |   ⏳    |[Express Validator Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/package.json#L18), [user validation](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/middleware/validators/user.validation.js), [auth route with express Validator](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/routes/auth.route.js#L5), [use Express Validator in auth controller](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/controllers/auth.controller.js#L14)|
| 🔜 Sanitisation des données avec Joi             |   ⏳    |[Joi Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/23e8a30113e86354ff3cc7ed8b3cb48fb7e2c4f7/package.json#L19), [joi validate](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/23e8a30113e86354ff3cc7ed8b3cb48fb7e2c4f7/routes/auth.route.js#L12), [sign in schema](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/23e8a30113e86354ff3cc7ed8b3cb48fb7e2c4f7/middleware/Schemas/authSchema.js#L11)|

## Diagrammes

| Tâche                                 | Validée | Validation |
| ------------------------------------- | :-----: | ---------- |
| Création d'un diagramme de classes    |   ❌    |            |
| Création d'un diagramme de composants |   ❌    |            |

## Tests Unitaires

| Tâche                                                  | Validée | Validation |
| ------------------------------------------------------ | :-----: | ---------- |
| Développement de tests unitaires pour chaque composant |   ❌    |            |
