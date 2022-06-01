import React from 'react';
import Header from '../components/Header';

const Home = () => {
  const homeData = {
    title: 'Welcome!',
    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, distinctio. Quae eos fugiat corrupti ex fugit, repudiandae deleniti illo quisquam, rem veritatis cupiditate maiores itaque eligendi possimus quaerat quis expedita!',
  };

  const { title, des } = homeData;

  return (
    <>
      <Header />
      <section className="home">
        <h1>{title}</h1>
        <p>{des}</p>
      </section>
    </>
  );
};

export default Home;
