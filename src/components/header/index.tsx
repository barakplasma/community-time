import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Header: FunctionalComponent = () => {
    return (
        <header>
            <h1>Community Time</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/timestamp">Timestamp: now</Link>
                <Link href="/timestamp/new">Create new target timestamp</Link>
            </nav>
        </header>
    );
};

export default Header;
