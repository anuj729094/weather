export const getweatherdata = async (state) => {
    try {
        // const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${state}&days=3`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b27e18fb5bmsh653948a61eaedcap122759jsncc5aa8dcbbd9',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        const data = await fetch(url, options)
        const res = await data.json()
        console.log(res);
        if (res.error) {
            throw new Error(res.error.message)
        }
        else {
            return { status: true, data: res }
        }
    } catch (error) {
        return { status: false, msg: error.message }
    }
}

export const getquotes = async () => {
    try {
        const data = await fetch("https://api.quotable.io/random", {
            method: "GET",
        })
        const res = await data.json()
        if (res.error) {
            throw new Error(res.error)
        }
        else {
            return { status: true, data: res }
        }
    } catch (error) {
        return { status: false, msg: error.message }
    }
}

export const getnewsbylocation = async (obj) => {
    try {
        const url = `https://newsapi90.p.rapidapi.com/topic/${obj.type}?language=en-US&region=${obj.location[0].toUpperCase()}${obj.location[1].toUpperCase()}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ec8459db83mshd8d3ab21640b604p169c5fjsnd599f499130f',
                'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
            }
        };
        const data = await fetch(url, options);
        const res = await data.json();
        if(res.message){
            throw new Error(res.message)
        }
        else{
            return {status:true , data:res}
        }
    } catch (error) {
        return {status:false , msg:error.message}
    }
}