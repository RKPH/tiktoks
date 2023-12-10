import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TIKTOK-LOGO" />
                </div>

                <form data-e2e="search-box" className={cx('form')} action="/search">
                    <input placeholder="search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('load-btn')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>

                <div className={cx('actions')}>actions</div>
            </div>
        </header>
    );
};

export default Header;
