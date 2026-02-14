export interface ValentineStep {
    gif: string;
    text: string;
    noText?: string;
    yesText?: string;
}

export const valentineSteps: ValentineStep[] = [
    {
        gif: "/1.gif",
        text: "Would you be my valentine ?",
        noText: "No way !",
        yesText: "Yes, of course !",
    },
    {
        gif: "/2.gif",
        text: "Pleaseee be my valentine ?",
        noText: "I said NO !",
        yesText: "okayy sure !",
    },
    {
        gif: "/3.gif",
        text: "One last time - Be my valentine",
        noText: "Stop it !",
        yesText: "Okayyy, Yes !",
    },
    {
        gif: "/4.gif",
        text: "You left me no choice",
        yesText: "Fine, you got me !",
    },
    {
        gif: "/5.gif",
        text: "I know you can't resist me 😈",
    },
];
