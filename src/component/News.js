// React class Export Component
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    
static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Ali Martin",
    //         "title": "The Spin | Munir Ali: ‘When Moeen was 13, I made him a deal.",
    //         "description": "Moeen Ali’s return to Birmingham is extra special for his family, especially his father.",
    //         "url": "https://www.theguardian.com/sport/2023/jun/06/munir-ali-moeen-ali-birmingham-warwickshire-cricket",
    //         "urlToImage": "https://i.guim.co.uk/img/media/970347e3036b4acafeed64860eb6feec9e00e379/57_533_1093_656/master/1093.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5c7ec2b8d145f186454e0727d715e7f8",
    //         "publishedAt": "2023-06-06T10:00:45Z",
    //         "content": "If Moeen Ali takes up Englands Ashes SOS, his Warwickshire comeback will have been brief. Still, Moeen is officially back at his hometown club after a 16-year absence and for a city that doesnt make … [+9754 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "IPL 2023: Who are India's next cricketing stars?",
    //         "description": "These players and their dazzling performances at the IPL make a case for their inclusion in India's national side.",
    //         "url": "https://www.bbc.co.uk/news/world-asia-india-65692539",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5D8B/production/_129874932_gettyimages-1253790493-594x594.jpg",
    //         "publishedAt": "2023-05-26T23:49:58Z",
    //         "content": "The Indian Premier League (IPL), apart from being lucrative, has been an excellent platform for uncapped players to fast-track their careers into the international arena. Like past editions, this yea… [+5820 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news",
    //             "name": "Google News"
    //         },
    //         "author": null,
    //         "title": "Kohli says playing his best T20 cricket - Reuters",
    //         "description": "Kohli says playing his best T20 cricket  Reuters",
    //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2tvaGxpLXNheXMtcGxheWluZy1oaXMtYmVzdC10MjAtY3JpY2tldC0yMDIzLTA1LTIyL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    //         "urlToImage": "https://th.bing.com/th/id/OIP.GL7pd0jmhb896XOmksSG-gHaEK?pid=ImgDet&rs=1",
    //         "publishedAt": "2023-05-22T04:27:00Z",
    //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news",
    //             "name": "Google News"
    //         },
    //         "author": null,
    //         "title": "Evergreen Anderson is addicted to cricket, says Broad - Reuters.com",
    //         "description": "Evergreen Anderson is addicted to cricket, says Broad  Reuters.com",
    //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2V2ZXJncmVlbi1hbmRlcnNvbi1pcy1hZGRpY3RlZC1jcmlja2V0LXNheXMtYnJvYWQtMjAyMy0wNi0xMS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    //         "urlToImage": "https://i.ytimg.com/vi/YpiHh_i6uGE/maxresdefault.jpg",
    //         "publishedAt": "2023-06-11T08:05:59Z",
    //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    //     }
    // ]
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello I am constructor from NEWS Component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1396de3da8a4c7291e83e817c0c12f9&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalArticles: parsedData.totalResults,
        //     loading: false
        // })

        this.updateNews();
    }
    //componentDidMount : is used to take news url and serve its data to the page. 

    // handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1396de3da8a4c7291e83e817c0c12f9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);

    // this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading: false
    // })


    //     await this.setState({ page: this.state.page - 1 });
    //     this.updateNews()
    // }

    handleNextClick = async () => {
    // console.log("Next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1396de3da8a4c7291e83e817c0c12f9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     // console.log(parsedData);

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }


        await this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1396de3da8a4c7291e83e817c0c12f9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    };

    render() {
        return (
            <>
                <h1 className="text-center" style={{margin :'30px 0px', marginTop : '90px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News