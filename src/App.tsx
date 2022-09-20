import React, {useEffect, useState} from 'react';
import data, {IPeople} from "./data";
import './index.css';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function App() {
    const [people, setPeople] = useState(data);
    const [currentindex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = (people.length - 1);
        if (currentindex < 0) (
            setCurrentIndex(lastIndex)
        );
        if (currentindex > lastIndex) {
            setCurrentIndex(0)
        }
    }, [currentindex, people])

    return (
        <section className="section">
            <div className='title'>
                <h2>Reviews</h2>
            </div>
            <div className='section-center'>
                {people.map((person: IPeople, personIndex: number ) => {
                    const {id, image, name, title, quote} = person;

                    let position = 'nextSlide';
                    if (personIndex === currentindex) {
                        position = 'activeSlide'
                    }

                    if (personIndex === currentindex - 1 || (currentindex === 0 && personIndex === people.length - 1) ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className='person-img'/>
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                        </article>
                    )
                })}
                <button className='prev' onClick={() => setCurrentIndex(prevState => prevState - 1)}>
                    <FiChevronLeft />
                </button>
                <button className='next' onClick={() => setCurrentIndex(prevState => prevState + 1)}>
                    <FiChevronRight />
                </button>

            </div>
        </section>
    );
}

export default App;
