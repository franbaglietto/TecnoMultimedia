
PFont font;
String estado , pag1 , pag2, pag3;
int timer , x , x1, x2;
PImage cerdito;
PImage granja; 
PImage bebe;

void setup() {
  //menu
  font = loadFont("AgencyFB-Reg-48.vlw");
  textFont(font);
  size( 640, 480 );
  textAlign( CENTER, CENTER );
  textSize( 65 );
  fill(200);
  estado = "menu"; 
  frameRate( 60 );
  
  //pantalla 1
  cerdito = loadImage("cerdito.jpg");
  pag1 = "hoy vamos a hablar de lo lindo que son los cerditos \n y porque no deberiamos de consumirlos";
  x= 1020;
  
  //pantalla 2
  granja = loadImage ("granja.jpg");
  pag2= "simplemente hay que ver lo \n lindo que son estos animales \n como para querer matarlos";
  x1=1020;
  
  //pantalla 3
  bebe = loadImage("bebe.png");
  x2=1020;
  pag3="Hay que acostumbrarse a reducir el consumo de carnes";
}



void draw() {
 
  if ( estado.equals("menu") ) {
    background(20);
    fill(255);
    text( "MENU", width/2, height/2 );
    circle( width/2, height/4*3, 50 );

//PANTALLA 1

  } else if (estado.equals("p1") ) {
    textSize (30);
    fill(10);
    background(cerdito);
      if(x>=-380){
      x=x-2;
      }
    text( pag1,x, height/2 );
    timer++; 
    //reset del texto
   if(x==-380){
   x=1020;
   }
    
    
    if( timer >= 600 ){ 
      estado = "p2";
      timer = 0;
    }
    
//PANTALLA 2

    } else if (estado.equals("p2") ) {
      background(granja);
      textSize(40);
      fill(15);
      text( pag2, x1, height/2 );
         if(x1>=-380){
        x1--;
        }
      timer++;
       if(x1==-380){
     x1=1020;
     }
      
      if( timer >= 1200 ){
        estado = "p3";
        timer = 0;
      }
      
  //PANTALLA3
  
   } else if (estado.equals("p3") ) {
      background(bebe);
      textSize(40);
      fill(15);
      text( pag3, x2, height/2 );
         if(x2>=-380){
        x2--;
        }
      timer++;
       if(x2==-380){
     x2=1020;
     }
      
      if( timer >= 1200 ){
        estado = "p4";
        timer = 0;
      }
      
  //PANTALLA 4
    } else if (estado.equals("p4") ) {
     background(255);
     fill(20);
      text( "Volver al inicio", width/2, 50 );
        circle( width/2, height/4*3, 50 );
      //consola
      println( estado );
    }

        //sino
else {
    text( "no es ningun \n estado preseteado", width/2, height/2 );
  }  
    
  }



//MOUSE
void mousePressed() {
  // circle( width/2, height/4*3, 50 );  <-- de acá salen los datos
  if( estado.equals("menu") ){
    if( dist(width/2, height/4*3, mouseX, mouseY) < 50/2 ){
      estado = "p1";
    }
  }  
  if( estado.equals("p4") ){
    if( dist(width/2, height/4*3, mouseX, mouseY) < 50/2 ){
      estado = "menu";
    }
  }
}
