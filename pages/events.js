//import { React } from 'react'
import React, { useState, useEffect } from 'react';
import { NavBar } from "../components/navBar"
import Head from 'next/head'
//import { eventNames, contract } from './_app';


export const removedEvents = []; // Initialize removedEvents as an empty array

function Events() {
    const [eventList, setEventList] = useState([
        "Penn Blockchain Conference",
        "Greenpilling Social",
        "Crypto Convention",
        "DeFi Speaker Series",
        "Layer 2 Workshop",
        "Lecture: Zero Knowledge Proof Applications"
    ]);

    const joinEvent = (index) => {
        // Create a copy of the eventList and remove the selected event by index
        const updatedEventList = [...eventList];
        const removedEvent = updatedEventList.splice(index, 1)[0]; // Remove the event and store it
        setEventList(updatedEventList);

        // Update the exported removedEvents variable with the removed event
        removedEvents.push(removedEvent);
    };

    return (
        <section className="bg-red-100 min-h-screen">
            <center>
                <h1 className="bg-red-100 text-red-600 textxl py-5 text-4xl">
                    <b>All Events</b>
                </h1>
                <ul className="w-full text-red-600">
                    {eventList.map((eventName, index) => (
                        <li key={index} className="my-2">
                            {eventName} - <button
                                type="button"
                                className="bg-red-500 text-white px-2 rounded"
                                onClick={() => joinEvent(index)}
                            >
                                Join Event!
                            </button>
                        </li>
                    ))}
                </ul>
            </center>
        </section>
    );
}

export default Events;