import React, { useEffect } from 'react';

function StrictModeComponent() {
    useEffect(() => {
        console.log('StrictModeComponent mounted');

        return () => {
            console.log('StrictModeComponent unmounted');
        };
    });

    return (
        <>
            <h1>This is a Strict Mode Component</h1>
            <p>Strict Mode is a tool for highlighting potential problems in an application. It does not render any visible UI, but it activates additional checks and warnings for its descendants.</p>
        </>
    );
}

export default StrictModeComponent;