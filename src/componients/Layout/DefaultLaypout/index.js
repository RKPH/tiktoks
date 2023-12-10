import React from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/componients/Layout/components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

const DefaulLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} />
            <div className={cx('container')}>
                <Sidebar className={cx('sidebar')} />
                <div className={cx('contain')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaulLayout;
