let btn = document.getElementById('button')

function show() {

    let inputDegreetype = document.getElementById('inputdegree').value;
    if (inputDegreetype == 'C') {
        document.getElementById('outputdegree').innerHTML = '<option value="F" selected>Fahrenheit(&deg;F)</option><option value="K">Kelvin(K)</option>';
    }
    else if (inputDegreetype == 'F') {
        document.getElementById('outputdegree').innerHTML = '<option value="C" selected>Celcius(&deg;C )</option> <option value="K">Kelvin(K)</option>';
    }
    else if (inputDegreetype == 'K') {
        document.getElementById('outputdegree').innerHTML = '<option value="C">Celcius(&deg;C )</option><option value="F" selected>Fahrenheit(&deg;F)</option>y';
    }
}

btn.onclick = () =>{
    let inputDegree = parseInt(document.getElementById('getDegree').value)    
    let inputDegreetype = document.getElementById('inputdegree').value;
    let outputDegreetype = document.getElementById('outputdegree').value;
    
    let result = "";

    switch(inputDegreetype)
    {
        case "C":
        result = CelcuisTo(inputDegree,outputDegreetype);
        break;
        case "K":
        result = KelvinTo(inputDegree,outputDegreetype);
        break;
        case "F":
        result = FahrenheitTo(inputDegree,outputDegreetype);
        break;
    }

    if (isNaN(inputDegree)) {
        document.getElementById('convertedDegree').textContent = 'ERROR..!';
        document.getElementById('convertedUnit').textContent = '';
        document.getElementById('degree').innerHTML = "";
        return;
    }

    document.getElementById('convertedDegree').innerHTML = result.toFixed(2);
    document.getElementById('convertedUnit').textContent = outputDegreetype;


    if(outputDegreetype=="K")
    document.getElementById('degree').innerHTML = "";
    if(outputDegreetype=="C" || outputDegreetype=="F")
    document.getElementById('degree').innerHTML = "&deg;";

}  

let CelcuisTo = (inputDegree,outputDegreetype) => {
    let outputdegree = "";
    switch(outputDegreetype)
    {
        case "C":
        outputdegree = inputDegree;
        break;
        case "F":
        outputdegree = eval((inputDegree * (9 / 5)) + 32);
        break;
        case "K":
        outputdegree = eval((inputDegree + 273.15));
        break;
    }
    return outputdegree;
}

let KelvinTo = (inputDegree,outputDegreetype) => {
    let outputdegree = "";
    switch(outputDegreetype)
    {
        case "C":
        outputdegree = eval((inputDegree - 273.15));
        break;
        case "F":
        outputdegree = eval((inputDegree - 273.15) * (9 / 5) + 32);
        break;
        case "K":
        outputdegree = inputDegree;
        break;
    }
    return outputdegree;
}

let FahrenheitTo = (inputDegree,outputDegreetype) => {
    let outputdegree = "";
    switch(outputDegreetype)
    {
        case "C":
        outputdegree = eval((inputDegree - 32) * (5 / 9));
        break;
        case "F":
        outputdegree = inputDegree;
        break;
        case "K":
        outputdegree = eval((inputDegree + 459.67) * (5 / 9));
        break;
    }
    return outputdegree;
}