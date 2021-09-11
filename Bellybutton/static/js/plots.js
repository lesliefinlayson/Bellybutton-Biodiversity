function buildMetadata(sample){
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample){
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array.
    var samples = data.samples;
    //Create a variable that filters the samples for the object with the desired sample number.
    var resultsArray = samples.filter(function(data){
      return data.id === sample;
    })
    //  5. Create a variable that holds the first sample in the array.
    var result = resultsArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
 
     //build bubble chart
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      hovermode: "closest",
      xaxis: {title: "OTU ID"},
      margin: {t: 30}
    }

    var bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
        }
      }
    ];

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  })
}



   

 //  var yticks = otu.ids.slices(0,10).map(function(otuID) {
     //return `OTU ${otuID}`;
   //}).reverse();


    

  

function init() {
  console.log("hello world")


  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then(function(data) {
    console.log(data);
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
      .append("option")
      .text(sample)
      .property("value", sample);
    })

    //Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    console.log(firstSample);
    buildCharts(firstSample);
    buildMetadata(firstSample);

  })
}  
   
    
 // });
//}

// Initialize the dashboard
init()

//function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  //buildMetadata(newSample);
  //buildCharts(newSample);
  
//}

// Demographics Panel 
//function buildMetadata(sample) {
  //d3.json("samples.json").then((data) => {
    //var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    //var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    //var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    //var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    //PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    //Object.entries(result).forEach(([key, value]) => {
      //PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    //});

  //});
//}

// 1. Create the buildCharts function.  cppying to line 5
//function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  //d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    //var samples = data.samples;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    //var resultsArray = samples.filter(function(data){
      //return data.id === sample;
   // })

    //  5. Create a variable that holds the first sample in the array.
    //var result = resultsArray[0];


    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    //var otu_ids = result.otus_ids
    //var otu_labels = result.otu_labels;
    //var sample_values = result.sample_values;

   //build bubble chart
   //var bubbleLayout = {
     //title: "Bacteria Cultures Per Sample",
     //hovermode: "closest",
    // xaxis: {title: "OTU ID"},
    // margin: {t: 30}
   //}
  // var bubbleData = [
     //{
      // x: otu_ids,
      // y: sample_values,
      // text: otu_labels,
      // mode: "markers",
      // marker: {
         //size: sample_values,
         //color: otu_ids,
        // colorscale: "Earth"
       //}
     //}
   //];

   //Plotly.newPlot("bubble, bubbleData, bubbleLayout");

 //  var yticks = otu.ids.slices(0,10).map(function(otuID) {
     //return `OTU ${otuID}`;
   //}).reverse();

