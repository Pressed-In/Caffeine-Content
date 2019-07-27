//////////// DATA GOES HERE//////////////////

var data1 = [
  {name: "Energy drinks", value: 190.05},
  {name: "Medications (per tablet)", value: 78.63},
  {name: "Coffee (180ml cup)", value: 63.60},
  {name: "Soft drinks (360ml can)", value: 49.29},
  {name: "Tea (180ml cup)", value: 46.67},
  {name: "Chocolate", value: 22.00},
  {name: "Cocoa", value: 13.00},
];


var data2 = [
  {
    "name": "Coffee (180ml cup)",
    "item": "Instant decaffeinated",
    "caffeine": 3
  },
  {
    "name": "Coffee (180ml cup)",
    "item": "Brewed decaffeinated",
    "caffeine": 5
  },
  {
    "name": "Chocolate",
    "item": "Milk chocolate",
    "caffeine": 6
  },
  {
    "name": "Cocoa",
    "item": "Cocoa beverages",
    "caffeine": 13
  },
  {
    "name": "Medications (per tablet)",
    "item": "Dristan",
    "caffeine": 16
  },
  {
    "name": "Medications (per tablet)",
    "item": "Dexatrim",
    "caffeine": 16
  },
  {
    "name": "Chocolate",
    "item": "Small candy bar",
    "caffeine": 25
  },
  {
    "name": "Medications (per tablet)",
    "item": "Anacin",
    "caffeine": 32
  },
  {
    "name": "Medications (per tablet)",
    "item": "Midol",
    "caffeine": 32
  },
  {
    "name": "Medications (per tablet)",
    "item": "Vanquish",
    "caffeine": 33
  },
  {
    "name": "Chocolate",
    "item": "Baking chocolate",
    "caffeine": 35
  },
  {
    "name": "Tea (180ml cup)",
    "item": "Green",
    "caffeine": 35
  },
  {
    "name": "Tea (180ml cup)",
    "item": "Canned ice tea",
    "caffeine": 35
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "Dr. Pepper",
    "caffeine": 40
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "OK Soda",
    "caffeine": 40
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "Mr. Pibb",
    "caffeine": 41
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "Leading colas (regular and diet)",
    "caffeine": 45
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "Mello Yello",
    "caffeine": 53
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "Mountain Dew",
    "caffeine": 54
  },
  {
    "name": "Tea (180ml cup)",
    "item": "Black",
    "caffeine": 70
  },
  {
    "name": "Soft drinks (360ml can)",
    "item": "Jolt Cola",
    "caffeine": 72
  },
  {
    "name": "Energy drinks",
    "item": "28 Energy Drink",
    "caffeine": 80
  },
  {
    "name": "Energy drinks",
    "item": "Red Bull",
    "caffeine": 80
  },
  {
    "name": "Coffee (180ml cup)",
    "item": "Instant",
    "caffeine": 90
  },
  {
    "name": "Energy drinks",
    "item": "Diablo Energy Drink",
    "caffeine": 95
  },
  {
    "name": "Coffee (180ml cup)",
    "item": "Drip brewed",
    "caffeine": 100
  },
  {
    "name": "Energy drinks",
    "item": "Zun Energy Drink",
    "caffeine": 100
  },
  {
    "name": "Medications (per tablet)",
    "item": "Nodoz (i.e., caffeine)",
    "caffeine": 100
  },
  {
    "name": "Coffee (180ml cup)",
    "item": "Percolated",
    "caffeine": 120
  },
  {
    "name": "Energy drinks",
    "item": "6 Hour Power",
    "caffeine": 125
  },
  {
    "name": "Energy drinks",
    "item": "Neurofuel Energy Drink",
    "caffeine": 128
  },
  {
    "name": "Energy drinks",
    "item": "Caffeine Energy Drink",
    "caffeine": 140
  },
  {
    "name": "Energy drinks",
    "item": "Guayaki Empower Mint",
    "caffeine": 140
  },
  {
    "name": "Energy drinks",
    "item": "Monster Energy Drink",
    "caffeine": 160
  },
  {
    "name": "Energy drinks",
    "item": "Ubermonster Energy Brew",
    "caffeine": 160
  },
  {
    "name": "Energy drinks",
    "item": "Venom Black Mamba",
    "caffeine": 160
  },
  {
    "name": "Energy drinks",
    "item": "Speed Energy Drink",
    "caffeine": 186
  },
  {
    "name": "Energy drinks",
    "item": "Java Monster",
    "caffeine": 188
  },
  {
    "name": "Energy drinks",
    "item": "Biggby Iced Coffee",
    "caffeine": 192
  },
  {
    "name": "Energy drinks",
    "item": "Liquid Lightning",
    "caffeine": 200
  },
  {
    "name": "Medications (per tablet)",
    "item": "Excedrin",
    "caffeine": 200
  },
  {
    "name": "Medications (per tablet)",
    "item": "Vivarin (i.e., caffeine)",
    "caffeine": 200
  },
  {
    "name": "Energy drinks",
    "item": "Octane Energy Drink",
    "caffeine": 225
  },
  {
    "name": "Energy drinks",
    "item": "Potencia Energy Drink",
    "caffeine": 250
  },
  {
    "name": "Energy drinks",
    "item": "Starbucks Tall Coffee",
    "caffeine": 260
  },
  {
    "name": "Energy drinks",
    "item": "Cocaine Energy Drink",
    "caffeine": 280
  },
  {
    "name": "Energy drinks",
    "item": "Hardcore Energize Bullet",
    "caffeine": 300
  },
  {
    "name": "Energy drinks",
    "item": "BANG Energy Drink",
    "caffeine": 357
  },
  {
    "name": "Energy drinks",
    "item": "Rage Inferno",
    "caffeine": 375
  },
  // {
  //   "name": "Energy drinks",
  //   "item": "Chameleon Cold Brew Coffee",
  //   "caffeine": 2160
  // }
];

var text = "";

///////////// PIE CHART SVG HERE /////////////

var width1 = 575;
var height1 = 400;
var margin1 = 300;
var thickness1 = 60;
var duration1 = 750;

var radius1 = Math.min(300) / 2 - 5;
var color1 = d3.scaleOrdinal(d3.schemeCategory10);

var svg1 = d3.select("#chart")
.append('svg')
.attr('class', 'pie')
.attr('width', width1)
.attr('height', height1)

var g1 = svg1.append('g')
.attr('transform', 'translate(' + (width1/2) + ',' + (height1/2) + ')');

var arc1 = d3.arc()
.cornerRadius(3)
.innerRadius(radius1*0.65)
.outerRadius(radius1*0.9);

//// LABEL ARC STUFF
            var outerArc = d3.arc()
                .outerRadius(radius1 * 0.9)
                .innerRadius(radius1 * 1);

            g1.append('g').attr('class', 'slices');
            g1.append('g').attr('class', 'labelName');
            g1.append('g').attr('class', 'lines');

//// LABEL ARC END

var pie1 = d3.pie()
.value(function(d) { return d.value; })
.padAngle(.02)
.sort(null);


var path1 = g1.select('.slices').selectAll('path')
.data(pie1(data1))
.enter()
.append("g")
.on("mouseover", function(d) {

      let g = d3.select(this)
        .style("cursor", "pointer")
        .append("g")
        .attr("class", "text-group");
 
          g.append("text")
            .attr("class", "name-text")
            .text('Avg Caffeine (mg):')
            .attr('text-anchor', 'middle')
            .attr('dy', '-1.2em');
  
          g.append("text")
            .attr("class", "value-text")
            .text(""+d.data.value+"")
            .attr('text-anchor', 'middle')
            .attr('dy', '.6em');
    })
  .on("mouseout", function(d) {
      d3.select(this)
        .style("cursor", "none")  
        .select(".text-group").remove();
    })
  .append('path')
  .attr('d', arc1)
  .attr('class', 'pie chart')
  .attr('fill', function(d, i) {
        switch(data1[i].name) {
          case "Energy drinks": return "#50514F";
          case "Medications (per tablet)": return "#F25F5C";
          case "Coffee (180ml cup)": return "#00A896";
          case "Soft drinks (360ml can)": return "#247BA0";
          case "Tea (180ml cup)": return "#70C1B3";
          case "Chocolate": return "#02C39A";
          case "Cocoa": return "#247BA0";
        }
      })

    //(d,i) => color1(i))

  .on("mouseover", function(d, i) {
      var selectthegraphs = $('path').not(this).not(".domain");

      d3.selectAll(selectthegraphs)
        .style("opacity",.5);
        
      d3.select(this)     
        .style("cursor", "pointer")

      console.log(this)

      ///////////// mouseover second chart tests here //////////////

        var id = data1[i].name;

        svg.selectAll(".bar").style("opacity", function(d) {
          return d.name == id ? 1 : 0.15;
        })
        .style("fill", function(d) {
          if (d.name !== id) {return "gray"}
        });

      ///////////// please work lol /////////////////////////

    })
  .on("mouseout", function(d) {
      d3.select(this)
        .style("cursor", "none")  

      var selectthegraphs = $('path').not(this);

      d3.selectAll(selectthegraphs)
                        .style("opacity",1);

      svg.selectAll(".bar").style("opacity", 1).style("fill", function(d, i) {
        switch(data2[i].name) {
          case "Energy drinks": return "#50514F";
          case "Medications (per tablet)": return "#F25F5C";
          case "Coffee (180ml cup)": return "#00A896";
          case "Soft drinks (360ml can)": return "#247BA0";
          case "Tea (180ml cup)": return "#70C1B3";
          case "Chocolate": return "#02C39A";
          case "Cocoa": return "#247BA0";
        }
      });


    });

/// MORE LABEL STUFF
            var label = svg1.select('.labelName').selectAll('text')
                .data(pie1(data1))
              .enter().append('text')
                .attr('dy', '.35em')
                .text(function(d, i) {
                  return d.data["name"]
                })
                // .html(function(d, i) {
                //     return d.data["name"]
                // })
                .attr('transform', function(d) {

                    var pos = outerArc.centroid(d);

                    // changes the point to be on left or right depending on where label is.
                    pos[0] = radius1 * (midAngle(d) < Math.PI ? 1 : -1);
                    return 'translate(' + pos + ')';
                })
                .style('text-anchor', function(d) {
                    console.log((midAngle(d)) < Math.PI ? 'start' : 'end')
                    return (midAngle(d)) < Math.PI ? 'start' : 'end';
                })


            var polyline = svg1.select('.lines')
                .selectAll('polyline')
                .data(pie1(data1))
              .enter().append('polyline')
                .attr('points', function(d) {

                    // see label transform function for explanations of these three lines.
                    var pos = outerArc.centroid(d);
                    pos[0] = radius1 * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
                    console.log(arc1.centroid(d), outerArc.centroid(d), pos)
                    return [arc1.centroid(d), outerArc.centroid(d), pos]
                }

                );

            function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }
/// MORE LABEL STUFF END


//////////// BAR CHART SVG HERE ////////////////


// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 150, left: 80},
    width = 1000 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.6);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#bar").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");


  // Scale the range of the data in the domains
  x.domain(data2.map(function(d) { return d.item; }));
  y.domain([0, d3.max(data2, function(d) { return d.caffeine; })]);

  //

  var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Caffeine:</strong> <span style='color:white'>" + d.caffeine + " mg" + "</span>";
  })

  svg.call(tip);

  // append the rectangles for the bar chart
  svg.selectAll("#bar")
      .data(data2)
    .enter().append("rect")
            .on("mouseover", tip.show)
        .on("mouseout", tip.hide)

      .attr("class", "bar")
      .attr("x", function(d) { return x(d.item); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.caffeine); })
      .attr("fill", function(d, i) {
        switch(data2[i].name) {
          case "Energy drinks": return "#50514F";
          case "Medications (per tablet)": return "#F25F5C";
          case "Coffee (180ml cup)": return "#00A896";
          case "Soft drinks (360ml can)": return "#247BA0";
          case "Tea (180ml cup)": return "#70C1B3";
          case "Chocolate": return "#02C39A";
          case "Cocoa": return "#247BA0";
        }
      } )
      .attr("opacity", function(d, i) {
        switch(data2[i].name) {
          case "Energy drinks": return "1";
          case "Medications (per tablet)": return "1";
          case "Coffee (180ml cup)": return "1";
          case "Soft drinks (360ml can)": return "1";
          case "Tea (180ml cup)": return "1";
          case "Chocolate": return "1";
          case "Cocoa": return "1";
        }
      })
      .attr("height", function(d) { return height - y(d.caffeine); });




  // add the x Axis
  svg.append("g")
      //.style("font", "15px times")
      .attr("class", "bruh")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
     .selectAll("text")
      .style("text-anchor", "end")
      //.style("font", "14px times")
      .attr("class", "bruh")
      .attr("dx", "-0.8em")
      .attr("dy", "0.15em")
      .attr("transform", "rotate(-45)");

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y))
      .style("font", "14px times");

  svg.append("text")
     .attr("class", "yLabel")
     .attr("transform", "rotate(-90)")
     .attr("y", 0 - margin.left)
     .attr("x", 0 - (height / 2))
     .attr("dy", "1em")
     .style("text-anchor", "middle")
     .text("Milligrams of Caffeine")

  svg.append("text")  
      .attr("class", "xLabel")           
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 120) + ")")
      .style("text-anchor", "middle")
      .text("Item");