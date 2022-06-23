import * as React from "react";

export interface State {
  textLabel: string;
  /*   textValue: string;
  background?: string;
  borderWidth?: number;
  size: number; */
  measureValue: number;
}

export const initialState: State = {
  textLabel: "",
  /* textValue: "",
  size: 200, */
  measureValue: null,
};

export class ReactBusVisual extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  render() {
    const { textLabel, measureValue } = this.state;
    return <div className="busVisual">{measureValue}</div>;
  }
  private static updateCallback: (data: object) => void = null;

  public static update(newState: State) {
    if (typeof ReactBusVisual.updateCallback === "function") {
      ReactBusVisual.updateCallback(newState);
    }
  }

  public state: State = initialState;

  public componentWillMount() {
    ReactBusVisual.updateCallback = (newState: State): void => {
      this.setState(newState);
    };
  }

  public componentWillUnmount() {
    ReactBusVisual.updateCallback = null;
  }
}
