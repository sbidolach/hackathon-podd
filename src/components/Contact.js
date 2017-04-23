import React from 'react'

import Header from './Header'
import Footer from './Footer'

class Contact extends React.Component {

  static defaultProps = {
  }

  render () {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="page-content">
              <br />
                <br />
                  <br />
              <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text"></h2>
                </div>
                <div className="mdl-card__supporting-text">
                </div>
                <div className="mdl-card__menu">
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">share</i>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
    )
  }

}

export default Contact
