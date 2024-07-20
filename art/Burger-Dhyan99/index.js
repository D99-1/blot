setDocDimensions(800, 400);


const flagTurtle = new bt.Turtle();
flagTurtle.jump([100, 200]);
flagTurtle.right(0);
flagTurtle.forward(563);
flagTurtle.right(90);
flagTurtle.forward(141);
flagTurtle.right(90);
flagTurtle.forward(563);  
flagTurtle.right(90);
flagTurtle.forward(148); 
flagTurtle.right(270);
flagTurtle.forward(10);
flagTurtle.right(270);
flagTurtle.forward(204);
flagTurtle.right(270);
flagTurtle.forward(10);
flagTurtle.right(270);
flagTurtle.forward(156);

let flagPolylines = flagTurtle.lines();

drawLines(flagPolylines);
