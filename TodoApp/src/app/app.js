import './styles/site.css';

import angular from 'angular';
import { TodoController } from './Controllers/TodoController';

//eslint-disable-next-line
const app = angular
  .module('app', [])
  .controller(TodoController.name, TodoController);
