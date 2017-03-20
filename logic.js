$(function(){
//    Create slider to set brush size
    $('#brushSlider').slider({
        max: 30,
        min: 3,
    });
    
//    Function to change #circle height & width when slider is moved
    $('#brushSlider').on("slide", function( event, ui ) {
       $('#circle').height(ui.value); 
       $('#circle').width(ui.value); 
    });
    
//    Set height of canvas using window.height()
    var h = Math.floor( $(window).height() * 0.6 );
    $('#canvasContainer').height( h );
    
});