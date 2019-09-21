/*let btn = document.getElementById('iconSubir');
btn.addEventListener("click",subir);*/

/*
introduccion
usabilidad
experiencia de usuario
simplicidad
*/

let btnNext = document.getElementById("next");
btnNext.addEventListener("click",nextImg);

let btnPrev = document.getElementById("prev");
btnPrev.addEventListener("click",prevImg);
let img = document.getElementById("imagen");

let gale = document.getElementById("galeria");

let text = document.getElementById("texto");

function subir(){

 window.scroll(0,0);

}

let i=0;
let a =0;
let images = ["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.png","g.jpg","h.jpg","i.jpg","j.png","k.jpg","video.png"];
let images2 = images.slice();
let titulos = ["Introduccion","Usabilidad","Dimensión empírica","Experiencia de Usuario","Simplicidad","Deconstrucción",
"Lo importante permanece","Nada puede provenir de la nada","Percepción visual","Cognición","El almacén de nuestra mente","video"];
let textos = [//primer elemento
"Muchos recordaremos cómo hace años - cuando en los hogares empezaban"
 +" a hacer presencia los primeros ordenadores personales y en el entorno laboral"
 +" comenzaba la automatización de procesos - se incorporó un nuevo término a nuestro"
 +" vocabulario: “amigable”.<br><br> Este se utilizaba para referirse a aquellas aplicaciones"
 +" software en las que su uso, al menos, no terminaba provocándonos un dolor de cabeza"
 +" o un estado de interminable frustración.<br><br>",

 /*+"Este término fue progresivamente sustituido por otro, usabilidad, un anglicismo (usability)"
 +" que se refiere a la facilidad de uso de las aplicaciones, herramientas o productos interactivos."
 +" Este cambio terminológico no obedecía a una moda, sino a la intención de definir, delimitar y"
 +" clarificar uno de los atributos de calidad de los productos interactivos que mayor impacto tienen"
 +" en la satisfacción del usuario y la aceptación social del producto.",*/
 
 //segundo elemento
 "Usabilidad Como hemos señalado en la introducción de este trabajo, usabilidad es un concepto que se"
  + "refiere básicamente a la facilidad de uso de una aplicación o producto interactivo.<br><br>"
 
  +"El grado de usabilidad de un sistema , Se mide a partir de pruebas empíricas y relativas.<br><br>"
  +"<strong>Empírica</strong> porque no se basa en opiniones o sensaciones, sino en pruebas de usabilidad realizadas en laboratorio u observadas mediante trabajo de campo.<br><br>"
  +"<strong>Relativa</strong> porque el resultado no es ni bueno ni malo, sino que depende de las metas planteadas o de una comparación con otros sistemas similares.", /*Pero esta no"
  + "es más que una definición operativa, que poco nos revela acerca de la verdadera naturaleza empírica,"
  + "dependiente, relativa, e incluso ética, de este concepto. A continuación vamos a desgranar más"
  + "detalladamente a qué nos referimos cuando hablamos de usabilidad.",*/
  
  //tercer elemento
  "La usabilidad es un concepto empírico, lo que significa que puede ser medida y evaluada, y por tanto "
  +" no debe entenderse como un concepto abstracto, subjetivo o carente de significado.<br><br> De hecho, la usabilidad"
  +" es un atributo de calidad cuya definición formal es resultado de la enumeración de los diferentes componentes"
  +" o variables a través de los cuales puede ser medida. Entre estos componentes, encontramos (Nielsen; 2003)<br><br>",

  /*+"Facilidad de Aprendizaje (Learnability): ¿Cómo de fácil resulta para los usuarios llevar a cabo tareas básicas"
  +" la primera vez que se enfrentan al diseño?<br><br>Eficiencia: Una vez que los usuarios han aprendido el funcionamiento"
  +" básico del diseño, ¿cuánto tardan en la realización de tareas?<br><br>Cualidad de ser recordado (Memorability): Cuando"
  +" los usuarios vuelven a usar el diseño después de un periodo sin hacerlo, ¿cuánto tardan en volver a adquirir el"
  +" conocimiento necesario para usarlo eficientemente?<br><br>Eficacia: Durante la realización de una tarea, ¿cuántos errores"
  +" comete el usuario?, ¿cómo de graves son las consecuencias de esos errores?, ¿cómo de rápido puede el usuario deshacer"
  +" las consecuencias de sus propios errores?<br><br>Satisfacción: ¿Cómo de agradable y sencillo le ha parecido al usuario la"
  +" realización de las tareas?",*/

  //cuarto elemento
  /*"Aunque, como hemos visto, todos los elementos y atributos de diseño descritos se encuentran fuertemente interrelacionados,"
  +" e incluso pueden englobarse bajo el concepto de usabilidad, la realidad es que cada uno de ellos identifica actividades y"
  +" roles profesionales claramente diferenciados y especializados.<br><br>*/ "La experiencia de usuario es el conjunto de factores"
  +" y elementos relativos a la interacción del usuario, con un entorno o dispositivo concretos, cuyo resultado es la generación de "
  +"una percepción positiva o negativa de dicho servicio, producto o dispositivo. <br><br>Dentro de un proyecto web podemos encontrarnos "
  +"trabajando a diseñadores de interacción, arquitectos de información, especialistas en accesibilidad, diseñadores gráficos y especialistas"
  +" en usabilidad, entre muchos otros perfiles.<br><br>",

  /*+"Como en la conocida parábola del elefante y los seis hombres ciegos (Gutiérrez-Restrepo, McCathieNevil; 2005), las diferentes"
  +" comunidades profesionales se encuentran afrontando un mismo problema desde enfoques parciales, atendiendo a atributos o componentes"
  +" de diseño de forma aislada. En la búsqueda de visiones y soluciones globales, en los últimos años se ha popularizado el concepto de"
  +" “Experiencia de Usuario” o “Diseño de Experiencias de Usuario”-, un concepto \"paraguas\" bajo el que integrar las diferentes disciplinas"
  +" y roles profesionales (Hassan-Montero, Martín-Fernández; 2005) (Paluch; 2006).",*/ 
  
  //quinto elemento
  /*"Construimos rellenando espacios vacíos, completando huecos en la pantalla. Estamos dispuestos a cubrir y completar cada rincón de nuestras"
  +" interfaces ya que, quizás, sea la forma de sentir que añadimos valor al producto o que aprovechamos las posibilidades expresivas del medio."
  +" Si se nos da una hoja en blanco, un bolígrafo, y se nos hace esperar un poco, no podemos resistirnos a adornar esa hoja con algún trazo,"
  +" no tanto para comprobar que el bolígrafo funciona como por romper con ese vacío, con la “simplicidad” que representa tanto espacio en blanco.<br><br>"
  
  +"Sin embargo,*/" en los últimos años la simplicidad se ha demostrado como un atributo más de calidad en la red. Se busca de alguna manera la diferenciación"
  +" con el resto de sitios, pero en este caso minimizando la carga visual y cognitiva del usuario.<br><br> No hay duda de que los diseños simples tienen atractivo,"
  +" son diferentes, y esto puede ser utilizado en estrategias de venta.<br><br> Pero no por esto debemos eludir la realidad de que trabajamos con sistemas complejos"
  +" y con usuarios cuyo principal objetivo no es la simplicidad. Están dispuestos a asumir la complejidad, siempre y cuando no se vean superados.", 
  
  //sexto elemento
  "La deconstrucción, o el desmontaje por medio del análisis y la búsqueda de ambigüedades o contradicciones, lo deconstruido, en este marco ,queda desmontado"
  +"o desecho .<br><br>",

  /*+"En la literatura impresa encontramos infinidad de prácticas que contravienen el pensamiento no lineal que caracteriza a nuestras estructuras y sistemas"
  +" de navegación online.  La asignación de lugares específicos a ciertos elementos, o el simple hecho de recurrir a más información visual de la que"
  +" normalmente se tiene en cuenta, es una herencia retórica del texto impreso (Landow; 1995), el cual es útil para una exploración secuencial del"
  +" contenido pero no tanto para estructurales hipertextuales e hipermedia.",*/
  
  //septimo elemento
  "Si por un momento pensáramos que nos fueran a cobrar por cada píxel que ocupamos en la pantalla, seguramente nos olvidaríamos de ciertos elementos que"
  +" acostumbramos a colocar en nuestras páginas.<br><br> Esto no quiere decir, como decíamos antes, que tengamos que reducir todas las páginas a la mínima expresión."
  +" Todo depende de las características, objetivos y necesidades de nuestros usuarios.<br><br> Pero si prescindimos de un elemento, y el cambio no afecta a la comprensión"
  +" del usuario, entonces su presencia no era necesaria.<br><br>",
  
  /*+" Si valoramos cada elemento del diseño desde la perspectiva del usuario, y entendemos que hay una relación directa entre dichos elementos y la tasa de éxito,"
  +" se puede extraer todo aquello que no resulta relevante y que, incluso, puede distraer y desviar la atención del usuario.",*/
  
  //octavo elemento
  "Esta categórica frase inicial, defendida en diferentes ámbitos del saber, encuentra su sentido en nuestras explicaciones sobre la simplicidad.<br><br> Todo es predispuesto"
  +" en nuestras interfaces porque está dotado de significado y funcionalidad, aportando información al usuario, orientando y canalizando su interacción.<br><br>"

  +" Incluso la ausencia de información también está aportando significado. Es el arte de no decir nada diciendo algo (Watzlawick, Bavelas y Jackson; 1997) o la perspectiva"
  +" de que nada es algo importante (Maeda; 2006).",
  
  //noveno elemento
  "El canal visual es el sentido más intensamente utilizado en nuestra vida cotidiana y, como no podía ser de otra forma, en el uso de aplicaciones interactivas.<br><br> Si definimos"
  +" la interfaz como la superficie de encuentro entre usuarios y aplicación, debemos entender que su diseño gráfico será el que condicione, desde el primer contacto, la fluidez"
  +" interactiva entre ambos, la usabilidad de la aplicación y la consecuente experiencia del usuario.<br><br>",

 /* +" Dado que el diseño centrado en el usuario requiere conocer al usuario - sus necesidades, habilidades, contexto, entorno, objetivos y motivaciones -, el diseño de interfaces"
  +" gráficas exige conocer “los ojos del usuario”, o más correctamente, cómo las personas percibimos visualmente (Hassan-Montero; 2007b).",*/

  //decimo elemento
  "Diseñar productos interactivos no es una tarea fácil. No al menos cuando pretendemos que satisfagan las necesidades, expectativas y deseos de sus destinatarios, y se adapten"
   +"a su contexto y naturaleza.<br><br> En el “diálogo” interactivo – o “intercambio de monólogos” (Norman; 2007) - que se produce entre usuarios y aplicaciones software, la complejidad"
   +" de los primeros añade inevitablemente un alto grado de incertidumbre al proceso de diseño de los segundos.<br><br>",
   
   /*+"Entre los medios de que dispone un diseñador para reducir dicha incertidumbre, uno de los principales es el conocimiento empírico que la psicología nos ofrece sobre la cognición."
   +" Adentrarnos en el estudio de la psicología no es un camino sin obstáculos, debido a que existen multitud de teorías que ofrecen diferentes visiones y modelos sobre la mente, y"
   +" que no siempre son compatibles. No obstante es innegable que cuanto más conozcamos - por poco que sea - acerca de cómo las personas adquieren, interiorizan, procesan o exteriorizan"
   +" información, más acertadas resultarán las decisiones que tomemos sobre el diseño, disminuyendo el esfuerzo requerido para su uso.",*/
  
   //decimo primero elemento
   "Las personas estamos constantemente percibiendo información, algo que no tendría demasiada utilidad si no fuéramos capaces de registrarla y almacenarla para su posterior uso.<br><br> Cuando"
   +" vimos el tema de la percepción visual ya adelantábamos que no todo lo que vemos supera el filtro de nuestra atención visual. Del mismo modo, no todo lo que supera ese primer filtro"
   +" termina siendo almacenado."

   /*+"La memoria humana se compone de dos sistemas o almacenes funcionalmente diferentes, llamados memoria operativa (a corto plazo) y memoria a largo plazo(Sperling; 1960)(Cowan;1988,1999)"
   +" (Baddeley; 2001). La memoria operativa – estrechamente relacionada con nuestra consciencia - es la que utilizamos en tareas como el razonamiento o la comprensión, y se caracteriza por"
   +" su capacidad limitada y su temporalidad. La memoria a largo plazo, como su nombre indica, es un almacén más estable y duradero en el tiempo, además de tener una capacidad ilimitada "
+" o al menos con unos límites desconocidos."*/,'<iframe width="650" height="300"src="https://www.youtube.com/watch?v=A961f9IMSWU"></iframe><a href="https://www.youtube.com/watch?v=A961f9IMSWU" target="_blank">Link del video</a>'];

let b = images2.length;

//rellenar galeria
for(let a in images2){

gale.innerHTML+=`<div id="box">
<img id="pic${a}" class="pic" src="./images/${images2[a]}" alt="">
</div>`;
}

//sombrear elemento proximo
function sombrearNext(){
    
    let p = document.getElementById(`pic${a}`);
    console.log(p);
    p.style.border="5px solid gray";

    if(a>0){
        
     let p2 = document.getElementById(`pic${a-1}`);
     p2.style.border="none";
    }
}

//sombrear elemento previo
function sombrearPrev(){
    
    let p = document.getElementById(`pic${a-1}`);
    console.log(p);
    p.style.border="5px solid gray";

    if(a>0){
        
     let p2 = document.getElementById(`pic${a}`);
     p2.style.border="none";
    }
}

//proximo elemento
function nextImg(){ 
    let pic = document.getElementById("pic");

     img.src=`./images/${images[i]}`;
     text.innerHTML=`<h2>${titulos[i]}</h2><p>${textos[i]}</p>`;
     let un = images.indexOf(images[i]);

     {
        /* uno= img.src;
          let uno2 = uno.substring(uno.length , uno.length-5),
         dos = pic.src,
         dos2 = dos.substring(dos.length , dos.length-5);

         if(uno2 == dos2){
             pic.style.border="5px solid blue";
         }*/

         
   // i<images.length-1? i++: i=images.length-1;
        }

    if(i<images.length){
     
        sombrearNext();

        if(i<images.length-1){

        i++; 
        a++;

        }

    }else{
        i=images.length-1
    }
        
}

//elemento previo
function prevImg(){

    sombrearPrev();
    
    if(i==0){
        i=0;
    }else{
        i--;
        a--;
    }

    img.src=`./images/${images[i]}`;
    text.innerHTML=`<h2>${titulos[i]}</h2><p>${textos[i]}</p>`;
   
    /*let uno = images.indexOf(images[i]);
    console.log(uno);*/

}

//eventos de flecha
document.body.onkeyup = (event)=>{
    let value = event.keyCode;

    value==39 || value==38? nextImg():null;
    value==37 || value==40? prevImg(): null;

    }


