import PropTypes from 'prop-types';
import { Component } from 'react';
import React from 'react';
import css from "./Statistics.module.css";

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div className={css.statistic_wrap}>
                <h2 className={css.statistics_title}>Statistics:</h2>
                <ul className={css.statistic_list}>
                    <li className={css.statistic_item}>
                        <p>Good: 
                        <span className={css.statistic_number}>{good}</span>
                        </p>
                    </li>
                    <li className={css.statistic_item}>
                        <p>Neutral: 
                        <span className={css.statistic_number}>{neutral}</span></p>
                    </li>
                    <li className={css.statistic_item}>
                        <p>Bad:
                        <span className={css.statistic_number}>{bad}</span>
                        </p>
                    </li>
                </ul>
                <ul className={css.statistic_count_list}>
                    <li className={css.statistic_count_item}>
                        <p>Total: {total}</p>
                    </li>
                    <li className={css.statistic_count_item}>
                        <p>Positive feedback: {positivePercentage}</p>
                    </li>
                </ul>
            </div>
        )
    }
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}
export default Statistics;