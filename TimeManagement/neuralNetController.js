//configuration parameters for neural network
var config = {
    inputs: 3, //3 inputs, priority, task length and value based on grouping
    hiddenlayers: 1,
    hiddenNodesPerLayer: 10, //reasonable amount to allow for variance in sorting
    outputs: 1 //the boolean return value will be used to determine ordering
    //learning rate and filter training are left to default values of 1 and no filter respectively
};
var nnConstructor = require('neuralnet');

var fs = require('fs'), 
    path = require('path'),
    gPath = path.join(__dirname, "grouped.txt"),
    ugPath = path.join(__dirname, "ungrouped.txt");
console.log(gPath);
console.log(ugPath);
//read grouped file
var grouped = "";
fs.readFile(gPath, {encoding: 'utf-8'}, function(err, data){
    if(!err){
        console.log(data);
        grouped = String(data);
    } else{
        console.log(err);
    }
});
//read ungrouped
var ungrouped ="";
fs.readFile(ugPath, {encoding: 'utf-8'}, function(err, data){
    if(!err){
        console.log(data);
        ungrouped = String(data);
    } else{
        console.log(err);
    }
});
//grouped = reader.readAsText(new File("./grouped.txt"));
//ungrouped = reader.readAsText(new File("./ungrouped.txt"));
//parse the data into arrays
var groupedArr = grouped.split(";");
var ungroupedArr = ungrouped.split(";");

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

function initialiseNN(net, grouped) {
    var trainPredict, truthOutputs;
    if(grouped === 1){
        //pass grouped data
        trainPredict = groupedArr;
        truthOutputs = groupedArr;
        //train net
        net.train(trainPredict, truthOutputs);
        console.log(net);
        return net;
    }else if(grouped === 0){
        //pass ungrouped data
        trainPredict = groupedArr;
        truthOutputs = groupedArr;
        //train net
        net.train(trainPredict, truthOutputs);
        console.log(net);
        return net;
    }

}

function predictNN(inputs, net, outputs){
    outputs = net.predict(inputs);
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
    createNet: createNet,
    resetNN: resetNN,
    initialiseNN: initialiseNN,
    predictNN: predictNN,
    updateTrain: updateTrain,
    viewNetLayers: viewNetLayers
}
/*    config: config,
    nnConstructor: nnConstructor,*/