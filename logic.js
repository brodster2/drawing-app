$(function(){
    
    
//    Set height of canvasContainer using window.height()
    $('#canvasContainer').height( $(window).height() * 0.6 );
    $('#canvasContainer').width( $(window).width() * 0.8 );
    
    
//    Canvas setup
    // if user is paining erasing or outside canvas
    var paint = false;
    // if user is paintin or erasing
    var paint_erase = "paint";
    // canvas element
    var canvas = document.getElementById('paint');
    // variable for drawing on canvas
    var ctx = canvas.getContext('2d');
    // canvas container for calling mouse enter and leave events
    var container = $('#canvasContainer');
    // mouse position object
    var mouse = {x: 0, y: 0};
    
    //set height and width;
    canvas.height = $('#canvasContainer').height();
    canvas.width = $('#canvasContainer').width();
    
    //onload load saved from local storage
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, 0, 0);
        }
        img.src = localStorage.getItem("imgCanvas");
    };
    
    //set drawing parameters: lineWidth, lineJoin and lineCap
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    //clicking inside container
    container.mousedown(function(e){
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mouse.x, mouse.y);
    });
    
    //move the mouse while holding mouse key
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint == true){
            if(paint_erase == "paint"){
                //get color input
                ctx.strokeStyle = $('#colorSelector').val();
            } else {
                //color == white
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
    
    // mouseup -> stop painting
    container.mouseup(function(){
        paint = false;
    });
    
    // leave container -> stop painting
    container.mouseleave(function(){
        paint = false;
    });
    
    // click on save
    $('#save').click(function(){
        if(typeof(localStorage) != null){
            localStorage.setItem("imgCanvas", canvas.toDataURL());
        } else {
            window.alert("Your browser does not support saving to local storage.");
        }
    });
    
    // click on erase
    $('#erase').click(function(){
        if(paint_erase == "paint"){
            paint_erase = "erase";
        }
        else if(paint_erase == "erase"){
            paint_erase = "paint";
        }
        $(this).toggleClass("eraseMode");
    });
    
    //click on reset
    $('#reset').click(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        paint_erase = "paint";
        $('#erase').removeClass("eraseMode");
    });
    
    // change color input
    $('#colorSelector').change(function(){
        $('#circle').css("background-color", $(this).val());
    });
    
    // change lineWidth using slider
    $('#brushSlider').slider({
        max: 30,
        min: 3,
        slide: function(event, ui){
            $('#circle').height(ui.value); 
            $('#circle').width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });
});