// var width = 800, height = 300, marginLeft= 40,  margin=20;
// var transition = d3.transition();
//
// let barw = 0;
//
// let svg = d3.select('#results')
//   .append('svg')
//   .attr('width', width + margin )
//   .attr('height', height + margin)
//
//
// var  xScale = d3.scaleBand().range([0,width]).padding(0.1),
//   yScale = d3.scaleLinear().range([height,0]);
//
// var g = svg.append("g")
//     .attr("transform", "translate(" + 100 + "," + 100 + ")");
//
// // Data reloading
// let reload = () => {
//   let data = [];
//   let datalen  = [];
//   d3.tsv('afcw-results.tsv', rows => {
//
//     data = rows.map( (row,i) => {
//       // datalen.push(i);
//       return {goal :  row.GoalsScored, len : i} ;
//     })
//     console.log(data.length)
//     // console.log('reload');
//     // console.log(data.length);
//
//     redraw(data);
//   })
//
//   // Your data parsing here...
// }
//
// // redraw function
// let redraw = (data) => {
//   xScale.domain(data.map(dt=> dt.goal));
//   yScale.domain(data.map(dt=> dt.len));
//
//   g.append("g")
//    .attr("transform", "translate(0," + height + ")")
//    .call(d3.axisBottom(xScale));
//
//
//    g.append("g")
//     .call(d3.axisLeft(yScale).tickFormat(function(d){
//         return "$" + d;
//     }).ticks(10))
//     .append("text")
//     .attr("y", 6)
//     .attr("dy", "0.71em")
//     .attr("text-anchor", "end")
//     .text("value");
//
//
//     g.selectAll(".bar")
//          .data(data)
//          .enter().append("rect")
//          .attr("class", "bar")
//          .attr("x", function(d) { return xScale(d.len); })
//          .attr("y", function(d) { return yScale(d.goal); })
//          .attr("width", xScale.bandwidth())
//          .attr("height", function(d)
//           { return height - yScale(d.len); }
//         )
//     svg.append("text")
//      .attr("transform", "translate(100,0)")
//      .attr("x", 50)
//      .attr("y", 50)
//      .attr("font-size", "24px")
//      .text("Score")
//
//      g.append("g")
//        .attr("transform", "translate(0," + height + ")")
//        .call(d3.axisBottom(xScale))
//        .append("text")
//        .attr("y", height - 250)
//        .attr("x", width - 100)
//        .attr("text-anchor", "end")
//        .attr("stroke", "black")
//        .text("Number");
//
//
// //http://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js
//   //
//   // // console.log('redraw');
//   // // console.log(data);
//   // // Your data to graph here
//   // let maks = d3.max(data);
//   // let min = d3.min(data);
//   // barw = width/ data.length ;
//   //
//   //
//   // let colorScale = d3.scaleLinear()
//   //   .domain([0,maks])
//   //   .range(['green','lime'])
//   //
//   // // var yScale = d3.scaleLinear().range([height - marginz.top, marginz.bottom]).domain([d3.min(data),d3.max(data)+20*300]);
//   // let yScale = d3.scaleLinear()
//   //   .domain([min,maks])
//   //   .range([height-margin, 0]);
//   //
//   // svg
//   //   .selectAll('rect')
//   //   .data(data)
//   //   .enter()
//   //   .append('rect')
//   //   .attr('x', (d,i)=> i * barw + marginLeft)
//   //   .attr('y', d => height - yScale(d) - margin)// height - yScale(d) - margin )
//   //   .attr('width', barw -3  )
//   //   .attr('height', d=> yScale(d) )
//   //   .attr('fill', colorScale)
//   //
//   //   var yAxis = d3.axisLeft().scale(yScale);
//   //   var xScale = d3.scaleLinear().domain([0, data.length]).range([0,width]);
//   //   var xAxis = d3.axisBottom().scale(xScale).ticks(data.length);
//   //
//   //   svg.append("g")
//   //   .attr("class", "axis")
//   //   .attr("transform", `translate(${marginLeft-5} , ${height-margin} )`)
//   //   .call(xAxis);
//   //
//   //   svg.append("g")
//   //   .attr("class", "axis")
//   //   .attr("transform", `translate(${marginLeft -5 } )`)
//   //   .call(yAxis);
//   //
//   //   svg.selectAll('rect')
//   //   .transition().style("fill","red").duration(10000);;
// }
//
// reload()
