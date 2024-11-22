import React from "react";

export default function Weather(){

    function getLocation() {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            console.log("실패");
        }
    }
    function showPosition(position) {
        return(
        <div>Latitude:  + {position.coords.latitude}<br/>
            Longitude: + {position.coords.longitude}
        </div>);
    }

    return(
        <>
            <button className="rounded text-center m-4 p-4 border-white border-2 min-w-14 min-h-14" onClick={getLocation}>{getLocation}</button>
        </>
    );
}