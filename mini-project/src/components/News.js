import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  constructor(){
    super();
    console.log("Construcior from news")
  }
  render() {
    return (
      <>
      This is a component of news
      <div className='container my-3'>
          <h2>NewsHub- Top Headlines</h2>
          <div className='row my-4'>
              <div className='col-md-3'><NewsItem title='title1' description='desc1' imageurl="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
              <div className='col-md-3'><NewsItem title='title2' description='desc2' imageurl="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
              <div className='col-md-3'><NewsItem title='title3' description='desc3' imageurl="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
              <div className='col-md-3'><NewsItem title='title4' description='desc4' imageurl="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
              <div className='col-md-3'><NewsItem title='title5' description='desc5' imageurl="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
          </div>

      </div>
      </>
    )
  }
}
