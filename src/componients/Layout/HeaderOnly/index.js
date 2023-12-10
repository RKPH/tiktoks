import React from 'react';
import Header from '~/componients/Layout/components/Header';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="Content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
