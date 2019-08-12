import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default class extends React.Component {
  render() {
    let headerClass;
    if (this.props.styles) {
      headerClass = styles.header + " " + this.props.styles;
    } else {
      headerClass = styles.header;
    }

    return (
      <header className={headerClass}>
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
        </nav>
        <nav className={styles.nextPrevious}>
          <ul>
            {this.props.previous && (
              <li className="previous">
                <Link to={this.props.previous} data-icon="["><span>Previous</span></Link>
              </li>
            )}
            {this.props.next && (
              <li className="next">
                <Link to={this.props.next} data-icon="]"><span>Next</span></Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}
