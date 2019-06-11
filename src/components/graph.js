import React from 'react';
import * as d3 from 'd3';

export default class Graph extends React.Component {

  componentDidMount() {
    this.drawChart();
  }

  componentWillUnmount() {
    // d3.select(".chart").remove();
  }

  drawChart() {
    const data = [12, 10, 4, 5, 2, 9];
    const padding = 80;
    const w = 1000 - 2 * padding;
    const h = 650 - 2 * padding;

    const xScale = d3.scaleLinear()
      .domain([
        0,
        data.length
      ])
      .range([
        padding,
        w - padding
      ])
    const yScale = d3.scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => d[0])
      ])
      .range([
        h - padding,
        padding
      ])


    const svg = d3.select("div.chart")
      .append("svg")
      .attr("id", "chart")
      .attr("width", "100%")
      .attr("viewBox", `0 0 ${w}, ${h}`)
      .attr("position", 'absolute')

      const barsContainer = svg.append('g')
        .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')');

    barsContainer.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) =>  yScale(d))
      .attr("width", (d) =>  xScale(1))
      .attr("height", (d) => (h - padding) - yScale(d))
      .attr("fill", "green");
  }

  render() {
    const styles = {
      chart: {
        backgroundColor: "white",
      }
    }
    return (
      <div style={styles.chart} className="chart">
      </div>
    )
  }
}
