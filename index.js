$(document).ready(function(){
    console.log("It works!");
});

$( "#reserved" ).hide();
// $( "#circle1, #circle2, #circle3, #circle4, #circle5, #circle6, #circle7, #circle8, #circle9" )
// .click(function( event ) {
//   event.preventDefault();

//   $( "#reserved" ).show();
// });
$(".btn").click(function(){
    $("#reserved").hide();
});


// this is what Ivan said to do to explain how to set a reserved status
var currentTable;
$('.circle').on('click', function (){
    currentTable = $(this);
    $("#reserved").show();
});

$('.save').on('click',function(){
    currentTable.addClass('reserved');
    var name = $('#name').val();
    var size = $('#size').val();
    var div = `<div class="info">
                <p>Name: ${name}</p>
                <p>Size of party: ${size}</p>
            </div>`;
    currentTable.append(div)
    $("#reserved").hide();
});
