//console.log(navigator)

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
    if (note == 99){
        b = 225;
        let p5_ = new p5();
        document.getElementById('testelm').style.backgroundColor = `rgb(0,0,${b},1)`;

    }
    }


function noteOff(note) {
    console.log(`note:${note} //off`);
    if(note == 64){
        document.getElementById("testelm").innerHTML = "Back to normal"
    }
}