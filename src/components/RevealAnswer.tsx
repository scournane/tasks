import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setVisible] = useState<boolean>(false);

    const handleButtonClick = () => {
        setVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
