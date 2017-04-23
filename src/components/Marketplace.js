import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { isEmpty } from 'ramda'

import Header from './Header'
import Footer from './Footer'

const styleMain = {minHeight: '595px'}
const enhance = compose(
  connect(state => ({ suppliers: state.suppliers }))
)

class Marketplace extends React.Component {

  render () {
    const styleBorderLeft = {borderLeft: '1px solid rgba(0,0,0,.12)'}
    const styleH3 = {margin: 0}
    const styleH3Right = {margin: 0, textAlign: 'right'}
    const styleTable = {width: '98%', padding: '16px', borderLeft: 0, margin: '0 0 0 16px', borderRight: 0}

    const { suppliers } = this.props

    const SuppliersTable = ({ suppliers, select }) => (
      <table className="mdl-data-table mdl-data-table--selectable" style={styleTable}>
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Material</th>
            <th>Cost</th>
            <th>Quality</th>
            <th>Lead Time</th>
            <th>Rating</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
        { suppliers.map((s, i) => {
            return (<tr key={i}>
              <td className="mdl-data-table__cell--non-numeric">{s.name}</td>
              <td>{s.cost}</td>
              <td>{s.quality}</td>
              <td>{s.leadTime}</td>
              <td>{s.rating}</td>
              <td>{s.verified}</td>
            </tr>)
        })}

        </tbody>
      </table>)

    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col" style={styleBorderLeft}>
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--9-col">
                                <h3 style={styleH3}>Suppliers</h3>
                            </div>
                        </div>
                        { isEmpty(suppliers) ?
                            <p className="sb-no-project">No suppliers yet</p> :
                            <SuppliersTable suppliers={suppliers} /> }
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
