import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import MenuSideBar from './MenuSideBar'
import { getTransactions } from '../actions'

const enhance = compose(
  connect((state, props) => ({
      project: state.projects.find((v) => v.id === Number(props.match.params.id)),
      transactions: state.transactions
  }))
)

const menuItems = [
    {label: 'Activity Feed', path: ''},
    {label: 'Project statistics', path: ''},
    {label: 'Donate', path: ''},
    {label: 'Outstanding request', path: ''},
    {label: 'Create funding request', path: ''},
    {label: 'Transaction download', path: ''}
]

const Item = ({t}) => (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{t.name}</td>
      <td>{t.date}</td>
      <td>{t.quantity}</td>
      <td>{t.price}</td>
    </tr>)

const TableTransaction = ({transactions = [], styleTable}) => (
    <table className="mdl-data-table mdl-data-table--selectable" style={styleTable}>
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Material</th>
          <th>Date</th>
          <th>Quantity</th>
          <th>Unit price</th>
        </tr>
      </thead>
      <tbody>
      { Object.keys(transactions).map((key, index) => {
          const t = transactions[key]
          return (<Item
                      key={key}
                      t={t}/>)
      })}
      </tbody>
    </table>)

const Images = ({transactions = []}) => (
    <div className="sb-project-images">
        { Object.keys(transactions).map((key, index) => {
            const t = transactions[key]
            const imgClass = 'demo-card-image mdl-card mdl-shadow--2dp p'+(index + 1);
            return (<div className={imgClass}>
                      <div className="mdl-card__title mdl-card--expand"></div>
                      <div className="mdl-card__actions">
                        <span className="demo-card-image__filename">{t.name}</span>
                      </div>
                    </div>)
        })}
    </div>)

const Box = ({transactions = [], styleTable = "", index}) => (
    <div>
        <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={index} style={{margin: '16px'}}>account_box</div>
        <TableTransaction transactions={transactions} styleTable={styleTable} />
        <br />
        <Images transactions={transactions} key={index} />
        <br/>
        <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
            onClick={() => alert('VOTED')}>
          Vote (Next Phase)
        </button>
        <br />
    </div>)

class Project extends React.Component {

  componentDidMount() {
      const { dispatch } = this.props
      dispatch(getTransactions({
          id: this.props.match.params.id
      }))
  }

  render () {
    const styleBorderLeft = {borderLeft: '1px solid rgba(0,0,0,.12)'}
    const styleH3 = {margin: 0}
    const styleH3Right = {margin: 0, textAlign: 'right'}
    const styleDonateBtn = {margin: 0}
    const styleTable = {width: '98%', padding: '16px', borderLeft: 0, margin: '0 0 0 16px', borderRight: 0}
    const styleTableNext = {width: '98%', padding: '16px', borderLeft: 0, margin: '16px 0 0 16px', borderRight: 0}
    const { project, transactions } = this.props

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
                            <div className="mdl-cell mdl-cell--6-col">
                                <h3 style={styleH3}>{project.name}</h3>
                            </div>
                            <div className="mdl-cell mdl-cell--3-col" >
                              <button style={styleDonateBtn} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                Donate
                              </button>
                            </div>
                            <div className="mdl-cell mdl-cell--3-col" >
                                <h3 style={styleH3Right}>{project.funds}</h3>
                            </div>
                        </div>
                        { Object.keys(transactions).map((key, index) => {
                            const t = transactions[key]
                            return <Box key={key} index={key} transactions={t} styleTable={styleTable} />
                        })}
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
