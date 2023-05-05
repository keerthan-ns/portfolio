import { useEffect, useState } from "react";

export default function useScroll() {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, [])
    return offset;
}