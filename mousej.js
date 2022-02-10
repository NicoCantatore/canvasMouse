var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");

/*dibujarLinea("black", 1, 1, 299, 1, papel);
dibujarLinea("black", 1, 1, 1, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);
dibujarLinea("black", 299, 299, 299, 1, papel);*/ // cuadro delimitante

var mousePresionado = false; // para que dibuje solo presionandolo
var x;
var y;

cuadro.addEventListener("mousedown", cursor_presionado);

function cursor_presionado(evento) {
    x = evento.offsetX;
    y = evento.offsetY;
    mousePresionado = true;
}

cuadro.addEventListener("mousemove", cursor_en_movimiento);

function cursor_en_movimiento(evento) {
    if (mousePresionado == true) {
        dibujarLinea("green", x, y, evento.offsetX, evento.offsetY, papel);
        x = evento.offsetX;
        y = evento.offsetY;
    }
}

cuadro.addEventListener("mouseup", cursor_no_presionado);

function cursor_no_presionado(evento) {
    if (mousePresionado == true) {
        mousePresionado = false;
        /*console.log(evento.offsetX); 
        console.log(evento.offsetY);
        console.log(evento);*/ //muestra eventos y propiedades de objeto evento 
    }
}

function dibujarLinea(color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}