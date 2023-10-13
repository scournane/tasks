import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define the holiday type
type Holiday =
    | "Halloween"
    | "Christmas"
    | "Easter"
    | "StPatricks"
    | "Thanksgiving";
const holidays = {
    Halloween: {
        emoji: "🎃"
    },
    Christmas: {
        emoji: "🎄"
    },
    Easter: {
        emoji: "🥚"
    },
    StPatricks: {
        emoji: "🍀"
    },
    Thanksgiving: {
        emoji: "🦃"
    }
};

const alphabeticalOrder: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "StPatricks",
    "Thanksgiving"
];

const yearlyOrder: Holiday[] = [
    "StPatricks",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

const getNextHoliday = (
    current: Holiday,
    orderType: "alphabetical" | "yearly"
): Holiday => {
    let order: Holiday[];
    if (orderType === "alphabetical") {
        order = alphabeticalOrder;
    } else {
        order = yearlyOrder;
    }

    const currentIndex = order.indexOf(current);
    const nextIndex = (currentIndex + 1) % order.length;

    return order[nextIndex];
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("StPatricks");

    return (
        <div>
            <div>Holiday: {holidays[currentHoliday].emoji}</div>
            <Button
                onClick={() =>
                    setCurrentHoliday((prev) =>
                        getNextHoliday(prev, "alphabetical")
                    )
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() =>
                    setCurrentHoliday((prev) => getNextHoliday(prev, "yearly"))
                }
            >
                Advance by Year
            </Button>
        </div>
    );
}
