import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { isEmpty } from 'ramda'

import Header from './Header'
import Footer from './Footer'

const styleMain = {minHeight: '595px'}

const enhance = compose()

class Marketplace extends React.Component {

  render () {
    const styleH3 = {margin: 0}

    const Chat = () => (
        <div><iframe src="https://68379f6d.ngrok.io" style={{minHeight: '400px'}}></iframe></div>

     )

    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--9-col">
                                <h3 style={styleH3}>Chat</h3>
                            </div>
                        </div>
                        <Chat />
                    </div>
                </div>
            </div>
          </main>
          <Footer />
        </div>
    )
  }

}

export default enhance(Marketplace)
