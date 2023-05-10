import PropTypes from 'prop-types';
import { Component } from 'react';
import React from 'react';
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={css.btn_list}>
                {options.map(nameButton => (
                <li className={css.btn_item} key={nameButton}>
                        <button
                            type="button"
                            className={css.feedback_btn}
                            onClick={() => onLeaveFeedback(nameButton
                        )}>{nameButton}</button>
                </li>
                ))}
                
            </ul>
        )
    }
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,//масив рядків
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;