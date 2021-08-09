import React from 'react'

export default function OnlyDate({ index }) {
    const unixTime = index.dt;
    const date = new Date(unixTime * 1000);

    return (
    <>{date.toLocaleDateString("nl-NL")}</>
    )

}