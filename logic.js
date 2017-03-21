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
    
//    Set height of canvasContainer using window.height()
    $('#canvasContainer').height( $(window).height() * 0.6 );
    $('#canvasContainer').width( $(window).width() * 0.8 );
    
//    Dynamically set height and width of canvas
    /*$('#paint').width( $('#canvasContainer').width() );
    $('#paint').height( $('#canvasContainer').height() );*/
    
    
//    Canvas setup
    var canvas = document.getElementById('paint');
    var context = canvas.getContext('2d');
    
    //set height and width;
    canvas.height = $('#canvasContainer').height();
    canvas.width = $('#canvasContainer').width();
    
    //set line style
    //set line width
    context.lineWidth = 10;
    //set line color
    context.strokeStyle = 'red';
    //set line cap
    context.lineCap = "round";
    context.lineJoin = "round";
    
    //draw a line
    //declare a new path
    context.beginPath();
    //set context position
    context.moveTo(50,50);
    //draw straight line from start to end point
    context.lineTo(200, 250);
    //draw another line
    context.lineTo(50, 500);
    
    //make line visible
    context.stroke();
});