console.log("Hello mojs!!");

var shape = new mojs.Shape({
  shape:        "circle",
  radius:       50,
  radiusX:      50,
  left:         '25%',
  scale:        { 0 : 1 },
  fill:         {'cyan':'blue'},
  duration:     2000,
  repeat:       999,
}).play();

var rect = new mojs.Shape({
  shape:        'rect',
  radius:       50,
  radiusX:      50,
  left:         '50%',
  fill:         'none',
  stroke:       {'rgba(0,255,255,1)':'yellow'},
  strokeWidth:       { 10 : 0 },
  strokeDasharray:'100%',
  strokeDashoffrest:{'-100%' : '100'},
  angle:        { 0 : 180},
  duration:     2000,
  repeat:       999,
}).play();

var polygon = new mojs.Shape({
 shape:         'polygon',
 radius:        50,
 radiusY:       60,
 left:          '75%',
 fill:          {'pink' : 'red'},
 x:             {'rand(-100%,-200%)' : 0},
 duration:      2000,
 repeat:        999,
}).play();