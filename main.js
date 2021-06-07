canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;

background_image = "racing_background_img.jpg";
car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;


car2_image = "car2.png";

car2_x = 10;
car2_y = 100;

function add(){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadcar1()
{

    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadcar2()
{

    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) 
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') 
    {

        up();
        console.log("up");
    }

    if(keyPressed == '40') 
    {

        down();
        console.log("down");
    }

    if(keyPressed == '37') 
    {

        left();
        console.log("left");
    }

    if(keyPressed == '39') 
    {

        right();
        console.log("right");
    }

    if(keyPressed == '87') 
    {

        up2();
        console.log("up");
    }

    if(keyPressed == '83') 
    {

        down2();
        console.log("down");
    }

    if(keyPressed == '65') 
    {

        left2();
        console.log("left");
    }

    if(keyPressed == '68') 
    {

        right2();
        console.log("right");
}
