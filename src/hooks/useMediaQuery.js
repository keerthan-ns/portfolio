import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(
        () => {
            const mediaQuery = window.matchMedia(query);
            setMatches(mediaQuery.matches);
            const handler = (event) => setMatches(event.matches);
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        },
        []
    );
    return matches;
}