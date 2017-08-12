
import React from 'react';

export const openDripForm = (e) => {
    e.preventDefault();
    window._dcq.push(["showForm", {id: "5362865"}]);
}

export const SubLi = ({ children }) => (
    <li style={{listStyle: 'none', paddingLeft: '1em'}}>
        <small>
            {children}
        </small>
    </li>
);

export const TOCUl = ({ children }) => (
    <ul style={{listStyle: 'none'}}>
        {children}
    </ul>
);

export const MainLi = ({ children }) => (
    <li>
        <big>{children}</big>
    </li>
)
