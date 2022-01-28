Première version P7 avec fichiers P6

Choix : commencer par frontend

choix framework
- react

But : créer un réseau social interne pour les employés de Groupomania. 

Cet outil doit faciliter les interactions entre collègues. 

Les fonctionnalités à intégrer :
- 9GAG : que les employés partagent et commentent les gifs
- Reddit : que les employés écrivent et/ou partagent des articles avec leurs collègues sur des sujets qui les intéressent

Contraintes :
- langage SQL pour le stockage de données.
- s'assurer que l'user puisse requêter les données requises depuis SQL et puisse soumettre ces changements à la BDD SQL.
- données de connexion doivent être sécurisées

La web app doit pouvoir se connecter et se déconnecter
La session du user persiste pendant qu'il est connecté

Projet en js
Respect standards WCAG

//conseils Marie
- vue.js plus facile que react
- MySQL rester juste sur les notions de base
- Reprendre le back du P6 mais remplacer les mentions de mongoDB
- Les entités doivent être séparées avec différents numéros de port
- Le backend appelle la BDD
- Le frontend n'appelle pas la BDD
- Le back exécuté sur serveur
- Le front exécuté sur navigateur
- Pour vue.js choisir plutôt la version 2
- Commencer comme on veut soit par back, soit par front
- Ressources/doc à chercher