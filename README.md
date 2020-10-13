# TDD-lab

## installation des dépendances
Installation de mocha

`npm install mocha --global`

Installation des dépendances d'éxécution et de développement

`npm ci`

Commande pour lancer les tests mocha

`npm run test`

ou

`npm test`

Commande pour lancer le serveur

`npm start`

Vous pouvez alors récupérer un résultat en appelant

`http://localhost:3000/api/words/count?text=my%20text%20with%20words`

## Exercice 1 :

Corrigez les erreurs présentes dans le code et vérifiez que vous obtenez des tests unitaires valides et le bon résultat pour la phrase : "Testez sans douter"

## Exercice 2 :

Augmentez la fonctionnalité en comptant les mots dans ces citations :
 - "Tester c'est douter, corriger c'est abdiquer"
 - "Rien n'est codé par hasard"

Nous allons utiliser la méthode TDD  :
1. Commencez par mettre en place les tests unitaires dans un premier temps. Le code actuel ne permet pas de gérer ces cas là, il faut le faire évoluer.
2. Faites la modification de code pour prendre en compte ces citations. Le code écrit répond au besoin. Les tests unitaire sont tous valides.
3. Le code n'est pas dans un format synthétique et facilement maintenable, on le refactorise. Le code écrit répond au besoin et est lisible et maintenable. Les tests unitaire sont tous valides.

## Exercice 3 :

Augmentez encore la fonctionnalité en comptant les mots dans ces citations :
 - "Tester c'est douter, corriger c'est abdiquer !"
 - "Dans les phrases à ne jamais dire, nous trouvons par exemple : 'Cela marche sur mon poste.'."

**Rejouez la méthode TDD**

## Exercice 4 :

1. Ouvrez le fichier Package.json et trouvez comment utiliser différents _reporter_ mocha.
2. Utilisez aussi la commande permettant de générer un raport de couverture de code par les tests unitaires. Vérifiez que 100% de votre code est couvert. Dans le cas contraire ajoutez des tests ou refactorisez votre code.
3. Pour les plus avancés d'entre vous, utilisez le fichier de test Jest en installant jest et en lançant la bonne commande. Vous pouvez par exemple modifier le fichier package.json pour définir un raccourci sur cette commande.
