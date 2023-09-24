import { React } from 'react'
import { NavBar } from "../components/navBar"
import Head from 'next/head'
import { addedEvents } from './events'

function myEvents() {
    const Events = addedEvents || [];

    return (
        <section className="bg-red-100 min-h-screen">
            <center>
                <h1 className="bg-red-100 text-red-600 textxl py-5 text-4xl">
                    <b>Welcome Ahmed</b>
                </h1>
                <h1 className="bg-red-100 text-red-600 textl py-5 text-1l">
                    <b>My Events</b>
                </h1>
                {/* {Events.length === 0 ? (
                    <p>No Events</p>
                ) : (
                    <ul className="w-full text-red-600">
                         {Events.map((eventName, index) => (
                            <li key={index} className="my-2">
                                {eventName}
                            </li>
                        ))} 
                    </ul>
                )} */}
                <ul className="w-full text-red-600">
                        {/* {Events.map((eventName, index) => (
                            <li key={index} className="my-2">
                                {eventName}
                            </li>
                        ))} */}
                        <li className="my-2">Penn Blockchain Conference</li>
                        <li className="my-2">Layer 2 Workshop</li>
                    </ul>
            </center>
        </section>
    );
}
export default myEvents;