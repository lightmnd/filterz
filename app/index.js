import filterzApp from './modules-custom/filterzApp/filterzApp';
//import Fade from './modules-custom/filterzApp/index';
//import animation from './modules-custom/filterzApp/animation';
import style from '../scss/style.scss';
import { effect } from './modules-custom/filterzApp/animation';
//import *  as efx from './modules-custom/filterzApp/animation';
import session from './modules-custom/session/session';

const myApp = () => {
    filterzApp();
    effect();
}

const sessionCookies = () => {
    session();
}

sessionCookies();
myApp();

