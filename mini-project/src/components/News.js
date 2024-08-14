import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
article=  [
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "NBC News",
  "title": "Ford, Mazda issue do-not-drive warnings for 457,000 vehicles with Takata air bags - NBC News",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQUG8xc3ZTNEJ2alYyZEtRWWRyamIwckRjdHdWVVZqZFNGUEZvTE4wSTFMRHVPYUFZcDF6VVZER2JzcVEydURKZkkxeFN6U0hhTFE2R05SdHFmOEx1V2VqSC13Zkc0OWUtMGRKYzd3T1pPZUxKa19KZjdJTzRnTWJJeEctSFpGR2FrQl9SR05qVWNxYnNWYWpacm5MMXpycDhaMzN4bNIBVkFVX3lxTE1ZYXVKZk5WcUF6ckRaelBrb1ZRMUlDeG9mbVRxWDI1SUpQaUJzRXdpbVJnUjNuRTV1b3pMUFRVT0w0UV95SERzMFA3T2dYMy1NbTVZNWZR?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T14:05:21Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Investor's Business Daily",
  "title": "Cooling Inflation Buoys Fed Rate-Cut Hopes, S&P 500 - Investor's Business Daily",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNcGpSRGRzS2tEekhHUklSYUt4WGJFR2h6NGdLTWhNNDNsdXFibURzUnlSdDliS1hwc3ZmS1dqRkR6S1diYkdabHV4SGE0b2VwcFZoTmJjU1NXRjd4ekROT28teGdwVGNmekpjM2t1czBYdDhWQVZXUnhfN0hNTHdWWVFwQzhkY201dnYteXU2cTlKdjBKZTRlY0NGeWNYTTIwU1MzbUxvaElNUzJqRTBBbHV4ZUZ2UE1Wc3hYbA?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T13:32:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "The Associated Press",
  "title": "News outlets were leaked insider material from the Trump campaign. They chose not to print it - The Associated Press",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNallxb05HeXExU1JKUzJzeS15b2hGbkpwSDJUc096QV9XczB1TXdqS2ZORTZRbHc2YzhhZnh6VHphLThmNjFNdjBVcnM4T0lNT0NqM2oxeWxWUEJaMmdEdXhzQ2U0UzZSYl91RE5WV3diQU5pWFZlM2R0S2pZYVhKUlZKVDh6Wmx0VlFYd0RCMW5ZVnAtQjM4?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T13:14:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "The Wall Street Journal",
  "title": "Starbucks Ousts CEO, Names Chipotle Boss as Replacement - The Wall Street Journal",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNNHNJNkMwVVFLekFKaVFHc2FVN0RPalZ0TnBLd0FMNnE4T0gtaWh3ZjVtclNBbDVZUG50SVAxdk01a3dDQm5NbE5YSzlvcnhYWDN4NjlGMUFvRWhYNmFVejh2UE5FVExoS1oxaEZDdGEySGFxckR2c3VDc2Q1Z1V1MVVzV1dvTFJpQVhqOHRJbFFIaEMzclNGeUwyOVQ3WlU5?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T13:00:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "CBS Sports",
  "title": "NFL preseason Week 1 grades for first-round rookies: Who impressed, disappointed and surprised in NFL debuts - CBS Sports",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQYTJlTVhYZjBrZnd2OVJ2NE56S3M3TmZYd0dJM1hIWTd0ZmxOa2syUVBZdUJLRVV4cVBFeU04UUo2WXpPY3M3NDVaeTNaVXZhM0J4dFpVLV9mZXJDSlJJYzdhSXBuLTVvR2swX25pS0s3UF9CM0pIamtRMlQ1Y3lFV3ZTRTE1QV9TZ1h3T2l3cmtlWHo1T3ZxYnA0OHNlcE1qV0RzOWRwN3A3Z1lkeENqdFBPekJ5S3RIcFNFei1ZMW1pTF9VekRpTHRMNGd0emkzWmVBc2FLc3QtQdIB3wFBVV95cUxQemFFMEs4aUF3STFyVnJBTE94RFQ2RmFWamZKVElmblZXa3VOWnY5M0o5dlI5N3l3YU0teXVWWEU1WmIzdzdzbmd6QUtrY0RpWi15cXBRaXNDOVpER3pwcVpWV2VsNi1lM281N3hYT2FKMHlWRlpOU3A1YzRSbTNjOUZUTTNUREtGVDRneVFzRzJncXZudkd1eDZZaXRGZnF4LWl5WC0tUEZJeVV0UWRnTzRMS3d3c2Jja0VIQjQ5QUtrZF8zNF92eDZ2QW9BLXdaLXJLY25NdDFuemZHbjJR?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T12:59:01Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "WMUR Manchester",
  "title": "5 cases of Legionnaires' disease may be linked to cooling tower in downtown Lincoln, officials say - WMUR Manchester",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOZm5rNERxOGdRZDlva3Jnc056MFpXdUJvNHlsVnZWcERZQkpkcVhmbC1oR0tkNW1rc09LdjM4ZDBfSjZBQ2dfOG5yVkdhUXQ1XzJXZGt6RmM4YXZBV01TMWw5aVNDWVp3UlBfelJ3cWN4MzVKNmVQZDBZbFFqWHNaNlhqZWxBXzRQQS1vakFkcw?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T12:56:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Reuters.com",
  "title": "Exclusive: Only Gaza ceasefire will delay retaliation, say Iranian officials - Reuters.com",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOempTYm5uZkt6YjFha0ljZG1KWlhaWFp6RnhBbk1DVG56bFZDTUZ2ZDlwTTNwNVRfd3ptSi0xRWpvSUdES1BtUlpNMnNfczJaUnpyYzk1YUFYUGIwRWltNDFGd0YwajJnM0VpUUFHaTBzQ0JKUE1jWk8wQjFIWFVFYzZnOFZ5Nko1NVZBNERmekpqbzJfUE1SVDFlTE1MNDA3WDExZ25LZ1pTSW5YVEE3ZjEtQVZaVWhT?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T12:49:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "The Verge",
  "title": "Google Pixel 9 event: how to watch the livestream - The Verge",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNTEVWSVN5NnMwTE9oMlpQeGtHanBYa2xtcmpib000c1RzaFhteTVDdnhEYjNmbkQwZ0FpYnVtMnBBZVdRWUpUUEJNYUdjQ3lHYS1HVVlUMmprSXVNWDZ4b1VPaF9uMVlkTDBzcE5keGpubzFXcXBObDFHbkFKaTNtX2Q1N2dhSEU2Tjg2M1kzejJhcGFsT0VCZzJ5TDI?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T12:30:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Wccftech",
  "title": "More 3D V-Cache CPUs Coming To AM4 Platform As AMD Ryzen 5 5500X3D Spotted In EEC Listing - Wccftech",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE15REhhT2NrSVVaZjY5cTAyVjdzNVhVeFd0SjRzM1czQ2pWMXh5SkpKZkh4VHliMGFHR1BLT3RsSFB0MmJrNS1xdWZiMXdMSlp4eWtrUUhNSHBMTjNJa3Y0VEd6WWlUYmkyc3hUbFhIbW1BQWlPb2ZteWhjc0VSSXfSAYQBQVVfeXFMUE95MEc2Znh3YjZ0N2R2bDFxenhPNVc0SjN5WnJKeWhKWnAxRFowdFgyTm5TemVEOGtoNlNLQW45dzBES1lrN1JwTml1c19Dck9FUG5abjdIbWFZR2d5WWxJekYwdnV1XzZMNExkWHFUbzRhT05PRDVzVWR2ZGZpQ1NHR1Y3?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T12:10:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "New York Post ",
  "title": "Ocean with life-giving liquid water found on Martian subsurface in stunning discovery - New York Post ",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPUExCTTg5Um1nT3VHSUtLYTBLSUgzQmozakhqTGdFbkdNN3Rzd09seDJBUVRybnRRUkNZRFgxOXNXOTJSLUlyUFNTMFRwWjZoYkdQRE5fYkxTNEs1NjBvTXNkMnk5bVlCMWJQRURBeDdxSFBkcGYxdGtqaDc1eWVxdHN1T0U4eWIwWjAyQTRyVU5neThCSGhRVENrdzJNVlZoNllsODI5S3ZueklIOUlLMWhUTTltMGs5bnlsRVphR3drYVA2UlE?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:56:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "The Wall Street Journal",
  "title": "U.S. Efforts to Calm Mideast Fighting Face Critical Week - The Wall Street Journal",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPaERscll3WmJOUTBMNzk4bjdSbzJJX3VoM3ZTRVdnMWtlbmpvUVNDMGwwNVZFMU1GRktSQ3UxejVLN21jOW56bmY1aTBILUJqMFBDQ1F2aWdCR2g1YXAxU1AycG1vc090NWNsZ3lNbXZGX0ZQb1JxbnRZVWJSa2dZZWFZM0VYRlRQNVJSNC1VbWpuTUNweXBIUFptVHBGd2NHZWlLeQ?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:35:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Reuters.com",
  "title": "Russia strikes back at Ukrainian forces in Kursk region - Reuters.com",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPQm5JNW0yRno2MTRnY01xclRhcFdXdzFYSXVyUlFMR0VfNnNuRXAydnREWG9QZm1jVEJYV2ZreWpDRFg3Tksyc3ZINTNEVnNBdzNiWmxPOTFQWkNzRzdyZ04zOVo0Q1hseXQ0UlhxQThlbFBZQWU5ZTB2SnBOcVp4NVdYSGlMTklkdk4zcDFKazF1eGJWLXRLdUpfZWoyM3hHODZGbjNjME8?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:28:58Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "The Associated Press",
  "title": "Biden is announcing $150 million in research grants as part of his 'moonshot' push to fight cancer - The Associated Press",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPeU12WXk3RDd0YndiZFdKS0Vlb1FPN1ZPVGpvNkdkM1NMNTFRVlZMRG9jaVluM3hUTmhzdHBudWhhMm5wOGVzSEFIS1YzZFhSQURkLTdjbkEzTF9CUWlKdndpd1M0M3pJaUZ5TzVPV2w0bWVuVk0wSzdUWlptVHl3b0psVjc2SXFqWGFtS0hQQnY5bjI3bERxMmx3TzZKWmNB?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:24:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "TechRadar",
  "title": "New iPhone Air rumors suggest it could be a reason to skip this year’s iPhone 16 - TechRadar",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOcm1HSTQ0MVIzd2hlYzJ4VzhRSWg1YXgzQWgxU3NCVFZBVjNZQXdEa3BqaF81YlhoeklNS05IcVc0SDBTbjZsQ3p5aVY4TUJuT094alJBTk82cUZReXV6djVHYTl4aEl6dkY5b2FzSjk4NWE1Njk4dmZxVHkxeXkwYlc3YmpORnhPQzZxSW1pb1ZlTE4xV1o1TWdQV3o5cXpQYm55M2t4Q0hESlB4aExiczJnSGZ1TTZHQTVF?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:21:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Page Six",
  "title": "Blake Lively reveals clash over ‘It Ends With Us’ song choice amid Justin Baldoni feud rumors - Page Six",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOdGtzWGoxLUI2S0xoVzYwNEtSdmlUWDFid3VRVjFLVTlKakJ0bGoweHZoMk93S0lCM0FLa2RnZURSYXE0bHJ4aHN4LTFCdGRuUFo0aU5jTFZUc3Iwb2lBamlNSm1NaXgzQXVSS0JVQlBJUHVvQUhhMVJPRDM3djR6ZTJWN1lUTkV2RmhlUXhrV3ZtenFrNXIyLVdTUG1zUXV0ZmVkZTBrS2huRnF4R0p5c2dvYXhvc0VDUDlYdnVYSQ?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:20:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "BBC.com",
  "title": "Donald Trump's chat with Elon Musk on X fact-checked - BBC.com",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE02NTBuWDBKNjhKVHY3bWdTWVhjcEFjNlBTR2hmMzhMdjllUnBZdl85aURVVFdOUFEyUGFGaVZDbzZPeFRVVVR4ZzhKMW40WnZRYmJpRXkxV0NwUdIBX0FVX3lxTE03a0djUmlnRHdiNTV0VC04VFJIUThCRDNNQ24xbjBXMEVaLWNnYkh4YU5rYnVQTVhGUnlTa2xRNlpGSlA2OXQtVHFJQjlXTWkxUXBBSGxrVnFsZDV6dXJv?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:12:45Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Phys.org",
  "title": "New species of extinct walrus-like mammal discovered in the North Atlantic - Phys.org",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE11RXhKbGFsaUExVTdCX2FVdVFSbzY3dGIyTWREaTFKZkZmSlBhSldTWFdaeDFjMVBZZFNsMFU5cExPXzJ3LU52SW1RMjZ1aFRyUzJEMzVZQkVPc3BLenRPc3pERG5HWlpUNWJlVmZtdFoycFk3OFpPRTJR?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T11:00:01Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Financial Times",
  "title": "Home Depot cuts sales outlook as consumer spending weakens - Financial Times",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE9TTHVoTHdlRi1mcU1vOUZwbFktbW9PX0NiUUh6bnU5aF9yYXVzZmllalBTVHJOX2xmeXRyUUF0VjZGdGg4SnNGLVZZS0dkUDlib3hEeEFZVjROaF8tVDhIaEFwSUV5ZXRvQVgtRTZuUEE?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T10:20:31Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Reuters.com",
  "title": "'Alien: Romulus' reignites violence in the 'Alien' franchise - Reuters.com",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPSk5sTHIyajlraENTY3lWcWg1RW1ESUxsVDdmZ1d3QUVqLWJvMXdTX3RIb0pMLWdDbnZCbEJfa1JpcndtUDNndHc5QjBWUFVMckZvN2tsTndSQTA1WnlVWWI4NkdGSjAzdWR6a203Y0JyaG9maUQtZnlwQWNaT2NOUUFHYy1HTnZwLXVKY2VENGZ4ZXplU3Y1V0pR?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T10:15:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "BBC.com",
  "title": "Helicopter crash pilot attended their own party before flight - BBC.com",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5JZXB3dklqNkN3aFlGMThyMllZc3VZMzFUeWx0dmwyVTM5cm14a2dzbU5UMXVTWFdzYkIyWXBneVVBaWs4VjhncTFQWTlsRExjZHJyaW1vczF1UdIBX0FVX3lxTE9nVmV3TTluRUlZX2tmU0J1U2FLb2RxRzFUUllZblp3bWhPX2JnWnRNZG83aE1oVWJfYmRZY2FmS1VReElLTzhrbV80WEQxUXo0NFZoY1pNNUFxTVM3ZHhZ?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-08-13T09:57:19Z",
  "content": null
  }
  ]
  constructor(){
    super();
    console.log("Construcior from news")
    this.state = {
article:this.article
  }}
  render() {
    return (
      <>
      This is a component of news
      <div className='container my-3'>
          <h2>NewsHub- Top Headlines</h2>
          {this.state.article.map((element)=>{console.log(element)})}
          <div className='row my-4'>
              <div className='col-md-3'><NewsItem title='title1' description='desc1' imageurl="https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
             
          </div>

      </div>
      </>
    )
  }

}

