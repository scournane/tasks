import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(2);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    let message = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Lose";
        } else {
            message = "Win";
        }
    }

    return (
        <div>
            Left:<span data-testid="left-die">{leftDie}</span>
            <div>
                Right:<span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {message && <div>{message}</div>}
        </div>
    );
}
