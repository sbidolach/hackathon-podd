import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import MenuSideBar from './MenuSideBar'

const menuItems = [
    {label: 'Activity Feed', path: ''},
    {label: 'Project statistics', path: ''},
    {label: 'Donate', path: ''},
    {label: 'Outstanding request', path: ''},
    {label: 'Create funding request', path: ''},
    {label: 'Transaction download', path: ''}
]

const enhance = compose(
  connect((state, props) => ({ project: state.projects.find((v) => v.id == props.match.params.id ) }) ),
)

class Project extends React.Component {

  render () {
    const styleBorderLeft = {borderLeft: '1px solid rgba(0,0,0,.12)'}
    const styleH3 = {margin: 0}
    const styleH3Right = {margin: 0, textAlign: 'right'}
    const styleTable = {width: '98%', padding: '16px', borderLeft: 0, margin: '0 0 0 16px', borderRight: 0}
    const styleTableNext = {width: '98%', padding: '16px', borderLeft: 0, margin: '16px 0 0 16px', borderRight: 0}

    const { project } = this.props

    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--3-col">
                        <MenuSideBar menuItems={menuItems} />
                    </div>
                    <div className="mdl-cell mdl-cell--9-col sb-project-vote" style={styleBorderLeft}>
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--9-col">
                                <h3 style={styleH3}>{project.name}</h3>
                            </div>
                            <div className="mdl-cell mdl-cell--3-col" >
                                <h3 style={styleH3Right}>{project.funds}</h3>
                            </div>
                        </div>
                        <div className="material-icons mdl-badge mdl-badge--overlap" data-badge="1" style={{margin: '16px'}}>account_box</div>
                        <table className="mdl-data-table mdl-data-table--selectable" style={styleTable}>
                          <thead>
                            <tr>
                              <th className="mdl-data-table__cell--non-numeric">
                                Material
                              </th>
                              <th>Date</th>
                              <th>Quantity</th>
                              <th>Unit price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">Bench</td>
                              <td>2017-04-20 16:44:00</td>
                              <td>20</td>
                              <td>$150</td>
                            </tr>
                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">Playground</td>
                              <td>2017-04-20 16:44:00</td>
                              <td>1</td>
                              <td>$2000</td>
                            </tr>
                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">Bin</td>
                              <td>2017-04-20 16:44:00</td>
                              <td>10</td>
                              <td>$200</td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <div className="sb-project-images">
                            <div className="demo-card-image mdl-card mdl-shadow--2dp p1">
                              <div className="mdl-card__title mdl-card--expand"></div>
                              <div className="mdl-card__actions">
                                <span className="demo-card-image__filename">Bench x 20</span>
                              </div>
                            </div>
                            <div className="demo-card-image mdl-card mdl-shadow--2dp p2">
                              <div className="mdl-card__title mdl-card--expand"></div>
                              <div className="mdl-card__actions">
                                <span className="demo-card-image__filename">Playground</span>
                              </div>
                            </div>
                            <div className="demo-card-image mdl-card mdl-shadow--2dp p3">
                              <div className="mdl-card__title mdl-card--expand"></div>
                              <div className="mdl-card__actions">
                                <span className="demo-card-image__filename">Bin x 20</span>
                              </div>
                            </div>
                        </div>
                        <br/>
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                            onClick={() => alert('VOTED')}>
                          Vote (Next Phase)
                        </button>
                        <br />
                        <div className="material-icons mdl-badge mdl-badge--overlap" data-badge="2" style={{margin: '16px'}}>account_box</div>
                        <table className="mdl-data-table mdl-data-table--selectable" style={styleTableNext}>
                          <thead>
                            <tr>
                              <th className="mdl-data-table__cell--non-numeric">Material</th>
                              <th>Date</th>
                              <th>Quantity</th>
                              <th>Unit price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                              <td>2017-04-20 16:44:00</td>
                              <td>50</td>
                              <td>$1.25</td>
                            </tr>
                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                              <td>2017-04-20 16:44:00</td>
                              <td>10</td>
                              <td>$2.35</td>
                            </tr>
                            <tr>
                              <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                              <td>2017-04-20 16:44:00</td>
                              <td>10</td>
                              <td>$2.35</td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                            onClick={() => alert('End')}>
                          Vote (End Project)
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

export default enhance(Project)
