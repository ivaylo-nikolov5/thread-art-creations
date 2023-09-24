import React from "react";

function HeaderOptionsList() {
    return (
        <ul className="menu-pages-list">
                    <a href="/">
                        <li className="menu-list-page">
                            <span>H</span>
                            <span>o</span>
                            <span>m</span>
                            <span>e</span>
                        </li>
                    </a>

                    <a href="/about">
                        <li className="menu-list-page">
                            <span>A</span>
                            <span>b</span>
                            <span>o</span>
                            <span>u</span>
                            <span>t</span>
                        </li>
                    </a>

                    <a href="/products">
                        <li className="menu-list-page">
                            <span>P</span>
                            <span>r</span>
                            <span>o</span>
                            <span>d</span>
                            <span>u</span>
                            <span>c</span>
                            <span>t</span>
                            <span>s</span>
                        </li>
                    </a>

                    <a href="/contacts">
                        <li className="menu-list-page">
                            <span>C</span>
                            <span>o</span>
                            <span>n</span>
                            <span>t</span>
                            <span>a</span>
                            <span>c</span>
                            <span>t</span>
                        </li>
                    </a>
                </ul>
    );
};

export default HeaderOptionsList;