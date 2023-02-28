import * as React from 'react';

export const games = [
  {
    title: 'Multiversus',
    picture: "../assets/img/games/multiversus.png",
    description: `Choisissez votre personnage favoris et affrontez votre adversaire !`,
    file: "../assets/charts/ReglementTournois.pdf",
  },
  {
    picture: "/assets/img/games/lol.png",
    title: 'League of Legends (5v5)',
    description: `Sauriez-vous guider votre équipe à la victoire ? Entre
  stratégie et skills, il peut y avoir bien des surprises !`,
    /*chart: (
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
    ),*/
    file: "../assets/charts/ReglementTournois.pdf",
  },
  {
    title: 'Team Fight Tactics',
    picture: "../assets/img/games/TFT.png",
    description: `Soyez plus malin que vos adversaires et adaptez votre stratégie !`,
    file: "../assets/charts/ReglementTournois.pdf",
  },
  {
    picture: "../assets/img/games/rocket-league.png",
    title: 'Rocket League (3v3)',
    description: `Une seule erreur et cela peut vous coûter la victoire. Montrez
  qui sont les véritables champions sur le terrain !`,
    file: "../assets/charts/ReglementTournois.pdf",
  },
];
