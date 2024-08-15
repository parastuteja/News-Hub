import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
article=  [
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Thai court dismisses PM Srettha for violating constitution",
    "description": "The 67-year-old Srettha, who has been in power for less than a year, is the third PM in 16 years to be removed by the same court.",
    "url": "https://www.bbc.co.uk/news/articles/c98415kzxy9o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/265a/live/d1843a70-5a1d-11ef-a0b8-81063d05fb66.jpg",
    "publishedAt": "2024-08-14T10:22:16.3753609Z",
    "content": "Im confident in my honesty I feel sorry, but Im not saying I disagree with the ruling,\" he said at a press conference shortly after the ruling. The court's ruling is final and cannot be appealed.\r\nMr… [+2083 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Skai Jackson: Disney Channel star arrested at Universal Studios",
    "description": "Skai Jackson, known for her role as Zuri Ross in the sitcom Jessie, was held at Universal Studios.",
    "url": "https://www.bbc.co.uk/news/articles/c4gzd87w6n0o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/34cf/live/8b18f560-5a10-11ef-9599-994cc2b5f394.jpg",
    "publishedAt": "2024-08-14T10:22:15.0163257Z",
    "content": "A spokesperson for the Sheriff's Department said Miss Jackson was taken to a police station in West Hollywood for booking.\r\nPolice say she was involved in a \"domestic incident\" and that she was the \"… [+377 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Lifetimes: Katy Perry under Spain environmental investigation",
    "description": "Lifetimes: Katy Perry under Spain environmental investigation",
    "url": "https://www.bbc.co.uk/news/articles/c20411z4q34o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6222/live/f53bdaf0-5a0d-11ef-997c-711b7066309d.jpg",
    "publishedAt": "2024-08-14T08:07:15.4529309Z",
    "content": "Officials stressed that Katy Perry was not under investigation for what it called \"crimes against the environment\", as filming can be authorised in the area.\r\nThe environment department of the Balear… [+1109 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "NZ police race to recover meth-laced sweets distributed by charity",
    "description": "Police are racing to recover the sweets, which may have been distributed to up to 400 people.",
    "url": "https://www.bbc.co.uk/news/articles/cy0r5nkyyyeo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d49a/live/a22a4d90-59ec-11ef-a1e0-f9297638b567.jpg",
    "publishedAt": "2024-08-14T07:37:10.2660876Z",
    "content": "Police have asked people that have sweets wrapped in brand Rinda's yellow pineapple flavour packaging to contact them immediately.\r\n\"It's vital the public are aware of these lollies and the hazard th… [+1877 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "US soldier pleads guilty to selling military secrets to China",
    "description": "Sgt Korbein Schultz was allegedly paid $42,000 in exchange for dozens of sensitive security data.",
    "url": "https://www.bbc.co.uk/news/articles/c79w810e38no",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a908/live/43eae210-59ee-11ef-aa95-4f5c16be3e9a.png",
    "publishedAt": "2024-08-14T06:52:17.0312236Z",
    "content": "Sgt Schultz, who held a security clearance to access top secret information, conspired to collect data with someone whom he believed to be living in Hong Kong, according to court documents.\r\nThe purp… [+1307 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Zeekr: China EV firm claims world's fastest-charging battery",
    "description": "Zeekr says the new batteries can be charged from 10% to 80% in 10 and a half minutes using its chargers.",
    "url": "https://www.bbc.co.uk/news/articles/cgl20971wxpo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d5be/live/b42647a0-59f2-11ef-9a61-15457302f57d.jpg",
    "publishedAt": "2024-08-14T05:22:12.2661408Z",
    "content": "\"Teslas charging technology is not industry leading anymore and has not been for some time,\" said Tu Le, founder and managing director of consultancy firm Sino Auto Insights.\r\n\"These bold claims by Z… [+1137 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "'Squad' member Ilhan Omar wins congressional primary",
    "description": "Two other members of the progressive group of Democrats lost primaries earlier this year.",
    "url": "https://www.bbc.co.uk/news/articles/clywey7z8edo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ce00/live/a302b9c0-59cc-11ef-bd87-81a5dd1e97e9.jpg",
    "publishedAt": "2024-08-14T04:07:14.0636244Z",
    "content": "With 99% of the votes counted on Tuesday night, the Associated Press reported that Ms Omar won with 67,524 votes, or by just over 56%.\r\nComing in second was Don Samuels, a former member of the Minnea… [+2301 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "British-Australian pianist's show cancelled over Gaza remarks",
    "description": "Jayson Gillham dedicated a piece of music to journalists killed in Gaza.",
    "url": "https://www.bbc.co.uk/news/articles/cn02jd0n9d2o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/dc8d/live/ad0f00d0-59e1-11ef-bb64-15bd2e309174.jpg",
    "publishedAt": "2024-08-14T03:37:12.906479Z",
    "content": "Gillham - who is billed on the MSO website as \"as one of the finest pianists of his generation\" - was born in Australia but lives in the UK.\r\nAt the concert at the Iwaki Auditorium on Sunday, he perf… [+2169 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Kolkata doctor's rape and murder in hospital alarm India",
    "description": "The rape and murder of a female doctor in India highlight the violence against healthcare workers.",
    "url": "https://www.bbc.co.uk/news/articles/c93pqq9r5n4o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0b64/live/b9fa9960-589e-11ef-aebc-6de4d31bf5cd.jpg",
    "publishedAt": "2024-08-14T03:07:12.8444767Z",
    "content": "Things have worsened over the years, says Saraswati Datta Bodhak, a pharmacologist at a government hospital in West Bengal's Bankura district. \"Both my daughters are young doctors and they tell me th… [+1197 chars]"
  },
  {
    "source": {
      "id": "bbc-news",
      "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Israeli minister denounced for prayer call at Jerusalem holy site",
    "description": "Itamar Ben-Gvir visited the al-Aqsa Mosque compound with Israelis who defied a ban on Jewish prayer.",
    "url": "https://www.bbc.co.uk/news/articles/cg58yj57jdeo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/044c/live/27980530-5998-11ef-b2d2-cdb23d5d7c5b.jpg",
    "publishedAt": "2024-08-14T00:22:13.7980572Z",
    "content": "The site is the holiest place for Jews because it was the site of two Biblical temples. It is the third holiest place for Muslims, who believe it was where the Prophet Muhammad ascended to heaven.\r\nS… [+3265 chars]"
  }
]
  constructor(){
    super();
    console.log("Construcior from news")
    this.state = {
article:this.article,
 loading: false
  }}
  render() {
    return (
      <>
     
      <div className='container my-4 row '>
          <h2>NewsHub- Top Headlines</h2>
          <div className='row my-3 col md-5'>
          {this.state.article.map((element)=>{return(<div className='col-md-3'><NewsItem key={element.url} title={element.title.slice(0,45)} description={element.description.slice(0,60 )} imageurl={element.urlToImage} newsUrl={element.url}/></div>)})}
             
          </div>

      </div>
      </>
    )
  }

}

