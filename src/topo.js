import React from 'react';


import {TopoNavigation} from "./components/topoNavigation";
import {MainNavigation} from "./components/mainNavigation";

function Topo() {
    return (
        <>
            <MainNavigation/>
            <div>
                <TopoNavigation></TopoNavigation>
            </div>
        </>
    );
}

export default Topo;