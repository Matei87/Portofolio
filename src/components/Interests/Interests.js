import React from 'react';
import './interests.css'

class Interests extends React.Component {
    render() {
        return (
            <section id="interests">
                <h3>Interests <span className="dot" /></h3>

                <div className="container">

                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-6 wow animate__animated animate__fadeIn animate__slower">
                            <img src={require("../../img/coding.png")} alt="coding" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div>
                                <h4>Coding</h4>
                                <p>I’m passionate about coding. Because it is usable art. You can create something and people interact with, use, touch and work with.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-6 ">
                            <div>
                                <h4>Sports</h4>
                                <p>I allways enjoy doing sports. Started with football when I was a child, athletics in high school and later in to martial arts. And now trying to live healthy by eating good food and going to the gym.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 wow animate__animated animate__fadeIn animate__slower">
                            <img src={require("../../img/gym.jpeg")} alt="gym" />
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-6 wow animate__animated animate__fadeIn animate__slower">
                            <img src={require("../../img/games.png")} alt="games" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div>
                                <h4>Video Games</h4>
                                <p>I was pretty competitive in video games. Where I played for Romania in a sports game named FIFA and was in top 100 romanians when FIFA 2017 was released. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Interests;