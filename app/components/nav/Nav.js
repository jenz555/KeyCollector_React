import React from 'react'
import ReactDOM from 'react-dom'
// import VpnKey from 'react-icons/lib/md/vpn-key'



class Nav extends React.Component {
    render() {
        return (

            <div className="wrapper">

                <div className="grid vr">
                    <div className="grid__col grid__col--12of12 grid__col--4of12--medium grid__col--4of12--large " id="nav1">
                        <a className="txt txt--weight-bold btn btn--block nav--inpage--item cornersRounded" data-target="#section--1|-40">
                            What is Key Issue?
                            </a>
                    </div>
                   
                    <div className="grid__col grid__col--12of12 grid__col--4of12--medium grid__col--4of12--large " id="nav2">

                        <a className="txt txt--weight-bold btn btn--block nav--inpage--item cornersRounded" data-target="#section--2|-40">
                          Explore the App</a>
                    </div>

                    <div className="grid__col grid__col--12of12 grid__col--4of12--medium grid__col--4of12--large " id="nav3">
                        <a className="txt txt--weight-bold btn btn--block nav--inpage--item cornersRounded" data-target="#section--3|-40">
                           Contact</a>
                    </div>
                </div>

            </div>

        )
    }
}

export default Nav