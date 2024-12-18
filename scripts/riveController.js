let Dance;

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
    },
});

export { Dance };