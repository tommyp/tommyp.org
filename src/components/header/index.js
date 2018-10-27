import React from 'react';
import { Link } from "react-router-dom";
import ArticleNav from '../../components/articleNav';
import './header.css'

export default class extends React.Component {

  articleNav() {
    if (this.props.next || this.props.prev) {
      return(
        <ArticleNav
          prev={this.props.prev}
          next={this.props.next}
        />
      )
    }
  }

  render() {
    return (
      <header id="header">
        <nav>
          <ul>
            <li>
              <Link to="/" data-icon="H">
                <span>Tommy Palmer</span>
              </Link>
            </li>
            <li>
              <Link to="/work" data-icon="o">
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link to="/info" data-icon="i">
                <span>Info</span>
              </Link>
            </li>
          </ul>
        </nav>
        {this.articleNav()}
      </header>
    )
  }
}
