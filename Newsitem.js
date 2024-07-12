import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let {title,description, imgUrl, newsUrl, author, date}= this.props;
    return (
      <div>
        <div className="card my-4 mx-7" style={{width: '23rem'}}>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="blank" className="btn btn-primary">Read More</a>
    <p className="card-text my-2"><small class="text-body-secondary">By {!author? "unknown":author} on {new Date(date).toGMTString()}</small></p>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
