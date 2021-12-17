import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';
import './News.css';


const News = () => {

    const news = useSelector((state) => state?.cryptoNews.news);

    const renderNews = () => {
      if (news) {
        return news.map((data, i) => {
          return (
            <a href={data.url} target="_blank">
              <div className="newscard">
                <div className="newscard__header">
                  <div className="newscard__title">
                    <h3>{data.name}</h3>
                  </div>
                  <img
                    src={data.image?.thumbnail.contentUrl}
                    className="newscard__img"
                  />
                </div>
                <div className="newscard__details">
                  <p>{data.description}</p>
                </div>
                <div className="newscard__footer">
                  <div className="newscard__provider">
                    <div>
                      <img
                        src={data.provider[0]?.image?.thumbnail.contentUrl}
                        className="provider__img"
                      />
                    </div>
                    <div>
                      <p>{data.provider[0]?.name}</p>
                    </div>
                  </div>
                  <div className='newscard__date'>
                    {moment(data?.datePublished).format('LL')}
                  </div>
                </div>
              </div>
            </a>
          );
        });
      }
    };


    return (
        <div className='news'>
            <div className='news__header'>
                <div className='news__title'>
                <h1>Cryptocurrency News</h1>
                </div>
            </div>
            <div className='news__cards'>
            {renderNews()}
            </div>
            
            
            
            
        </div>
    )
}

export default News
