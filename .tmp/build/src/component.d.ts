import * as React from "react";
export interface State {
    textLabel: string;
    textValue: string;
    background?: string;
    borderWidth?: number;
    size: number;
}
export declare const initialState: State;
export declare class ReactBusVisual extends React.Component<{}, State> {
    constructor(props: any);
    render(): JSX.Element;
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
}
