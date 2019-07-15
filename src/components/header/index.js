import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default class extends React.Component {
  render() {
    return (
      <header className={styles.header + " " + this.props.styles}>
        <nav className={styles.nav}>
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
          <ul className={styles.nextPrevious}>
            <li className="previous">
              {this.props.prev && <Link to={this.props.prev}>Previous</Link>}
            </li>
            <li className="next">
              {this.props.next && <Link to={this.props.next}>Next</Link>}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
