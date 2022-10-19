import React, { ChangeEvent } from "react";
import { IChildProps } from "./IChildProps";

export class Child extends React.Component<IChildProps, {}> {
  constructor(props: IChildProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e: ChangeEvent): void {
    const name: string = (e.target as HTMLSelectElement).value;
    this.props.onChange(name);
  }

  public render() {
    return (
      <div>
        <h1>Hey my name is {this.props.name}!</h1>
        <select id="great-names" onChange={(e) => this.handleChange(e)}>
          <option value="Frarthur">Frarthur</option>

          <option value="Gromulus">Gromulus</option>

          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
