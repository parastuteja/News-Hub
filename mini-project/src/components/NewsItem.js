import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title, description, imageurl}= this.props;
    return (
        <>
  
        <div className="card my-3">
        <img src={imageurl} class="card-img-top" alt=""/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
      </>
    )
  }
}
