//console.log(navigator)
let audio = new Audio('sounds/testing.mp3');

if(navigator.requestMIDIAccess) {
    navigator.requestMIDIACCess().then(success, failure);
}

function failure(){
    console.log('Could not connect MIDI');
}

function updateDevices(event)
{
    console.log(event);
}

function success(midiAccess){
    //console.log(midiAccess);
    midiAccess.addEventListener('statechange', updatedDevices);
    const inputs = midiAccess.inputs; 
    console.log(inputs);

    inputs.forEach((input) => {
        //console.log(input);
        input.addEventListener('midimessage', handleInput);
    })

}
function handleInput(input) {
    //console.log(input);
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    console.log(command);
    console.log(note);
    console.log(velocity);

    //console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);

    switch(command) {
        case 144:
            if(velocity > 0){
                noteOn(note);
            } else {
                noteOff(note);
            }
            break;
    }
}
function noteOn(note) {

    console.log(`note:${note} //on`);
    if (note == 64) {
    document.getElementById("testelm").innerHTML = "Note 64 is On"
    }
    if (note == 96) {
        b = 10;
        document.getElementById('testelm').style.backgroundColor = `rgb(0,0,${b},1)`;
    }
    if (note == 90){
        b = 225;
        let p5_ = new p5();
        document.getElementById('testelm').style.backgroundColor = `rgb(0,0,${b},1)`;

    }
    if (note == 99)
    {
        b = 225;
        audiopause();
        let p5_ = new p5();
        console.log(p5_.map(0.5,0,1,0,100));
        document.getElementById('testelm').style.backgroundColor = `rgb(0,0,${b},1)`;
    }
    }


function noteOff(note) {
    console.log(`note:${note} //off`);
    if(note == 64){
        document.getElementById("testelm").innerHTML = "Back to normal"
    }
    if(note == 84) {
        document.getElementById('testelm').style.backgroundColor = `rgb(255,255,255,1)`;
    }
    if(note == 94) {
        audiopause();
    }
}
function audioplay(){
    audio.play();
}
function audiopause(){
    audio.pause();
}

function apicallValue() {
    //lat = '41.878';
    //lon = '-87.629';
    //APIkey = 'abe4d2e4b7080694f170017c8e38a045'
    //units = 'imperial';
    //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&uints=${units}`, //hardcode everything
    apikey = '8c7dc264ab34e705e3e68e53ff44a3c02bef1b4189756db57ae750d949fabdae';
    search = 'cat';

 $.ajax({
     type: 'GET',
     //GET POST
     datatype: 'json',
     //url: 'http://api.open-notify.org/iss-now.json',
     //url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&uints=${units}`,
     url: `https://serpapi.com/search.json?q=${search}&tbm=isch&ijn=0&api_key=${apikey}`,
     async: false,
     crossDomain: true,
     complete: function (data) {

         if (response.readyState == 4 && response.status == 200) {
             console.log(response);
            // Lat == response.responseJSON.iss_position.latitude;
             //Long == response.responseJSON.iss_position.longitude;
           //  temp = response.responseJSON.main.temp;
            // desc = response.responseJSON.weather[0].description; //weather is in the array
            // console.log(desc);
             //console.log(temp);
             //console.log(Lat);
             //console.log(Long);


         /*if (data.readyState == 4 && data.status == 200) {
             console.log(data);
             Lat == data.responseJSON.iss_position.latitude;
             Long == data.responseJSON.iss_position.longitude;*/
             //
             //console.log(remap(Lat));
             //console.log(remap(Long));
     
         }
     }
 });
}