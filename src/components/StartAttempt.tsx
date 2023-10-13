import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);

    const StartQuizBtn = () => {
        if (attempts > 0) {
            setAttempts((prev) => prev - 1);
            setInProgress(true);
        }
    };

    const StopQuizBtn = () => {
        setInProgress(false);
    };

    const MulliganBtn = () => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={StartQuizBtn}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={StopQuizBtn} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={MulliganBtn} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
