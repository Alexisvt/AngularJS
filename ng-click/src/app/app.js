import './styles/site.css';
import angular from 'angular';
import { MainController } from './Controllers/MainController';

const app = angular
  .module('gemStore', [])
  .controller('MainController', MainController);
