function info(){
   var modal1 = document.getElementById("modal1-container");
   var modal2 = document.getElementById("modal2-container");
   var modal3 = document.getElementById("modal3-container");
   var modal4 = document.getElementById("modal4-container");
   var modal5 = document.getElementById("modal5-container");
   modal1.style.display = "block";
   document.getElementById('container').style.opacity = 0.4;
   if(modal2.style.display == "block" || modal3.style.display == "block" || modal4.style.display == "block" || modal5.style.display == "block"){
        document.getElementById("modal1-container").style.display = "none";
   }      
}

function closeModal(){
    document.getElementById('modal1-container').style.display = 'none';
    document.getElementById('container').style.opacity = 1;
}

function info2(){
    var modal1 = document.getElementById("modal1-container");
    var modal2 = document.getElementById("modal2-container");
    var modal3 = document.getElementById("modal3-container");
    var modal4 = document.getElementById("modal4-container");
    var modal5 = document.getElementById("modal5-container");
    modal2.style.display = "block";
    document.getElementById('container').style.opacity = 0.4;
    if(modal1.style.display == "block" || modal3.style.display == "block" || modal4.style.display == "block" || modal5.style.display == "block"){
         document.getElementById("modal2-container").style.display = "none";
    }  
}

function closeModal2(){
    document.getElementById('modal2-container').style.display = 'none';
    document.getElementById('container').style.opacity = 1;
}

function info3(){
    var modal1 = document.getElementById("modal1-container");
    var modal2 = document.getElementById("modal2-container");
    var modal3 = document.getElementById("modal3-container");
    var modal4 = document.getElementById("modal4-container");
    var modal5 = document.getElementById("modal5-container");
    modal3.style.display = "block";
    document.getElementById('container').style.opacity = 0.4;
    if(modal1.style.display == "block" || modal2.style.display == "block" || modal4.style.display == "block" || modal5.style.display == "block"){
         document.getElementById("modal3-container").style.display = "none";
    }  
}

function closeModal3(){
    document.getElementById('modal3-container').style.display = 'none';
    document.getElementById('container').style.opacity = 1;
}

function info4(){
    var modal1 = document.getElementById("modal1-container");
    var modal2 = document.getElementById("modal2-container");
    var modal3 = document.getElementById("modal3-container");
    var modal4 = document.getElementById("modal4-container");
    var modal5 = document.getElementById("modal5-container");
    modal4.style.display = "block";
    document.getElementById('container').style.opacity = 0.4;
    if(modal1.style.display == "block" || modal2.style.display == "block" || modal3.style.display == "block" || modal5.style.display == "block"){
         document.getElementById("modal4-container").style.display = "none";
    }  
}

function closeModal4(){
    document.getElementById('modal4-container').style.display = 'none';
    document.getElementById('container').style.opacity = 1;
}

function info5(){
    var modal1 = document.getElementById("modal1-container");
    var modal2 = document.getElementById("modal2-container");
    var modal3 = document.getElementById("modal3-container");
    var modal4 = document.getElementById("modal4-container");
    var modal5 = document.getElementById("modal5-container");
    modal5.style.display = "block";
    document.getElementById('container').style.opacity = 0.4;
    if(modal1.style.display == "block" || modal2.style.display == "block" || modal3.style.display == "block" || modal4.style.display == "block"){
         document.getElementById("modal5-container").style.display = "none";
    }  
}

function closeModal5(){
    document.getElementById('modal5-container').style.display = 'none';
    document.getElementById('container').style.opacity = 1;
}