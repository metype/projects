var img;
var X;
var Y;
var noclipspeed = 20
var Z
var shp
var shpi
var speed
var freecam = false
var XR = 0
var YR = 0
var debug = true
function preload() {
town = loadImage('./assets/town.png');
BG = loadImage('./assets/BG.png');
X = random(-250,250)
Y = random(-250,250)
Z = 1
shop = loadImage('./assets/shop.png')
hax = loadImage('./assets/hax.png')
cursor(CROSS)
}
　
　
function setup() {
 createCanvas(1905,1065,WEBGL);
}
　
　
function draw() {
  rotateY(XR)
  rotateX(YR)
  cursor(CROSS)
  keyPressed()
  translate(0,0,10000)
  texture(hax)
  plane(10000,10000)
  translate(0,0,-10000)
  translate(0,0,-10000)
  texture(BG)
  plane(10000000,1000000)
  texture(town)
  translate(0,0,10000)
  translate(X-1000,Y-1000,Z)
  plane(950,567)
  translate(800,750)
  texture(shop)
  plane(100,100)
  if(freecam === false) {
  if (Z>577) {
  Z = 577
} else if (Z < -2600) {
  Z = -2600
} else if (Z === 0 ) {
 Z = 1
}
}
if (shpi === 1) {
Z = 577
X = -814.219833927416
Y = -751.7183831208923
}
if (noclipspeed < 10) {
noclipspeed = 10
}
}
　
function keyPressed() {
 if (keyIsDown(70)) {
   fullscreen(1)
} else if (keyIsDown(78)) {
   fullscreen(0)
} else if (keyIsDown(79)) {
    freecam = true
  } else if (keyIsDown(76)) {
    freecam = false
    XR = 0
    YR = 0
  } else if (keyIsDown(113)) {
saveCanvas("EvolutionTST","png")
}
 if (freecam === false) {
 XR = 0
 YR = 0
 if (keyIsDown(65)) {
    X+=10;
  } else if (keyIsDown(68)) {
    X-=10;
  } else if (keyIsDown(87)) {
    Y+=10;
  } else if (keyIsDown(83)) {
    Y-=10;
  } else if (keyIsDown(70)) {
   fullscreen(1)
  } else if (keyIsDown(78)) {
   fullscreen(0)
  }
} else {
 if (keyIsDown(65)) {
    X += noclipspeed
} else if (keyIsDown(68)) {
    X -= noclipspeed
} else if (keyIsDown(87)) {
    Z += noclipspeed
} else if (keyIsDown(83)) {
    Z -= noclipspeed
} else if (keyIsDown(32)) {
    Y += noclipspeed
} else if (keyIsDown(16)) {
    Y -= noclipspeed
} else if (keyIsDown(39)) {
    XR += 0.05
} else if (keyIsDown(37)) {
    XR -= 0.05
} else if (keyIsDown(38)) {
    YR -= 0.05
} else if (keyIsDown(40)) {
    YR += 0.05
} else if (keyIsDown(107)) {
    noclipspeed += 10
} else if (keyIsDown(109)) {
    noclipspeed -= 10
} 
}
}
　
function mouseWheel(event) {
   Z -= event.delta
}
