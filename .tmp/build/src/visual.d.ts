import powerbi from "powerbi-visuals-api";
import "core-js/stable";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private svg;
    private visualSettings;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
}
