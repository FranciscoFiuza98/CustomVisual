"use strict";
import powerbi from "powerbi-visuals-api";

import "core-js/stable";
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import { VisualSettings } from "./settings";
import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "./../style/visual.less";
import * as d3 from "d3";

type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

export class Visual implements IVisual {
  private svg: Selection<SVGElement>;
  private visualSettings: VisualSettings;

  constructor(options: VisualConstructorOptions) {
    this.svg = d3.select(options.element).append("svg");
  }
  public update(options: VisualUpdateOptions) {
    let dataView: DataView = options.dataViews[0];
    let width: number = 600;
    let height: number = 600;
    let measureValue = dataView.single.value;
    let values: number[] = new Array(20);

    this.svg.attr("width", width).attr("height", height);
    measureValue = Math.round(+measureValue * 100) / 100;
    let measureValueInPercentage = measureValue * 100;
    let blockSizePercentage: number = 100 / 12;

    for (var i = 0; i < values.length; i++) {
      if (measureValueInPercentage - blockSizePercentage >= 0) {
        values[i] = 40;
        measureValueInPercentage =
          measureValueInPercentage - blockSizePercentage;
      } else {
        console.log(measureValueInPercentage);
        values[i] = (480 * measureValueInPercentage) / 100;
        break;
      }
    }
    this.svg
      .append("rect")
      .attr("x", 10)
      .attr("y", 18)
      .attr("rx", 30)
      .attr("width", 250)
      .attr("height", 480)
      .style("fill", "none")
      .style("stroke", "#41BFA8")
      .style("stroke-width", 8);

    //Grey rectangles #C4C4C4
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 60)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 60)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 130)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 130)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 200)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 200)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 270)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 270)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 340)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 340)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 410)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 410)
      .attr("width", 90)
      .attr("height", 40)
      .attr("fill", "#C4C4C4");
    //Green rectangles #41BFA8
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 60)
      .attr("width", 90)
      .attr("height", values[0])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 60)
      .attr("width", 90)
      .attr("height", values[1])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 130)
      .attr("width", 90)
      .attr("height", values[2])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 130)
      .attr("width", 90)
      .attr("height", values[3])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 200)
      .attr("width", 90)
      .attr("height", values[4])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 200)
      .attr("width", 90)
      .attr("height", values[5])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 270)
      .attr("width", 90)
      .attr("height", values[6])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 270)
      .attr("width", 90)
      .attr("height", values[7])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 340)
      .attr("width", 90)
      .attr("height", values[8])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 340)
      .attr("width", 90)
      .attr("height", values[9])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 25)
      .attr("y", 410)
      .attr("width", 90)
      .attr("height", values[10])
      .attr("fill", "#41BFA8");
    this.svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 410)
      .attr("width", 90)
      .attr("height", values[11])
      .attr("fill", "#41BFA8");
  }
}
