import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler({
    value,
    setValue
}: {
    value: number;
    setValue: (value: number) => void;
}): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}

function Halver({
    value,
    setValue
}: {
    value: number;
    setValue: (value: number) => void;
}): JSX.Element {
    return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(1);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue} />
            <Halver value={dhValue} setValue={setDhValue} />
        </div>
    );
}
