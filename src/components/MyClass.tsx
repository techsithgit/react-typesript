import * as React from 'react';

export interface MyClassPropInterface { name: string; isMarried: boolean; }
export interface MyClassStateInterface { age: number; }

// 'MyClassInterface' describes the shape of props.
// State is never set so we use the '{}' type.
export class MyClass extends React.Component<MyClassPropInterface, MyClassStateInterface> {
    
    public static defaultProps: Partial<MyClassPropInterface> = {
        name: 'techsith'
    };
    
    state = {
        age: 21
    };

    render() {
        return <h1>From Class: Hello {this.props.name} you are {this.state.age}!</h1>;
    }
}