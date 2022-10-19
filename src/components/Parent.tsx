import React from "react";
import {IParentState} from './IParentState';

import {Child} from './Child';

export class Parent extends React.Component<{}, IParentState> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            name: 'Frarthur',
        };

        this.changeName = this.changeName.bind(this);
    }

    private changeName(newName: string): void {
        this.setState({
            name: newName
        });
    }

    public render() {
        return (
            <Child name={this.state.name} onChange={this.changeName} />
        )
    }
}