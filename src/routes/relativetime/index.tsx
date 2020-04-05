import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { formatRelative, formatDistance } from "date-fns";
import { Link } from "preact-router/match";

interface Props {
    microsecondsSinceUnix: string;
}

const RelativeTime: FunctionalComponent<Props> = (props: Props) => {
    const [currentTime, setCurrentTime] = useState<number>(Date.now());
    const { microsecondsSinceUnix = currentTime.toString() } = props;

    // gets called when this route is navigated to
    useEffect(() => {
        const timer = window.setInterval(
            () => setCurrentTime(Date.now()),
            1000
        );

        // gets called just before navigating away from the route
        return () => {
            clearInterval(timer);
        };
    }, []);

    const targetDatetime = new Date(parseInt(microsecondsSinceUnix));

    return (
        <div>
            <section>
                <aside>
                    <h1>Target time: </h1>
                    <samp>{targetDatetime.toLocaleString()}</samp>
                </aside>
                <aside>
                    <h3>Relative format:</h3>
                    <samp>
                        {formatRelative(targetDatetime, new Date(currentTime))}
                    </samp>
                </aside>
                <aside>
                    <h3>Current time:</h3>
                    <samp>{new Date(currentTime).toLocaleString()}</samp>
                </aside>
                <aside>
                    <h3>Distance format:</h3>
                    <samp>
                        {formatDistance(targetDatetime, new Date(currentTime))}
                    </samp>
                </aside>
            </section>
            <section>
                <nav>
                    <ul>
                        <li>
                            <Link href={`/timestamp/${microsecondsSinceUnix}`}>
                                <i>Permalink to this timer</i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
};

export default RelativeTime;
