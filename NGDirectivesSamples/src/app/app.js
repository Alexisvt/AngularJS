import './styles/site.css';

import angular from 'angular';
import { MoviesController } from './Controllers/MoviesController';

// eslint-disable-next-line no-unused-vars
const app = angular
  .module('app', [])
  .controller(MoviesController.name, MoviesController);
