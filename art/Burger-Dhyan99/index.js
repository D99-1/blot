setDocDimensions(800, 400);


const flagTurtle = new bt.Turtle();
flagTurtle.jump([236, 299]);
flagTurtle.right(0);
flagTurtle.arc(1,690)
flagTurtle.arc(-14,590)
flagTurtle.forward(0);
flagTurtle.right(-21)
flagTurtle.arc(-11,1139)
flagTurtle.right(-377)
flagTurtle.arc(7,962);
flagTurtle.right(-215)
flagTurtle.forward(80);
flagTurtle.right(-126)
flagTurtle.forward(80);
flagTurtle.right(-227)
flagTurtle.forward(80);
flagTurtle.arc(-49,116)
flagTurtle.forward(259);
flagTurtle.arc(25,273)
flagTurtle.right(302)
flagTurtle.forward(106)
flagTurtle.right(439)
flagTurtle.forward(16)
flagTurtle.right(99)
flagTurtle.forward(281)
flagTurtle.right(449)
flagTurtle.forward(8)
flagTurtle.right(456)
flagTurtle.forward(106)



let flagPolylines = flagTurtle.lines();

drawLines(flagPolylines);
