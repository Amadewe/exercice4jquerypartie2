// Au clic sur un bouton de couleur, modifier la couleur du texte de la div.

// $(function(){
//   $('#green').click(function() {
//     $('#text').css('color', 'green');
//   });
//   $('#red').click(function() {
//     $('#text').css('color', 'red');
//   });
//   $('#blue').click(function() {
//     $('#text').css('color', 'blue');
//   });
// });

// ----------------CORRECTION 1 FONCTION -------------

$(function(){
  //Quand on clique sur une div de couleurs.
  $('.color').click(function(){
  //On stock dans la variable l'id.
  var colors = $(this).attr('id');
  //On modifie la couleur du texte en récupérant la couleur stocké dans la variable.
  $('#text').css('color', colors);
  });
});



// --------------- CORRECTION -------------------------------
// $(document).ready(function(){
//   //Ici on selectionne la div qui a la classe color à qui on donne la fonction .click()
//   $('.color').click(function(){
//     //On récupere la valeur de l'attribut class avec la fonction attr.
//     var classValue = $(this).attr('class');
//     //On utilise .split pour éclater la chaîne de caractères contenant les 2 classes de la div sur laquelle on a cliqué
//     var classArray = classValue.split(' ');
//     $('#text').css('color', classArray[1]);
//   });
// });
