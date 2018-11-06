import React from 'react'
import Account from './../../components/Layout/Account';

export default () => {
    return (
        <div id="navbar-full">
            <div id="navbar">
                <nav className="navbar navbar-ct-blue navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand navbar-brand-logo" href="http://www.creative-tim.com">
                                <div className="logo">
                                    <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt=""/>
                                </div>
                                <div className="brand"> Creative Tham </div>
                            </a>
                        </div>
                        <Account/>
                    </div>
                </nav>
            </div>

        </div>
    )
}
