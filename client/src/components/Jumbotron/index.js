import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 200, color:"White", clear: "both", paddingTop: 80, textAlign: "center", backgroundRepeat: "no-repeat", backgroundPosition: "center",   backgroundSize: "cover", backgroundImage:"URL('http://img03.deviantart.net/01b8/i/2015/353/8/0/4k_background_107__mermaids_depth__by_kiaazad-d9kmn4y.jpg')" }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
