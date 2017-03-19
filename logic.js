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
});