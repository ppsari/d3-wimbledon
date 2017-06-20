var width = 800, height = 300, marginLeft= 40,  margin=20;
var transition = d3.transition();

let barw = 0;

let svg = d3.select('#results')
  .append('svg')
  .attr('width', width  )
  .attr('height', height )

// Data reloading
let reload = () => {
  let data = [];
  d3.tsv('afcw-results.tsv', rows => {
    data = rows.map(row => {
      return row.GoalsScored
      // console.log(row.GoalsScored);
    })
    // console.log('reload');
    console.log(data.length);

    redraw(data);
  })

  // Your data parsing here...
}

// redraw function
let redraw = (data) => {

  // console.log('redraw');
  // console.log(data);
  // Your data to graph here
  let maks = d3.max(data);
  let min = d3.min(data);
  barw = width/ data.length ;


  let colorScale = d3.scaleLinear()
    .domain([0,maks])
    .range(['green','lime'])

  // var yScale = d3.scaleLinear().range([height - marginz.top, marginz.bottom]).domain([d3.min(data),d3.max(data)+20*300]);
  let yScale = d3.scaleLinear()
    .domain([min,maks])
    .range([height-margin, 0]);

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d,i)=> i * barw + marginLeft)
    .attr('y', d => height - yScale(d) - margin)// height - yScale(d) - margin )
    .attr('width', barw -3  )
    .attr('height', d=> yScale(d) )
    .attr('fill', colorScale)

    var yAxis = d3.axisLeft().scale(yScale);
    var xScale = d3.scaleLinear().domain([0, data.length]).range([0,width]);
    var xAxis = d3.axisBottom().scale(xScale).ticks(data.length);

    svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${marginLeft-5} , ${height-margin} )`)
    .call(xAxis);

    svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${marginLeft -5 } )`)
    .call(yAxis);

    svg.selectAll('rect')
    .transition().style("fill","red").duration(10000);;
}

reload()
