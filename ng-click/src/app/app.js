import './styles/site.css';
import angular from 'angular';
import { MoviesController } from './Controllers/MoviesController';

const app = angular
  .module('gemStore', [])
  .controller(MoviesController.name, MoviesController);
