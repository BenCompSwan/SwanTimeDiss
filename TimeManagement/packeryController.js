var elem = document.querySelector('.grid');

var Packery = require('packery');
var Draggabilly = require('draggabilly');

var pckry = new Packery(elem, {
    itemSelector: '.grid-item',
    horizontal: false
});

//function initDrag() {
    //pckry.getItemElements().forEach(function (itemElem) {
        //var draggie = new Draggabilly(itemElem);
       // pckry.bindDraggabillyEvents(draggie);
   // });
//}

module.exports = {
    //initDrag: initDrag
}