import React from 'react';
import useWindowSize from "@/hooks/useWindowSize";

const WindowSizeExampleHook = () => {
    const { width, height } = useWindowSize();
    return (
        <p>
            Window size: ({width} x {height})
        </p>
    );
};

export default WindowSizeExampleHook;