import React from 'react'
import { compose, withState } from 'recompose'
import AddMeForm from './AddMeForm'

const enhance = compose(
    withState('modal', 'setModal')
)

class MenuSideBar extends React.Component {

  render() {
    const {menuItems, modal, setModal} = this.props

    return (
    <div>
        <ul className="mdl-list">
        { Object.keys(menuItems).map((key, index) => {
            const i = menuItems[key]
            return (
                <li className="mdl-list__item" key={ key }>
                  <a className="mdl-list__item-primary-content" href={ i.path }>
                    <i className="material-icons mdl-list__item-avatar">play_arrow</i>
                    <span>{ i.label }</span>
                  </a>
                </li>
            )
        })}
        </ul>
    </div>
    );
  }
}

export default enhance(MenuSideBar)
