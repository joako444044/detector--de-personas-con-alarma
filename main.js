//variables

n_i = -1;
sound = "";
confirm_music = "";
function preload()
{
sound = loadSound("bullshitter_alert.mp3");
}
function setup()
{
canvas = createCanvas(500,500);
video = createCapture(VIDEO);
video.size(500,500);
objetDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("stats").innerHTML = "detectando";
   video.hide();
}
function draw()
{
image(video, 0, 0, 500, 500);
objetDetector.detect(video, gotResult);
}
function modelLoaded()
{
    console.log("modelo cargado");

}
function gotResult(error, result)
{
if(error)
{
    console.log(error);
}else   
{
    console.log(result);
    confirm_music = sound.isPlaying();
    if ((result.length < 1) && (confirm_music == false))
    {
        sound.play();
document.getElementById("stats").innerHTML = "el bebe no esta en la camara";
    }
for (i = 0; i < result.length ; i++)
if ((result[i].label == "person") && (confirm_music == true))
{
    sound.stop()
    n_i = -1
    document.getElementById("stats").innerHTML = "el bebe esta en la camara";
    
}else if(result[i].label != "person")
{
n_i++
if ((n_i >= i) && (confirm_music == false))
{
sound.play();
document.getElementById("stats").innerHTML = "el bebe no esta en la camara";
}
}
}
}

//
//Esta app te podra contactara con personas que te proveran orientasion, o tu podras ser contactado para proveer orientasion sobre cosas cotidianas que no requieren de conosimiento profesional, o certificado la mayoria de veses, por ejemplo puede que alguien nesesite ayuda en cosas como cambiar un apagador, pero no sepas como aserlo, y no tenga a nadie para explicartelo en palabras simples, o tambien pueda que alguien nesesite cambiar una perilla ,pero no logre entender los tutoriales, y nesesite que alguien les diga que estan haciendo mal.
//para eso esta esta app, para que te puedas contactar con algien que te ayude a entender, y/o que te contacten para  poder explicar, y ayudar en esas cosas que sean muy simples para un tutorial pero desconosidas para ti.

//El objetivo de esta app es apoyar a las personas que requieren ayuda en siertas cosas cotidianas,y ayudar a facilitar el aprendisaje de nuevas avilidades.

//En esta app tu te podras registrar de 2 formas, numero 1 es que tu te registras como una persona que esta en busca de conosimiento hacerca de sierto tema, entonses tu buscas el tema en el que nesesitas ayuda, y despues de un momento una persona ayudante te escojera y hara una reunion virtual para ayudarte (podras desactivar el microfono, o la camara en calquier momento). la otra forma numero 2 es que te registres como persona ayudante, cuando te registres se te pedira llenar un curiculo para que la persona que quieres ayudar lo pueda leer y desidir si desea tu ayuda, en el caso de que no desee tu ayuda volveras a tu panel central(tambien los usuarios te podran calificar acorde a que tan bien les ayudaste).
