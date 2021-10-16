mustache_x=0;
mustache_y=0;

function preload(){
    mustache = loadImage("download(5).png");
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,mustache_x,mustache_y,60,45);
}

function take_snapshot(){
    save("my_mustache.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("mustache x: "+results[0].pose.nose.x);
        mustache_x = results[0].pose.nose.x-30;
        console.log("mustache y: "+results[0].pose.nose.y);
        mustache_y = results[0].pose.nose.y;
    };
}
