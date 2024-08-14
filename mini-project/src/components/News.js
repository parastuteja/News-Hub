import React from 'react'
import NewsItem from './NewsItem'

function News() {
  return (
    <>
    This is a component of news
    <div className='container my-3'>
        <h2>NewsHub- Top Headlines</h2>
        <div className='row'>
            <div className='col-md-3'><NewsItem title='title1' description='desc1'/></div>
            <div className='col-md-3'><NewsItem title='title2' description='desc2'/></div>
            <div className='col-md-3'><NewsItem title='title3' description='desc3'/></div>
            <div className='col-md-3'><NewsItem title='title4' description='desc4'/></div>
            <div className='col-md-3'><NewsItem title='title5' description='desc5'/></div>
        </div>
    
    
    </div>
    </>
  )
}

export default News