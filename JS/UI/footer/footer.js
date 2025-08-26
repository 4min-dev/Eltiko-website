import Animations from "../../../JS/animations/animations.js";

const footer = document.getElementById('footer');
const animation = new Animations()

document.addEventListener('DOMContentLoaded', function() {

animation.transformToRight(footer, '.footer__text__firstline .footer__firstline__svg')
animation.transformToLeft(footer, '.footer__text__firstline .footer__firstline__videoframe')
animation.transformToLeft(footer, '.footer__text__secondline')

})