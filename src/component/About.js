import React, { Component } from 'react'

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About News 24/7</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://e7.pngegg.com/pngimages/678/286/png-clipart-news-24-24-7-service-television-channel-news-broadcasting-others-television-blue.png"
            alt="News 24/7"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p>
            Welcome to <strong>News 24/7</strong>, your go-to platform for the
            latest headlines from around the globe. We are committed to
            delivering real-time news updates, covering various topics such as
            politics, technology, sports, entertainment, and more.
          </p>
          <p>
            Our mission is to keep you informed with accurate and unbiased news
            so you can stay ahead in today’s fast-paced world. With a sleek
            design and user-friendly interface, we ensure you can access the
            information you need anytime, anywhere.
          </p>
          <p>
            <strong>Why choose News 24/7?</strong>
          </p>
          <ul>
            <li>Real-time news updates from trusted sources.</li>
            <li>Comprehensive coverage of global events.</li>
            <li>Easy navigation and a clean interface.</li>
          </ul>
          <p>
            Thank you for choosing News 24/7 as your trusted news source. Stay
            informed and empowered!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
