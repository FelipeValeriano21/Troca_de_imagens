const turnon = document.getElementById ( 'turnon' ); 
const turnoff = document.getElementById ( 'turnoff' );
const both = document.getElementById ( 'interrupitor' );
const lamp = document.getElementById ( 'lamp' );

function lampon () {

if( !isLampBroken ()){

    lamp.src = './imagens/ligada.jpg';

}

}

function lampoff () {

    if( !isLampBroken ()){
    lamp.src = './imagens/desligada.jpg';

    }
}

function lampbreak () {

    lamp.src = './imagens/quebrada.jpg';


}

function isLampBroken (){

return lamp.src.indexOf ('quebrada') > -1;

}
   
var num1 = "desligada"; 
var num2 = "ligada";

function ambos (){

if (lamp.src.indexOf ('num1')){

    if( !isLampBroken ()){
   
        lamp.src = './imagens/' + num2 + '.jpg';

        var aux = num1;
         num1=num2;
         num2=aux;


        }


   

}


}



turnon.addEventListener( 'click', lampon ); 

turnoff.addEventListener( 'click', lampoff ); 

lamp.addEventListener('mouseover', lampon);

lamp.addEventListener('mouseleave', lampoff);

lamp.addEventListener('dblclick', lampbreak);

both.addEventListener( 'click', ambos); 