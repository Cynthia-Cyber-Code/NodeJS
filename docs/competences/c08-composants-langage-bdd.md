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
| Utilisation d'Express Validator                         |   ✅    |[Express Validator Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/package.json#L18), [user validation](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/middleware/validators/user.validation.js), [auth route with express Validator](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/routes/auth.route.js#L5), [use Express Validator in auth controller](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/ae64758e4e6733b56eadc4a489a29b657ff190ef/controllers/auth.controller.js#L14)|
| Intégration de bcrypt pour le hashage des mots de passe |   ✅    |[Hashed Password](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/controllers/auth.controller.js#L27)|
| Sanitisation avec Joi                                   |   ⏳    |[Joi Module](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/23e8a30113e86354ff3cc7ed8b3cb48fb7e2c4f7/package.json#L19), [joi validate](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/23e8a30113e86354ff3cc7ed8b3cb48fb7e2c4f7/routes/auth.route.js#L12), [sign in schema](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/23e8a30113e86354ff3cc7ed8b3cb48fb7e2c4f7/middleware/Schemas/authSchema.js#L11)|
| Accès aux données restreint par rôle                    |   ✅    |[Function Role](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L9), [Exemple AllUsers](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L22)|
| Implémentation du champ updatedAt dans les modèles      |   ✅    |[updatedAt](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/seeders/20230928094833-demo-user.js#L13), [Exemple Screen Table Plus with updatedAt in User](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0b5d7cdae90708c29d3dc4ff8ba694faf896edc5/docs/Screens/updatedAt%20in%20User%20Model%20about%20TablePlus.png)|
| Utilisation de try/catch pour la gestion d'erreurs      |    ⏳     |[Exemple try catch in the project](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/middleware/verifyJWT.js#L14), [Try/Catch](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/f6f352d5dcd9559c56a53153b6be23b9d824a071/controllers/auth.controller.js#L14)|

## Logs

| Tâche                                                    | Validée | Validation |
| -------------------------------------------------------- | :-----: | ---------- |
| Configuration et utilisation des logs (Morgan + Winston) |    ✅    |[Morgan](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/f6f352d5dcd9559c56a53153b6be23b9d824a071/package.json#L19), [Winston](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/f6f352d5dcd9559c56a53153b6be23b9d824a071/package.json#L26), [Use logs](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/f6f352d5dcd9559c56a53153b6be23b9d824a071/app.js#L22), [logs case](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/f6f352d5dcd9559c56a53153b6be23b9d824a071/logs)|

## Tests

| Tâche                                                  | Validée | Validation |
| ------------------------------------------------------ | :-----: | ---------- |
| Développement de tests unitaires pour chaque composant |   ❌    |            |
