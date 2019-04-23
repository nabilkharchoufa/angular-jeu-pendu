Angular: Jeu-du-pendu
===============================

Le principe du jeu est : 

    * J'arrive sur une page où je dois saisir mon pseudo
    * L'appli génère un mot dont les lettres sont masquées
    * Je saisi / je clique sur une lettre ce qui a pour effet ou non de l'afficher dans le mot
    * Un compteur permet de connaître le nombre d'essais restant / total.
    * L'appli me félicite ou non, en fin de partie

C'est une application web responsive réalisé avec Angular, Angular Flex Layout et Angular Material, pour le back-end j'ai utilisé l'api in-memory-web-api comme mock, l'application est développé en deux langue Français et Anglais.

Elle est paramétrable aussi selon l'environnement de déploiement.

# Prérequis #
Outils :
* Node Package Manager : 
  https://nodejs.org/fr/download/
* npm : 
 ```bash 
        npm install -g npm@latest
 ```
* ANGULAR/CLI: 
```bash 
        npm install -g @angular/cli 
```

# Récupérer le projet #
```bash
git clone https://github.com/nabilkharchoufa/angular-jeu-pendu.git
cd angular-jeu-pendu
npm i
ng serve
```  
# Login #

Avant d'entamer une partie vous êtes obliger à entrer votre pseudo qui doit être supérieur ou égal à 3 caractères ensuite vous allez être redirigé automatiquement à la page du jeu

# jeu #

Le jeu est simple, l'application choisit un mot de façon aléatoire, elle affiche une lettre de ce mot pour vous aider à le trouver et vous avez 10 essaient pour le trouver.

Vous avez le clavier sur la page, vous avez qu'à appuyer sur les lettres.