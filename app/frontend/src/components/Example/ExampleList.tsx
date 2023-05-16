import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are some of the benefits of working at CAPTRUST?",
        value: "What are some of the benefits of working at CAPTRUST?"
    },
    { text: "What does CAPTRUST's 2026 plan look like?", value: "What does CAPTRUST's 2026 plan look like?" },
    { text: "What are some the current house views at CAPTRUST?", value: "What are some the current house views at CAPTRUST?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
