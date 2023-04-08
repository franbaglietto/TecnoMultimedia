
/*variables*/
PImage chanchito;
/*fin de variables*/
void setup () {
size (800, 400);
chanchito = loadImage("chanchito.jpg");
}

void draw () {
/*cara*/
fill (205,115,139);
circle (200,200,190);

/*ojos*/
fill (20,0,0);
circle (160,190, 30);
circle (240,190, 30);

/*nariz exterior*/
fill (238,73,139);
ellipse (200,230,60,50);

/*nariz interior*/
fill (47,0,0);
circle (210,230, 15);
circle (190,230, 15);

/*oreja izq*/
fill (205,115,139);
triangle (160,115,100,50,110,170);
fill(238,73,139);
triangle (155,116,105,60,113,160);

/*oreja der*/
fill (205,115,139);
triangle (240,115,300,50,290,170);
fill(238,73,139);
triangle (245,116,295,60,287,160);

/*cuerpo*/
fill (205,115,139);
rect (105,290,200,300);

/*brazo der*/
rect (305,325,65,30);
fill(238,73,139);
triangle (370,325,370,338,395,325);
triangle (370,338,370,355,395,355);

/*brazo izq*/
fill (205,115,139);
rect (40,325,65,30);
fill(238,73,139);
triangle (40,338,40,325,15,325);
triangle (40,338,40,355,15,355);

/*image*/
image(chanchito,400,50);
/*fin del trabajo*/

}
