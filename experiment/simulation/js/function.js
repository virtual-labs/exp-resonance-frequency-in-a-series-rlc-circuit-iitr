var cont = document.getElementById("container")
var check = document.getElementById("check")
var add = document.getElementById("add")
var reset = document.getElementById("reset")
var calculate = document.getElementById("calculate")
var plot = document.getElementById("plot")
var myPlot = document.getElementById("myPlot")
var MCB_image = document.getElementById("mcb");
var MCB = document.getElementById("mcb_switch");
// label starts from here for all the components 
var MCB_Positive = document.getElementById("mcb_p")
var MCB_Negative = document.getElementById("mcb_n")
var Voltmeter_Positive = document.getElementById("p_v")
var Voltmeter_Negative = document.getElementById("n_v")
var Ammeter_Positive = document.getElementById("p_a")
var Ammeter_Negative = document.getElementById("n_a")
var InductorPositive = document.getElementById("i_p")
var InductorNegative = document.getElementById("i_n")
var ResistorPositive = document.getElementById("rh_p")
var ResistorNegative = document.getElementById("rh_n")
var CapacitorPositive = document.getElementById("c_n")
var CapacitorNegative = document.getElementById("c_p")
var FunctGeneA = document.getElementById("fg_a");
var FunctGeneB = document.getElementById("fg_b");
var FunctGeneC = document.getElementById("fg_c");
var FunctGeneD = document.getElementById("fg_d");
// label ends here
var FunctionGene = document.getElementById("fg_on")
var FunctGeneDis = document.getElementById("fg_dis")
var FunctG_image = document.getElementById("transformer")
var FreqSlider = document.getElementById("RL")
var AmmeterNeedle = document.getElementById("P_A")
var VoltmeterNeedle = document.getElementById("P_V")
var vtable = document.getElementById("valTable")
var fr = document.getElementById("fr");
var QF = document.getElementById("QF");
var verify = document.getElementById("verify");
var mcb_state = 0;
var funcGen_state = 0;
var Mamm = 0;
var Mvol = 0;
var flagS = 1;
var flags2 = 0;
var flags3 = 0;
var flags4 = 0;
var flags5 = 0;
var flags6 = 0;
var flags7= 0;
var index = 1;
var I1Val = []
var I2Val = []

var rindex = 0;

var ValidConn = [MCB_Positive, FunctGeneA, MCB_Negative, FunctGeneB, FunctGeneC, Voltmeter_Positive, FunctGeneD, Voltmeter_Negative]
function isConnected(node1, node2) {
    if ((instance.getConnections({ source: node1, target: node2 })[0] != undefined) || (instance.getConnections({ source: node2, target: node1 })[0] != undefined)) {
        return true;
    }
    else {
        return false;
    }
}
function numConnect(node) {
    
    return instance.getConnections({ source: node }).length + instance.getConnections({ target: node }).length
}

const instance = jsPlumb.getInstance({
    container: cont
})

instance.bind("ready", function () {

    instance.registerConnectionTypes({
        "positive": {
            paintStyle: { stroke: "rgb(97,106,229)", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "rgb(97,106,229)", strokeWidth: 3.5 }
        },
        "negative": {
            paintStyle: { stroke: "rgb(229, 97, 97)", strokeWidth: 2.5 },
            hoverPaintStyle: { stroke: "rgb(229, 97, 97)", strokeWidth: 3.5 }
        }
    })
    instance.addEndpoint([Voltmeter_Positive, Ammeter_Positive, MCB_Positive,ResistorPositive, CapacitorPositive, FunctGeneA], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 1,
        connectionsDetachable: true

    })

 instance.addEndpoint([InductorPositive],
   {
     endpoint: "Dot",
     anchor: ["Center"],
     isSource: true,
     isTarget: true,
     paintStyle: { fill: "rgb(97,106,229)" },
     connectionType: "positive",
     maxConnections: 1,
     connectionsDetachable: true,
     connector:["StateMachine", {curviness: -80}]
   }
 );

    instance.addEndpoint([FunctGeneC], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 2,
        connectionsDetachable: true
    })
    instance.addEndpoint([FunctGeneB,Voltmeter_Negative, Ammeter_Negative, MCB_Negative, InductorNegative, ResistorNegative, CapacitorNegative], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)" },
        connectionType: "negative",
        maxConnections: 1,
        connectionsDetachable: true
    })

 instance.addEndpoint([InductorNegative],
   {
     endpoint: "Dot",
     anchor: ["Center"],
     isSource: true,
     isTarget: true,
     paintStyle: { fill: "rgb(229, 97, 97)" },
     connectionType: "negative",
     maxConnections: 1,
     connectionsDetachable: true,
     connector:["StateMachine",{curviness: -110}]
   }
 );
    instance.addEndpoint([FunctGeneD], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)" },
        connectionType: "negative",
        maxConnections: 2,
        connectionsDetachable: true
    })

})







         //function for the nodes to disconnect from its position


function disconnect(num) {

    let nodes_list = [MCB_Positive,MCB_Negative,Voltmeter_Positive,Voltmeter_Negative,Ammeter_Positive,Ammeter_Negative,ResistorPositive,ResistorNegative,InductorPositive, 
                       InductorNegative,CapacitorPositive,CapacitorNegative,FunctGeneA,FunctGeneB,FunctGeneC,FunctGeneD];              
                       instance.deleteConnectionsForElement(nodes_list[num]);  

             }




FreqSlider.oninput = function () {

    flagS = 1;
    FunctGeneDis.value = "Fq = "+FreqSlider.value+"KHz";
   
    calculateVars()
    updateMeters()
    add.disabled = false;

  // const FreqSlider = document.getElementById("FreqSlider");
  
   // let previousValue= FreqSlider.value;

  //  FreqSlider.addEventListener("input",() => {
                         
       // if(FreqSlider.value < previousValue ) {

        //    FreqSlider.value = previousValue;

     //   }  else {

          //  previousValue = FreqSlider.value;
      //  }
   
   // });

    if(FreqSlider.value == 8) {

        FreqSlider.style.pointerEvents='none';
    }

}

function conjNum(num) {

    return Math.abs(num - 1);
}

function ToLoads(ammNode, funNode) {

    let inductor = [InductorPositive, InductorNegative]
    let resistor = [ResistorPositive, ResistorNegative]
    let capacitor = [CapacitorPositive, CapacitorNegative]
    let loadsList = [inductor, resistor, capacitor]
    let arrange = []
    let index = [inductor, resistor, capacitor]

    for (let i = 0; i < loadsList.length; i++) {

        if (isConnected(loadsList[i][0], ammNode)) {
            arrange.push(loadsList[i][0])
            arrange.push(loadsList[i][1])
            index.splice(index.indexOf(loadsList[i]), 1)
        }
        else if (isConnected(loadsList[i][1], ammNode)) {

            arrange.push(loadsList[i][1])
            arrange.push(loadsList[i][0])
            index.splice(index.indexOf(loadsList[i]), 1)
        }
    }

    for (let i = 0; i < loadsList.length; i++) {

        if (isConnected(loadsList[i][0], funNode)) {
            arrange.push(loadsList[i][1])
            arrange.push(loadsList[i][0])
            index.splice(index.indexOf(loadsList[i]), 1)
        }
        else if (isConnected(loadsList[i][1], funNode)) {

            arrange.push(loadsList[i][0])
            arrange.push(loadsList[i][1])
            index.splice(index.indexOf(loadsList[i]), 1)
        }
    }

    temp = arrange.splice(2, 3)
    arrange.push(index[0][0]);
    arrange.push(index[0][1]);
    arrange = arrange.concat(temp)

    if ((isConnected(arrange[1], arrange[2])) && (isConnected(arrange[3], arrange[4]))) {
        return true
    }
    else if ((isConnected(arrange[1], arrange[3])) && (isConnected(arrange[2], arrange[4]))) {
        return true
    }
    else {
        return false
    }
}

function staticConn() {
    let VarOut = [FunctGeneC, FunctGeneD]
    let Ammeter = [Ammeter_Positive, Ammeter_Negative]

    let conn = 0;
    for (let i = 0; i < ValidConn.length; i++) {
        if (i % 2 == 0) {
            if (isConnected(ValidConn[i], ValidConn[i + 1])) {
                conn = conn + 1;
            }
        }
    }

    for (let i = 0; i < ValidConn.length; i++) {
        if (i % 4 == 0) {
            if (isConnected(ValidConn[i], ValidConn[i + 3])) {
                conn = conn + 1;
            }
            if (isConnected(ValidConn[i + 1], ValidConn[i + 2])) {
                conn = conn + 1;
            }
        }
    }

    console.log(conn);

    for (let i = 0; i < 2; i++) {
        if (isConnected(Ammeter[i], VarOut[i])) {
            if (ToLoads(Ammeter[conjNum(i)], VarOut[conjNum(i)])) {
                return true;
            }
        }
        else if (isConnected(Ammeter[i], VarOut[conjNum(i)])) {
            if (ToLoads(Ammeter[conjNum(i)], VarOut[i])) {
                return true;
            }
        }
    }
}

/*

check.onclick = function checkConn() {
    flags2 = 1;
    if (staticConn()) {
        MCB.disabled = false;
        window.alert("Right connections!");
       check.disabled=true;

       instance.addEndpoint([Voltmeter_Positive, Ammeter_Positive, MCB_Positive, InductorPositive, ResistorPositive, CapacitorPositive, FunctGeneA,], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 0,
        connectionsDetachable: true
    })
    instance.addEndpoint([FunctGeneC], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(97,106,229)" },
        connectionType: "positive",
        maxConnections: 0,
        connectionsDetachable: true
    })
    instance.addEndpoint([FunctGeneB,Voltmeter_Negative, Ammeter_Negative, MCB_Negative, InductorNegative, ResistorNegative, CapacitorNegative], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)" },
        connectionType: "negative",
        maxConnections: 0,
        connectionsDetachable: true
    })
    instance.addEndpoint([FunctGeneD], {
        endpoint: "Dot",
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        paintStyle: { fill: "rgb(229, 97, 97)" },
        connectionType: "negative",
        maxConnections: 0,
        connectionsDetachable: true
    })

         document.getElementById("mcb_p").style.pointerEvents='none';
         document.getElementById("mcb_n").style.pointerEvents='none';
         document.getElementById("p_v").style.pointerEvents='none';
         document.getElementById("n_v").style.pointerEvents='none';
         document.getElementById("p_a").style.pointerEvents='none';
         document.getElementById("n_a").style.pointerEvents='none';
         document.getElementById("rh_p").style.pointerEvents='none';
         document.getElementById("rh_n").style.pointerEvents='none';
         document.getElementById("i_p").style.pointerEvents='none';
         document.getElementById("i_n").style.pointerEvents='none';
         document.getElementById("c_n").style.pointerEvents='none';
         document.getElementById("c_p").style.pointerEvents='none';
         document.getElementById("fg_a").style.pointerEvents='none';
         document.getElementById("fg_b").style.pointerEvents='none';
         document.getElementById("fg_c").style.pointerEvents='none';
         document.getElementById("fg_d").style.pointerEvents='none';

    }
    
    else if (instance.getConnections().length == 0) {
        
        window.alert("Please make the connections!");

    } else {

        window.alert("Invalid Connections!");
        window.location.reload();
        console.log(arrChk);
        console.log(ThreeNode);
    }
}

function isConnected(node1, node2) {
    if ((instance.getConnections({ source: node1, target: node2 })[0] != undefined) || (instance.getConnections({ source: node2, target: node1 })[0] != undefined)) {
        return true;
    }
    else {
        return false;
    }
}

function rotate_element(deg, elemnt) {
    elemnt.style.transform = "rotate(" + deg + "deg)";
}

function setZero() {
    rotate_element(0, AmmeterNeedle);
    rotate_element(0, VoltmeterNeedle);
}


*/

function calculateVars() {

    let freqList = [0, 5, 10, 15, 20, 23];
    let currList = [0.95,0.73,0.65,0.58,0.45,0];

    Mamm = currList[freqList.indexOf(parseInt(FreqSlider.value))]
    Mvol = 10
}
 
//   I have a nice 

function updateMeters() {
    calculateVars()

    rotate_element(Mamm * (180 / 10), AmmeterNeedle);
    rotate_element(Mvol * (180 / 220), VoltmeterNeedle);

}
MCB.onclick = function () {
    flags3 = 1
    console.log("workgin");
    if (mcb_state == 1) {
        mcb_state = 0
        MCB_image.src = 'images/MCB_off.png'
        MCB.style.transform = "translate(0px, 0px)"
        FunctG_image.src = 'images/function-generator-off.png'
        FunctionGene.disabled = true
        funcGen_state = 0
       
        setZero()
    }
    else if (mcb_state == 0) {
        mcb_state = 1
        MCB_image.src = 'images/MCB_ON.png'
        mcb_switch.disabled= 1;
        MCB.style.transform = "translate(0px, -49px)"
        FunctionGene.disabled = false
        if (funcGen_state == 1) {
            updateMeters()
        }
    }
}

FunctionGene.onclick = function () {
    flags4 = 1
    if (funcGen_state == 1) {
        funcGen_state = 0
        FunctG_image.src = 'images/function-generator-off.png'
        FreqSlider.disabled = true;
        setZero()
    
    }
    else if (funcGen_state == 0) {
        funcGen_state = 1
        FunctG_image.src = 'images/function-generator-on.png'
        FreqSlider.disabled = false;
        if (mcb_state == 1) {
            updateMeters()
        }
    }
}

add.onclick = function AddToTable() {


    // Add button get disabled after we take the reading to the observation table.

          add.disabled = 1;

    if (vtable.rows.length <= 8) {
        flags6 = 1;

        let row = vtable.insertRow(rindex + 1);
        rindex = rindex + 1;
        let SNo = row.insertCell(0);
        let voltage = row.insertCell(1);
        let freqval = row.insertCell(2);   // This is for the Frequency value getting for the table.
        let curval = row.insertCell(3);   //  This is the Curent value getting for the table.

        SNo.innerHTML = rindex;
        voltage.innerHTML = 10;
        curval.innerHTML = Mamm;
        freqval.innerHTML = FreqSlider.value;
       
        I1Val.push(FreqSlider.value);
        I2Val.push(Mamm);

        if ((FreqSlider.value == '3') && (flagS != 0) && (funcGen_state != 0)) {
            vtable.rows[rindex].style.backgroundColor = "yellow";
        }

        if (vtable.rows.length > 8) {
            plot.disabled = false;
        }

    }
}


verify.onclick = function checkUsr() { 

    let marks = 0;

    if (parseFloat(fr.value) == 3) {

        marks = marks+1

        fr.style.backgroundColor = "white";
    }

    else {

        fr.style.backgroundColor = "red";
    }

    if (parseFloat(QF.value) == 2.34) {
        marks = marks + 1
        QF.style.backgroundColor = "white";
    }

    else {
        QF.style.backgroundColor = "red";
    }

    if (marks == 2){
        window.alert("Values are Verified!");
    }

       else if (fr.value == "" &&  QF.value == "" ) {
        window.alert("Please enter the values to verify.");
        fr.style.backgroundColor = "white";
        QF.style.backgroundColor = "white";

    }  else if (parseFloat(fr.value) == 3  )  {
       window.alert("Resonance frequency is correct but the Quality factor is not correct.");
    }  else if(parseFloat(QF.value) == 2.34 ) {
        window.alert("Quality factor is correct but the Resonance frequency is not correct.");
    }

    else {
        window.alert("Incorrect values");
    }

}

window.onload = function setJsPlumb() {
    setTimeout(() => {
        instance.connect({ source: MCB_Positive, target: MCB_Negative });
        instance.deleteEveryConnection();
    }, 50);
}

//  Making graph for the Resonance RLC series


    plot.onclick = function () {

    add.disabled = 1;
    verify.disabled=false;
    if(vtable.rows.length >= 8)  {

    window.scrollTo({
                    
        top:750,
        left:0,
        behaviour:'Smooth'
        
    });

    var frequency = [0,5,10,15,20,25]

    var current= [0.95,0.73,0.65,0.58,0.45,0]
    
    new Chart("myPlot", {
      
      type: "line",
      data: {
        labels: frequency,
        datasets: [{
          label: "(Resonance Frequency vs Current Curve) Graph",
          fill: false,
          lineTension: 0.3,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "blue",
          data:current
        }]
      },
      options: {
        scales: {
          
          yAxes: {
            label:'Current',
             beginAtZero: true,
             title:{
              display:true,
              text:'Current (mA)',
              color:"black"
            }
        },
          
          xAxes:  {
            label:'Frequency',
            beginAtZero: true,
           // type:"linear",
            title:{
              display:true,
              text:'Frequency (KHz)',
              color:"black"
            }
          }
        }
      }
    });

    plot.disabled=1;

}

else {

    window.alert('Please add 8 observation readings in the table');
}
    
}



// flags7 = 1;

// if(vtable.rows.length >= 8) {

// prnt.disabled = false

// var temp1 = document.getElementById("chart-container")
// var temp2 = temp1.innerHTML
// temp1.innerHTML = temp2 

// window.scrollTo({ 

//  top:750,
//  left:0,
//  behavior:'smooth'

// });

// new Chart("myPlot",{
//         type:"line",

//     data:{
//         labels:I1Val,
//        dataset:[{
//           label:"Frequency-Current Characteristics",
//           fill:false,
//           lineTension:0.3,
//           borderColor: "blue",
//           data:I2Val
//        }]
//     },
    
//     options:{

//         scales: {
//             y: {
//                 beginAtZero: true,
//                 title:{
//                     display:true,
//                     text:"Current"
//                 }
//             },

//             x:{
//                 beginAtZero:true,
//                 type:"Linear",
//                 title:{
//                     display:true,
//                     text:"Frequency"
//                 }
//             }
//         }
//     }
// });

// }
// else {
//     window.alert("Please enter atleast 8 observations to the table.")
// }

// }


prnt.onclick = function prntScr(){
    window.print()
}
             //Disconnect function created



// function highlight() {

//     let conn = instance.getConnections();

//     if (conn.length >= 1) {
//         s1.style.color = "black";
//         s2.style.color = "red";

//     }

//     if (flags2 == 1) {
//         s1.style.color = "black";
//         s2.style.color = "black";
//         s3.style.color = "red";
//     }

//     if (flags3 == 1) {
//         s1.style.color = "black";
//         s2.style.color = "black";
//         s3.style.color = "black";
//         s4.style.color = "red";
//     }

//     if ((flags4 == 1)) {
//         s1.style.color = "black";
//         s2.style.color = "black";
//         s3.style.color = "black";
//         s4.style.color = "black";
//         s5.style.color = "red";
//     }

//     if ((flags5 == 1)) {
//         s1.style.color = "black";
//         s2.style.color = "black";
//         s3.style.color = "black";
//         s4.style.color = "black";
//         s5.style.color = "black";
//         s6.style.color = "red";
//     }

//     if (flags6 == 1) {
//         s1.style.color = "black";
//         s2.style.color = "black";
//         s3.style.color = "black";
//         s4.style.color = "black";
//         s5.style.color = "black";
//         s6.style.color = "black";
//         s7.style.color = "red";
//     }

// }

//window.setInterval(highlight, 100);