import React from 'react'
import ReactDOM from 'react-dom'

class Hero extends React.Component {
    render() {
        return (
            <div>
            <div className="jumbotron vr">
                <div className="wrapper">
                    <div className="isHidden isVisible--medium">
                        <div className="grid grid--collapsed">
                            <div className="grid__col grid__col--8of12">
                                <h1 className="txt txt--weight-bold">Unlock the Secrets of Key Issue Comics.</h1>
                                <h2 className="txt">Introducing <strong>Key Collector<span className="service--mark">℠</span></strong>

                                    <br />Key Collector is the world's largest mobile database of highly collectible comic books.
                </h2>
                            </div>
                        </div>

                        <div className="grid__col grid__col--4of12">
                            <div className="jumbotron--heroManKey"><img className="img img--fill" src="app/images/heroManKey.png" alt="Hero" /></div>
                                <div className="jumbotron--heroMan"><img className="img img--fill" src="app/images/heroMan.png" alt="Hero with Key" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="isHidden--medium">
                            <div className="grid">
                                <div className="grid__col grid__col--12of12 padding--t0  txt--align-center">
                                    <h1 className="txt txt--weight-bold">Unlock the Secrets of Key Issue Comics.</h1>
                                    <h2 className="txt jumbotron--content">Introducing <strong>Key Collector<span className="service--mark">℠</span></strong>

                                        <br />Key Collector is the world's largest mobile database of highly collectible comic books.
                </h2>

                                </div>
                            </div>
                        </div>

                        <div className="isHidden--medium">
                        <div className="jumbotron--heroMan--tablet"><img className="" src="app/images/heroManKey.png" /></div>
                        </div>
                        </div>
             </div>

                )
    }
  }
  
  export default Hero
