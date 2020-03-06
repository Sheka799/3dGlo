'use scrict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import coundTimer from './modules/countTimer';
import calc from './modules/calc';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import tabs from './modules/tabs';
import togglePopup from './modules/togglePopup';
import toggleMenu from './modules/toggleMenu';
import team from './modules/team';


// Timer 
coundTimer('7 march 2020');

// Main
toggleMenu();

// popup
togglePopup();

// Табы
tabs();

// слайдер 
slider();

// Team
team();

// Калькулятор
calc(100);

// send-ajax-form
sendForm();