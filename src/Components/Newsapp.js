import React, { useEffect, useState } from 'react'
import { FcNews } from "react-icons/fc";
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
   
    const API_KEY = "6668e14e1ae5444bac5fbb917b7c43da";



    const getData = async (keyword = search) => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`);
        const data = await response.json();
        let dt = data.articles.slice(0, 12)
        console.log(dt)
        setNewsData(dt)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const userInput = (event) => {
        const category = event.target.value;
        getData(category);
    }

    return (
        <div>
            <nav>
                <div><FcNews className='icon' />
                    <h1>Hi News Reader</h1>
                </div>

                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>

                </div>
            </nav>
            <div>
                <p className='head'>Stay Update with TrendyNews</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}

            </div>
        </div>
    )
}

export default Newsapp;