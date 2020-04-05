import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import { useState } from "preact/hooks";

import RelativeTime from "../relativetime";

const TimeLink: FunctionalComponent<{
    timestamp: number;
    description: string;
}> = ({ timestamp, description }) => {
    return (
        <li>
            <Link href={`/timestamp/${timestamp}`}>
                <i>{description}</i>
            </Link>
        </li>
    );
};

const NewTime: FunctionalComponent = () => {
    const [targetDate, setTargetDate] = useState("");
    const [targetTime, setTargetTime] = useState("");
    const makeTimestamp = (date: string, time: string): Date => {
        const temp = new Date(date + "T" + time);
        return temp.toString() !== "Invalid Date" ? temp : new Date();
    };
    return (
        <div>
            <section>
                <nav>
                    <ul>
                        <TimeLink
                            timestamp={makeTimestamp("", "").valueOf()}
                            description="New timer from now"
                        />
                    </ul>
                </nav>
            </section>
            <section>
                <aside>
                    <h1>Create a target date time</h1>
                </aside>
                <aside>
                    <input
                        type="date"
                        label="Date"
                        value={targetDate}
                        onChange={(e): void => {
                            console.log(e.currentTarget.value);
                            setTargetDate(e.currentTarget.value);
                        }}
                    />
                    <input
                        type="time"
                        label="Time"
                        value={targetTime}
                        onChange={(e): void => {
                            console.log(e.currentTarget.value);
                            setTargetTime(e.currentTarget.value);
                        }}
                    />
                </aside>
            </section>
            <section>
                {targetDate !== "" && targetTime !== "" ? (
                    <RelativeTime
                        microsecondsSinceUnix={makeTimestamp(
                            targetDate,
                            targetTime
                        )
                            .valueOf()
                            .toString()}
                    />
                ) : null}
            </section>
        </div>
    );
};

export default NewTime;
