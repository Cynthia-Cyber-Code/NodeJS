# C7. Mettre en place une base de données

- [C7. Mettre en place une base de données](#c7-mettre-en-place-une-base-de-données)
  - [Versions](#versions)
  - [Mise en place](#mise-en-place)
  - [Convention](#convention)
  - [Accès](#accès)
  - [Logs](#logs)

## Versions

- **Version** : 1.0
- **Date** : 13/3/2024

## Mise en place

| Tâche                                                | Validée | Validation |
| ---------------------------------------------------- | :-----: | ---------- |
| Setup indiqué dans la documentation                  |   ❌    |            |
| Fichier et dossier modèle                            |   ⏳    |[Modèles](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/70ba3ef0f0994c46ecb428888e0dc23d8be8f3d5/models), [Exemple User Model](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/models/user.model.js)|
| Génération de seed automatisée                       |   ⏳    |[seeders](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/0033700a12c50bddef73d765e9df0ab0ff790c23/seeders),[Screen Launch seed datatbase]()|
| Implémentation de différence base (dev/test/preprod) |   ⏳    |[import config Database](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/db.js#L6)|
| Fichier de config + .env éventuellement              |   ⏳    |[gitignore](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/0033700a12c50bddef73d765e9df0ab0ff790c23/.gitignore#L2), [Screen placement config.js dans larborescence](), [Screen placement .env]()|

## Convention

| Tâche               | Validée | Validation |
| ------------------- | :-----: | ---------- |
| Nommage des modèles |   ⏳    |[Modèles](https://github.com/Cynthia-Cyber-Code/NodeJS/tree/70ba3ef0f0994c46ecb428888e0dc23d8be8f3d5/models)|

## Accès

| Tâche                                                 | Validée | Validation |
| ----------------------------------------------------- | :-----: | ---------- |
| Authentification                                      |    ⏳    |[auth routes](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/auth.route.js), [auth controller](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/controllers/auth.controller.js)|
| Autorisation d’accès                                  |   ⏳   |[Function Role](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L9)|
| Assurer le Contrôle d'Accès Basé sur les Rôles (RBAC) |   ⏳    |[Exemple AllUsers](https://github.com/Cynthia-Cyber-Code/NodeJS/blob/b6d7113d9c4b6d4a97853232cbd793d5b06575f5/routes/user.route.js#L22)|

## Logs

| Tâche                                  | Validée | Validation |
| -------------------------------------- | :-----: | ---------- |
| - LogsUtilisation de Morgan et Winston |   ❌    |            |
