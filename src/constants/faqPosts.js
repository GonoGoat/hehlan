import * as React from 'react';

import EventIcon from '@material-ui/icons/Event';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HotelIcon from '@material-ui/icons/Hotel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import CardTravelIcon from '@material-ui/icons/CardTravel';

import pink from '@material-ui/core/colors/pink';

export const faqPosts = [
  {
    icon: <LocationOnIcon style={{ color: pink[500], fontSize: 50 }} />,
    title: "Comment s'y rendre ?",
    content: (
      <div>
        La HEH LAN s'organise au campus technique de la HEH :{' '}
        <a
          href="https://www.google.com/maps/place/Avenue+Victor+Maistriau+8,+7000+Mons/@50.4621244,3.9553143,17z/data=!3m1!4b1!4m5!3m4!1s0x47c24fe181290923:0x2d82708f960c5e13!8m2!3d50.462121!4d3.957503"
          target="_blank"
        >
          <strong>Avenue Victor Maistriau 8, 7000 Mons.</strong>
        </a>
      </div>
    ),
  },
  {
    icon: <EventIcon style={{ color: pink[500], fontSize: 50 }} />,
    title: "Quand s'y rendre ?",
    content: (
      <div>
        Le week-end précédent les vacances de Pâques,{' '}
        <strong>du vendredi 31 avril, au dimanche 2 avril </strong>.<br/>
        (Planning en cours de réalisation)
      </div>
    ),
  },
  /*{
    icon: <CardTravelIcon style={{ color: pink[500], fontSize: 50 }} />,
    title: 'Que dois-je apporter ?',
    content: (
      <div>
        <div>
          Au minimum son <strong>matériel informatique</strong>, <strong>une pièce d'identité</strong>
          , <strong>une multiprise</strong> et un <strong>câble Ethernet</strong> d'au moins 10m.
        </div>
        <br />
        <div>
          La connexion internet étant limitée, et au vu du nombre de joueurs, veuillez faire vos téléchargements au préalable.
        </div>
      </div>
    ),
  },*/
  {
    icon: <PeopleIcon style={{ color: pink[500], fontSize: 50 }} />,
    title: "Peut-on inviter d'autres personnes ?",
    content: (
      <div>
        <strong>Tout le monde peut participer à la HEH LAN</strong>. Cependant, nous limitons le
        nombre de participants à une centaine de personnes.
      </div>
    ),
  },
  /*{
    icon: <FastfoodIcon style={{ color: pink[500], fontSize: 50 }} />,
    title: 'Y aura-t-il un stand de nourriture ?',
    content: (
      <div>
        Un stand <strong>nourriture et boissons</strong> sera <strong>à</strong> votre{' '}
        <strong>disposition</strong> avec de délicieux plats cuisinés maison à prix démocratique.
        Attention que l'apport d'<strong>alcool</strong> est <strong> interdit.</strong>
      </div>
    ),
  },*/
  /*{
    icon: <HotelIcon style={{ color: pink[500], fontSize: 50 }} />,
    title: 'Peut-on y rester pour dormir ?',
    content: (
      <div>
        Pour l'occasion, <strong>des classes seront vidées au 3ème étage</strong> du bâtiment et
        transformées en dortoir afin que les participants puissent s'y reposer.
      </div>
    ),
  },*/
];
