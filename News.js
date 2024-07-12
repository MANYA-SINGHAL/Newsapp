import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    category : 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }
    articles =[
      ]

    constructor(){
        super();
       this.state= {
        articles:[],
        page:1
       } 
   }

  /* async updateNews(){
       this.props.setProgress(10);
       const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdd8447814034250b0174dcf73a4178c&page=1&pageSize=8`;
       let data = await fetch(url);
       let parsedData = await data.json();
       console.log(parsedData);
       this.setState({articles : parsedData.articles});    
       this.props.setProgress(100);
   }*/
      async componentDidMount(){
        this.props.setProgress(10);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdd8447814034250b0174dcf73a4178c&page=1&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
        this.props.setProgress(100);
       };

      prevClick = async () =>{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdd8447814034250b0174dcf73a4178c&page=${this.state.page-1}&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});

        this.setState ({
          page: this.state.page-1
        })

       }

      nextClick = async () =>{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdd8447814034250b0174dcf73a4178c&page=${this.state.page+1}&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});

        this.setState ({
          page : this.state.page+1
        })

      }

  render() {
    return (
      <div>
        < >
    <div className='container my-4'>
        <h2 className='text-center' style={{marginTop:'90px'}}> Top {(this.props.category)} headlines</h2>
        <div className="row">

            {this.state.articles.map((element) =>{

                return  <div className="col-md-4 my-2">
                <Newsitem key={element.url} title={element.title} description ={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
    
            })}
           
        </div>

        <div className="container d-flex justify-content-around">

        <button disabled ={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.prevClick}> &larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.pageSize/6)} type="button" class="btn btn-primary" onClick={this.nextClick}>Next &rarr;</button>
        </div>
            </div>
        </>
      </div>
    )
  }
}

export default News
