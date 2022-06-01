import React from 'react';
import Header from '../components/Header';

const Home = () => {
  const homeData = {
    title: 'Welcome!',
    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita!',
    des2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur adipisci est praesentium mollitia optio, iure, placeat esse odio consequatur minima in odit? Modi exercitationem aperiam laborum eaque, explicabo ut possimus?',
  };

  const { title, des, des2 } = homeData;

  return (
    <>
      <Header />
      <section className="home">
        <h1>{title}</h1>
        <div className="home-wrapper">
          <p>{des}</p>
          <p>{des2}</p>
        </div>
      </section>
    </>
  );
};

export default Home;
