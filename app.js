if(navigator.requestMIDIAccess) {
    navigator.requestMIDIACCess().then(success, failure);
}

function success(midiAccess){
    //console.log(midiAccess);
    midiAccess.addEventListener('statechange', updatedDevices);
    const inputs = midiAccess.inputs; 
    //console.log(inputs);

    inputs.forEach((input) => {
        //console.log(input);
        input.addEventListener('midimessage', handleInput);
    })

    
}
function failure(){
    console.log('Could not connect MIDI');
}

function updateDevices(event)
{
    //console.log(event);
    console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacture}, State: ${event.port.state}, Type: ${event.port.type} `);
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
                noteOn(note , velocity);
            } else {
                noteOff(note);
            }
            break;
            case 128:
                noteOff(note);
                break;
    }
}

function noteOn(note, velocity){
    console.log(note, velocity);
}
function noteOff(note){
    console.log(note);
}