//configuration parameters for neural network
var config = {
    inputs: 3, //3 inputs, priority, task length and value based on grouping
    hiddenlayers: 1,
    hiddenNodesPerLayer: 10, //reasonable amount to allow for variance in sorting
    outputs: 1 //the boolean return value will be used to determine ordering
    //learning rate and filter training are left to default values of 1 and no filter respectively
};
var nnConstructor = require('neuralnet');

//vars for constructor and the neural network
//this needs to be elsewhere
function createNet() {
    var nn = nnConstructor(config);
    return nn;
}


function resetNN(net, resetPred, resetOut){
    net = net.reset();
    net = initialiseNN(net, resetPred, resetOut);
    return net;
}

function initialiseNN(net, trainPredict, truthOutputs) {
    net.train(trainPredict, truthOutputs);
    console.log(net);
    return net;
}

function predictNN(inputs, net, outputs){
    outputs = net.predictBoolean(inputs);
    return outputs;
}

function updateTrain(net, inputs, truthOut) {
    net.train(inputs, truthOut);
    return net;
}

function viewNetLayers(net) {
    console.log(net.layers);
}

module.exports = {
    config: config,
    nnConstructor: nnConstructor,
    createNet: createNet,
    resetNN: resetNN,
    initialiseNN: initialiseNN,
    predictNN: predictNN,
    updateTrain: updateTrain,
    viewNetLayers: viewNetLayers
}