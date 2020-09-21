import React, { Component } from 'react'
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum, reprehenderit sequi asperiores sapiente dicta ex inventore? Aut, aspernatur vitae.'
            },
            {
                icon: <FaHiking />,
                title: "free Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum, reprehenderit sequi asperiores sapiente dicta ex inventore? Aut, aspernatur vitae.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum, reprehenderit sequi asperiores sapiente dicta ex inventore? Aut, aspernatur vitae.'
            },
            {
                icon: <FaBeer />,
                title: "Strong Beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum, reprehenderit sequi asperiores sapiente dicta ex inventore? Aut, aspernatur vitae.'
            },
        ]
    }
    render() {
        return (
            <div className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })};
                </div>
            </div>
        )
    }
}
