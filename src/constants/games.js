import * as React from 'react';

export const games = [
  {
    picture: "/assets/img/games/lol.png",
    title: 'League of Legends (5v5)',
    description: `Sauriez-vous guider votre équipe à la victoire ? Entre
  stratégie et skills, il peut y avoir bien des surprises !`,
    chart: (
      <div>
        <p>
          En participant à ce tournoi, chaque joueur accepte ce règlement et se plie à ses règles. Le tournoi se déroulera sous forme de match privé opposant 10 joueurs. Chaque match privé sera créé par un des chefs d'équipe qui invitera le chef de l'équipe adversaire, qui inviteront les membres de leur équipe.
        </p>
        <p>
        ATTENTION : Le déroulement de ce tournoi est susceptible à diverses modifications si les conditions nous l'obligent.
        </p>
        <p>
        DISCLAIMER : Aucun compte Smurf - Tout compte smurf suspecté entraînera la disqualification de l'équipe complète. De plus, tout comportement toxique (chat /all ou IRL) entraînera des pénalités pour l'équipe.
        </p>
        <p>
        Le tournoi se limite à 16 équipes de 5 joueurs maximum. Dès lors, n'oubliez pas de vous inscrire afin de réserver votre place au plus tôt. Nous acceptons tous les niveaux de jeu (bronze to challenger). Si le nombre de joueurs inscrits pour une équipe est inférieur ou supérieur à 5, l'équipe sera automatiquement retirée de la liste d'inscriptions. Chaque joueur sera accepté si, et seulement si, le paiement a été effectué (par virement). Enfin, les joueurs doivent posséder un jeu à jour, en version européenne, ainsi que leur propre compte de jeu.
        </p>
        <h3>Structure du tournoi</h3>
        <p>Le tournoi LoL se déroulera en 2 phases, et il y aura 3 places sur le podium (3 équipes victorieuses : 1ère, 2ème, 3ème).</p>
        <h4>Phase 1. Les Pools</h4>
        <p>Les équipes seront regroupées en pools contenant un même nombre d'équipes. Chaque équipe affrontera les autres équipes de sa pool. Les 2 meilleures équipes de chaque pool passeront en phase 2. Toute absence à un match lors de la phase 1 entraînera une défaite à ce match. En cas d'égalité en phase de pools, l'équipe la plus sanguinaire sera première (celle qui a fait le plus de kills sur ses 3 matchs).</p>
        <h4>Phase 2. Les éliminatoires</h4>
        <p>
        Les 8 équipes restantes s'affronteront par élimination directe (défaite = passage de l'équipe à la losers bracket). La losers bracket donnera une chance aux équipes éliminées de remonter jusqu'en finale. La demi-finale, la petite finale et la grande finale auront lieu le dernier jour de la LAN. La GF aura lieu sous un format BO3.
        </p>
      </div>
    ),
    file: "../assets/charts/lolChart.pdf",
  },
  {
    picture: "../assets/img/games/rocket-league.png",
    title: 'Rocket League (3v3)',
    description: `Une seule erreur et cela peut vous coûter la victoire. Montrez
  qui sont les véritables champions sur le terrain !`,
    chart: (
      <div>
        <p>En participant à ce tournoi, chaque joueur accepte ce règlement et se plie à ses règles. Le tournoi se déroulera sous forme de match privé opposant 6 joueurs. Chaque match privé sera créé par un des chefs d'équipe qui invitera le chef de l'équipe adversaire. Ensuite ils inviteront les membres de leur équipe.</p>
        <p>ATTENTION : Le déroulement de ce tournoi est susceptible à diverses modifications si les conditions nous l'obligent.</p>
        <p>DISCLAIMER : Aucun compte Smurf - Tout compte smurf suspecté entraînera la disqualification de l'équipe complète. De plus, tout comportement toxique (chat /all ou IRL) entraînera des pénalités pour l'équipe.</p>
        <p>Le tournoi se limite à 32 équipes au maximum. Dès lors, n'oubliez pas de vous inscrire afin de réserver votre place au plus tôt. Nous acceptons tous les niveaux de jeu (bronze to challenger). Si le nombre de joueurs inscrits pour une équipe est inférieur ou supérieur à 3, l'équipe sera automatiquement retirée de la liste d'inscriptions. Chaque joueur sera accepté si, et seulement si, le paiement a été effectué (par virement). Enfin, les joueurs doivent posséder un jeu à jour, en version européenne, ainsi que leur propre compte de jeu.</p>
        <h3>Structure du tournoi</h3>
        <p>Le tournoi Rocket League se déroulera en 2 phases, et il y aura 3 places sur le podium (3 équipes victorieuses : 1ère, 2ème, 3ème).</p>
        <h4>Phase 1 : Phase de Pools</h4>
        <p>Les équipes seront regroupées en x pools de 4 équipes. Chaque équipe affrontera les autres équipes de sa pool. Les 2 meilleures équipes de chaque pool passeront en phase 2. Toute absence à un match lors de la phase 1 entraînera une défaite à ce match. En cas d'égalité en phase de pools, l'équipe la plus sanguinaire sera première (celle qui a marqué le plus de but).</p>
        <h4>Phase 2 : Les éliminatoires</h4>
        <p>Les x équipes restantes s'affronteront par élimination directe (défaite = passage de l'équipe à la losers bracket). La losers bracket donnera une chance aux équipes éliminées de remonter jusqu'en finale. Tous les matchs se joueront en BO3, sauf la grande finale qui se jouera en BO5. La petite finale et la grande finale auront lieu le dernier jour de la LAN.</p>
        <h3>Maps</h3>
        <p>Les maps d'affrontement sont libres de choix par un accord commun entre les joueurs. Si aucun accord n’est trouvé, c'est la map DFH Stadium qui sera la map choisie par défaut.</p>
      </div>
    ),
    file: "../assets/charts/rocketLeagueChart.pdf",
  },
  {
    title: 'Team Figth Tactics',
    picture: "../assets/img/games/TFT.png",
    description: `Soyez plus malin que vos adversaires et adaptez votre stratégie.`,
    chart: (
      <div>
        <p>
          En participant à ce tournoi, chaque joueur accepte ce règlement et se plie à ses règles.
          Le tournoi se déroulera sous forme de versus par 8 joueurs. Le tournoi se limite à 96
          joueurs.
        </p>
        <p>
      ATTENTION : Le déroulement de ce tournoi est susceptible à diverses modifications
          si les conditions nous l'obligent. 
        </p>
        <p>DISCLAIMER : Aucun compte Smurf - Tout compte smurf
          suspecté entraînera la disqualification de l'équipe complète. De plus, tout comportement
          toxique (chat /all ou IRL) entraînera des pénalités pour l'équipe. Nous acceptons tous les
          niveaux de jeu. Attention que le joueur sera accepté si, et seulement si, le paiement a
          été effectué (par virement ou sur place). Enfin, les joueurs doivent posséder un jeu à
          jour, en version européenne, ainsi que leur propre compte de jeu.</p>
        <h3> Structure du Tournoi</h3>
        <p>
          Le tournoi TeamFight Tactics s'organisera sous forme de classement à points. Il contiendra
          plusieurs phases d'élimination sur base d'un barème de points. Le score du joueur sera
          déterminé par les points qu’il aura accumulé durant les matchs de la phase actuelle, ET
          des phases précédentes. Seront qualifiés pour la phase suivante les joueurs ayant atteint
          autant ou plus de point que le score minimum requis. Chaque phase sera identique jusqu'à
          atteindre la finale où 8 joueurs se départageront. Les points accumulés sont conservés
          entre chaque phase pour les qualifiés. La finale se déroulera dans les mêmes conditions
          que les phases précédentes, et le podium sera déterminé par le score accumulé par les
          joueurs.
        </p>
      </div>
    ),
    file: "../assets/charts/trackManiaChart.pdf",
  },
  {
    title: 'Brawlhala',
    picture: "../assets/img/games/brawlhalla.png",
    description: `N'épargnez personne, éliminez tous vos
    adversaires`,
    chart: (
      <div>
        <p>
        Le tournoi Brawlhalla se déroulera en phase à éliminations directes suivie de 2 phases de pool. Chacun des matchs privés opposera 2 joueurs en 1v1 en BO3. Chaque match privé sera créé par un des joueurs qui invitera son adversaire. Le tournoi se limite à 100  joueurs au maximum. Dès lors, n'oubliez pas de vous inscrire afin de réserver votre place au plus tôt.
        </p>
        <p>
        Ce tournoi est un tournoi bonus ! C’est l’occasion pour les participants des autres tournois de gagner des points à ajouter à leur score total. Ce score total permettra de déterminer les vainqueurs du tournoi global, réunissant les 4 jeux, pour tenter de décrocher plusieurs gros lots pour les meilleurs joueurs individuels. Le score individuel sera la somme des scores obtenus par le joueur/son équipe durant les tournois précédents ainsi que le score obtenu sur Brawlhalla.
        </p>
        <p>
        Chaque joueur ayant participé à au moins un tournoi peut participer au tournoi global réunissant les 4 jeux. Ce tournoi se distingue du reste de la LAN, car il n'est lié à aucun jeu, mais comptabilise l'accumulation de points obtenus au travers des tournois précédents. Vous avez donc plus de chances de gagner un prix si vous avez participé à tous les tournois !
        </p>
        <p>
        Chaque tournoi possédera des objectifs mystères (« achievements ») qui récompenseront un joueur ou l'équipe d'un certain montant de points bonus selon l'objectif rempli (La mission proposée par les admins). 
        </p>
        <h3>Structure du tournoi</h3>
        <p>
        D’abord, phase d’élimination directe où les 100 joueurs affronteront chacun 1 autre joueur choisi aléatoirement. Chaque match de cette phase sera une confrontation directe en BO3.
        </p>
        <p>
        Les 50 joueurs sélectionnés selon leur score seront répartis en 10 pools de 5 joueurs. Chaque joueur de chaque pool affrontera les 4 autres joueurs de sa pool dans un match unique.
        </p>
        <p>
        Les meilleurs joueurs de chaque pool seront sélectionnés selon leur score pour pouvoir participer à la finale. Il s’agira d’une pool de 10 où chaque joueur affrontera les 9 autres en match unique. Le podium sera sélectionné sur base du score accumulé par ces 10 joueurs.
        </p>
      </div>
    ),
    file: "../assets/charts/trackManiaChart.pdf",
  },
];
