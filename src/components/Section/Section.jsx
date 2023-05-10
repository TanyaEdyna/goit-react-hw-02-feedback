import PropTypes from 'prop-types';
import { Component } from 'react';
import React from 'react';
import css from "./Section.module.css";

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className={css.title_wrap}>
            <h1 className={css.title}>{title}</h1>
                {children}
            </div>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;
