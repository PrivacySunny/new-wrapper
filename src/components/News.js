import React, { useEffect, useState } from 'react'

import NewItems from './NewItems'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2ddef254b7149aba81dbb7a197f6144&page=${page}&pageSize=${props.pageSize}`
        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=e2ddef254b7149aba81dbb7a197f6144&page=${page + 1}$pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        updateNews();
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }, [])
    
    const fetchMoreData = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e2ddef254b7149aba81dbb7a197f6144&page=${page + 1}&pageSize=${props.pageSize}`
        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=e2ddef254b7149aba81dbb7a197f6144&page=${page + 1}$pageSize=${props.pageSize}`
        setPage(page + 1)
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles?.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    };
    
    return (
        <>
            <h1 className='text-center' style={{ marginTop: '100px' }}>New-Wrapper - Top International News</h1>
            <InfiniteScroll
                dataLength={articles?.length}
                next={fetchMoreData}
                hasMore={articles?.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles?.map((element) => {
                            return <div className="col-md-4">
                                <NewItems key={element.url} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
