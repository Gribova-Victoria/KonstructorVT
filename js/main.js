
//Для загрузки файлов из папки
var element = document.getElementById("rabochaja-oblast");
var numberOfChildren = element.getElementsByTagName('*').length
let input = document.getElementById('input');
let preview = document.getElementById('preview');
const handleFiles = () => {
    fileSxema = input.files[0]
    for(let i = 0; i < input.files.length; i++){
        let img = document.createElement("img");
        let file = input.files[i];
        
        if(!/image/i.test(file.type))
            continue;
        
        img.file = file;
        let reader = new FileReader();
        const setA = aImg => e => aImg.src = e.target.result;
        reader.onload = setA(img);
        reader.readAsDataURL(file);
        preview.appendChild(img);

    }
}
var element1 = document.getElementById("rabochaja-oblast2");
var numberOfChildren1 = element1.getElementsByTagName('*').length
let input1 = document.getElementById('input1');
let preview1 = document.getElementById('preview1');
const handleFiles1 = () => {
   
    for(let i = 0; i < input1.files.length; i++){
        let img1 = document.createElement("img1");
        let file = input1.files[i];
        
        if(!/image/i.test(file.type))
            continue;
        
        img1.file = file;
        let reader1 = new FileReader1();
        const setA = aImg => e => aImg.src = e.target.result;
        reader1.onload = setA(img1);
        reader1.readAsDataURL(file);
        preview1.appendChild(img1);

    }
}
var imgInput = document.getElementById("fileInpuImg");
const isNotWebpOrAvif = (str) => /.+\.(?!webp|avif)/i.test(str)
input.addEventListener('change', handleFiles, false);
/*const isNotWebpOrAvif1 = (str) => /.+\.(?!webp|avif)/i.test(str)
input1.addEventListener('change', handleFiles1, false);*/

let names = [];
let fileOb = document.getElementById("file");
//отображение фото
function loadImages(i){
    i = i || 1;
    var img = new Image();    
    img.onload = function(){
    preview.appendChild(img)
      loadImages(++i);
    }
    img.className = 'lightbox';
    img.id = 'img1';
    
}
//отображение фото
function loadImages1(i){
  i = i || 1;
  var img1 = new Image();    
  img1.onload = function(){
  preview1.appendChild(img1)
    loadImages(++i);
  }
  img1.className = 'lightbox';
  img1.id = 'image';
  
}

loadImages1();
loadImages();
//Получение имен загруженных файлов

/*for(var i = 0; i < fileOb[0].files.length; i++){
      names.push(fileOb[0].files.item(i).name);
    }
let sFuncText = document.body.querySelectorAll('.item');

for (let i = 0; i < names.length; i++) {
  sFuncText[i].innerHTML = names[i];
}
*/

var x = document.getElementById("gameCanvas");
var offsetX = x.offsetLeft;
var offsetY = x.offsetTop;
x.addEventListener('click', handleClick, false);

var coords = [];
//функция определения координат клика 
function handleClick(e) {
  mouseX = parseInt(e.clientX - offsetX);
  mouseY = parseInt(e.clientY - offsetY);  
  //добавление координат в массив
  coords.push([mouseX, mouseY]);
  document.getElementById("results").innerHTML = "Вы нажали в точку: " + JSON.stringify(coords);
  
}
/*function lenArray()
{
  if (coords.length > 4 && coords.length < 4) {
  
    document.getElementById("ActiveBtn").disabled = true;
  }

}*/
//Функция очищеия массива
function clearAr(){
  coords = [];
  document.getElementById("results").innerHTML = "Вы нажали в точку: " + JSON.stringify(coords);
  context.clearRect(0, 0, canvas.width, canvas.height);
}

var sformObl = document.getElementById("ActiveBtn");
sformObl.addEventListener('click', drawRect,false);
var canvas = document.getElementById('gameCanvas');
const context = canvas.getContext("2d");
//Функция отрисовки области по полученым координатам
function drawRect(){
  if (coords.length > 4 && coords.length < 4) {
  
    document.getElementById("ActiveBtn").setAttribute('disabled','disabled');
  }
  else{
    if (coords && coords.length > 0){
      for (var i = 0; i < coords.length; i++) {
                    if (i == 0) context.moveTo(coords[i][0], coords[i][1]);
                    else context.lineTo(coords[i][0], coords[i][1]);
                }
      context.closePath();    //  закрываем путь
      context.strokeStyle = "#2e86de";
    context.fillStyle = "#4bcffa";
      context.fill();
      context.stroke();
      
  }
  document.getElementById("ActiveBtn").removeAttribute("disabled");}
}

//функция определения координат клика 
function getClickXY(event)
  {
    
    var clickX = (event.layerX == undefined ? event.offsetX : event.layerX) + 1;
    var clickY = (event.layerY == undefined ? event.offsetY : event.layerY) + 1;
   
  }

//ыпадающий список для привязки 
function show_list() {
  var courses = document.getElementById("courses_id");

  if (courses.style.display == "block") {
      courses.style.display = "none";
  } else {
      courses.style.display = "block";
  }
}
window.onclick = function (event) {
  if (!event.target.matches('.dropdown_button')) {
      document.getElementById('courses_id')
          .style.display = "none";
  }
}    
 
