import React from 'react'

class Footer extends React.Component {

  static defaultProps = {
  }

  render () {
    return (
        <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__left-section">
              <div className="mdl-logo">Title</div>
              <ul className="mdl-mini-footer__link-list">
                <li><a href="/help">Help</a></li>
                <li><a href="/terms">Privacy & Terms</a></li>
              </ul>
            </div>
        </footer>
    )
  }

}

export default Footer
