// Skapa section elemets
var section1 = document.createElement("section");
var section2 = document.createElement("section");

// Först section elementet
for(var i = 1; i <= 5; i++){
    var sectionOneDiv = document.createElement("div");
    var sectionOneDivH1 = document.createElement("h1");
    var green = 255 - (20 * i);
    sectionOneDiv.style = "text-align: center; background-color: rgba(0, " + green + ", 200, 0.5);";
    sectionOneDivH1.style = "font-size: "+ i +"5px;";
    sectionOneDivH1.innerHTML = "Rad " + i;
    sectionOneDiv.appendChild(sectionOneDivH1);
    section1.appendChild(sectionOneDiv);
}


// Andra section elementet
var sectionTwoDiv = document.createElement("div");
sectionTwoDiv.style = "border: 1px solid black; display: flex; justify-content: space-evenly; padding-bottom: 50px; padding-top: 50px;";
for(var divIndex = 0; divIndex < 3; divIndex++){
    console.log("Section" + divIndex);
    var sectionTwoDivDiv = document.createElement("div");
    sectionTwoDivDiv.style = "background-color: rgb(141, 98, 240, 0.7); padding: 8px; width: 50px;";
    // Första listan i section 2
    if(divIndex == 0){
        for(var i = 0; i < 10; i++){
            sectionTwoDivDivText = document.createElement("div");
            sectionTwoDivDivText.style ="text-align: left;"
            // Om jämt siffra visa svart färg annars vit färg
            // i % 2 ---> ojämn siffra eftersom i % 2 == 1
            if((i % 2 && i < 4) || (i % 2 && i > 4)){
                sectionTwoDivDivText.style.background = "white";
                sectionTwoDivDivText.style.color = "black";
            }
            else if(i == 4)
            {
                sectionTwoDivDivText.style.background = "none";
                sectionTwoDivDivText.style.color = "white ";
            }
            else{
                sectionTwoDivDivText.style.background = "black";
                sectionTwoDivDivText.style.color = "white";
            }
            // Skriver siffta i div
            sectionTwoDivDivText.innerHTML = i;
            //  Lägg till text i listan
            sectionTwoDivDiv.appendChild(sectionTwoDivDivText);
        }
    }
    // Andra listan i section 2
    else if(divIndex == 1){
        for(var i = 9; i >= 0; i--){
            sectionTwoDivDivText = document.createElement("div");
            sectionTwoDivDivText.style ="text-align: center;"
            // Om jämt siffra visa svart färg annars vit färg
            // i % 2 ---> ojämn siffra eftersom i % 2 == 1
            if((i % 2 && i > 8) || (i % 2 && i < 8)){
                sectionTwoDivDivText.style.background = "white";
                sectionTwoDivDivText.style.color = "black";
            }
            else if(i == 8)
            {
                sectionTwoDivDivText.style.background = "none";
                sectionTwoDivDivText.style.color = "white ";
            }
            else{
                sectionTwoDivDivText.style.background = "black";
                sectionTwoDivDivText.style.color = "white";
            }
            // Skriver siffta i div
            sectionTwoDivDivText.innerHTML = i;
            //  Lägg till text i listan
            sectionTwoDivDiv.appendChild(sectionTwoDivDivText);
        }
    }
    // Tredje listan i section 2
    else if(divIndex == 2){
        var siffrorArray = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
        for(var i = 1; i <= 10; i++){
            sectionTwoDivDivText = document.createElement("div");
            sectionTwoDivDivText.style ="text-align: right;"
            // Om jämt siffra visa svart färg annars vit färg
            // i % 2 ---> ojämn siffra eftersom i % 2 == 1
            if((i % 2 && i < 6) || (i % 2 && i > 6)){
                sectionTwoDivDivText.style.background = "black";
                sectionTwoDivDivText.style.color = "white";
            }
            else if(i == 6)
            {
                sectionTwoDivDivText.style.background = "none";
                sectionTwoDivDivText.style.color = "black ";
            }
            else{
                sectionTwoDivDivText.style.background = "white";
                sectionTwoDivDivText.style.color = "black";
            }
            // Skriver siffta i div
            sectionTwoDivDivText.innerHTML = siffrorArray[i-1];
            //  Lägg till text i listan
            sectionTwoDivDiv.appendChild(sectionTwoDivDivText);
        }
    }
    sectionTwoDiv.appendChild(sectionTwoDivDiv);
}
section2.appendChild(sectionTwoDiv);


// Lägger till section element i body elementet
document.body.appendChild(section1);
document.body.appendChild(section2);