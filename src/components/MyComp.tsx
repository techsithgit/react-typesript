import * as React from 'react';

// export interface MyProps { message: string; count: number; }
// type guards
type Props = {
    name: 'Techsith' | 'InterviewNest',
    isMarried: Boolean,
    kids: 2 | 4, 
    livedIn?: ['CA', 'AZ']
};
const increment = (n: number) => {
    return n++;
};

const onClick = (k: number) => {
    const ary: number[] = [1, 2, 3, 4, 5, 6];
    console.warn(ary);
};

const MyComp = (props: Props) => {

    return (
        <div>
            <h1>From Function: Hello {props.name} you have {increment(props.kids)} kids!</h1>
            <button onClick={() => onClick(props.kids)} >click me</button>
        </div>
    );
};

export default MyComp;