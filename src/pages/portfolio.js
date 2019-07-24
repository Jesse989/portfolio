import React from 'react';
import { Project } from '../components';
import { Item, Container } from 'semantic-ui-react';
import labyrinthScreen from '../assets/lab_port.png';
import coffeeScreen from '../assets/coffee_screen.png';
import libraryScreen from '../assets/lib_screen.png';

const projects = [
  {
    title: 'Personal Library Notebook',
    meta: 'Keep track of your personal library with ratings and notes.',
    description: [
      'Single Page App designed to keep track of your personal library.',
      'React frontend with a Node/Express backend.',
      'Uses the Goodreads.com XML API to search and retrieve book covers and ratings.',
      'Notes can be created for any book in your library, and is persisted through a SQLite database.',
      'Apollo and GraphQl handle the communication between the frontend and the backend.',
      'Apollo also provides data caching and manages client state.'
    ],
    stack: [
      'react.svg',
      'apollo.png',
      'graphql.svg',
      'es6.svg',
      'nodejs-icon.svg',
      'webpack-icon.svg',
      'heroku.jpg'
    ],
    img: libraryScreen,
    link: 'https://library-notebook.herokuapp.com/'
  },
  {
    title: 'Heart of the Labyrinth',
    meta: 'In browser role playing game.',
    description: [
      'Created with the Phaser3 JavaScript engine.',
      'Works great on mobile, with full touch support.',
      'Three different classes, each has their own unique weapons and abilities.',
      'Weapon upgrade system, leveling system, and quest system in addition to the full combat system.',
      'Maps created using Tiled map editor.'
    ],
    stack: [
      'phaser-icon.png',
      'es6.svg',
      'tiled-logo.png',
      'webpack-icon.svg',
      'babel_logo.png',
      'sequelize.svg',
      'itchio.svg'
    ],
    img: labyrinthScreen,
    link: 'https://jesse989.itch.io/the-heart-of-the-labyrinth'
  },
  {
    title: 'Coffee eCommerce Site',
    meta: 'Created an online ordering system for a local coffee company.',
    description: [
      'Frontend built using React, backend served on Node and Express.',
      'Payment is handled by using the Stripe API.',
      'Customers can order once or sign up for a bi-monthly subscription.'
    ],
    stack: [
      'react.svg',
      'stripe-2.svg',
      'es6.svg',
      'nodejs-icon.svg',
      'webpack-icon.svg',
      'mongodb.svg',
      'heroku.jpg'
    ],
    img: coffeeScreen,
    link: 'https://gypsy-chick-espresso.herokuapp.com/'
  }
];

export default function Portfolio() {
  const displayProjects = projects.map((project, index) => (
    <Project
      key={index}
      title={projects[index].title}
      meta={projects[index].meta}
      description={projects[index].description}
      stack={projects[index].stack}
      img={projects[index].img}
      link={projects[index].link}
    />
  ));
  return (
    <Container style={styles.container}>
      <Item.Group divided relaxed>
        {displayProjects}
      </Item.Group>
    </Container>
  );
}

const styles = {
  container: {
    width: 800,
    paddingTop: 26,
    paddingBottom: 86
  }
};
