import React, { useState } from 'react'
import Header from '../components/Header'
import News from '../components/News'
import Newshots from '../components/Newshots'

const Home = ({func,country}) => {
    return (
        <div>
            <Header func={func}/>
            <Newshots country={country} />
            <News/>
        </div>
    )
}

export default Home
