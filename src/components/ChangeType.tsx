import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleTypeBtn = () => {
        if (questionType === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    };

    return (
        <div>
            <Button onClick={handleTypeBtn}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
