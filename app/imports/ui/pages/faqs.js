import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


$('.ui.accordion')
  .accordion()
;

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}