let Dance;
let numHealth;

const riveInstance = new rive.Rive({

    src: '../assets/trex.riv',
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    stateMachines: 'controller',
    onLoad: () => {
        riveInstance.resizeDrawingSurfaceToCanvas();

        let controller_inputs = riveInstance.stateMachineInputs('controller');
        console.log('controller', controller_inputs);
        Dance = controller_inputs.find((item) => item.name === 'Dance');
        numHealth = controller_inputs.find((item) => item.name === 'numHealth');
        numHealth.value = 0;
    },
});

const rave = () => {
    numHealth.value = numHealth.value + 5;
}

setInterval(() => {
    if (numHealth.value > 0) {
        numHealth.value = numHealth.value - 1;
    }
}, 1000);

export { Dance };
export { rave };