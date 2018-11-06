import React from 'react'

export default (props) => {
    return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="https://www.google.com/" className="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <p>Account <b className="caret"></b></p>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="https://www.google.com/">Action</a></li>
                        <li><a href="https://www.google.com/">Another action</a></li>
                    </ul>
                </li>
            </ul>
            <form className="navbar-form navbar-right navbar-search-form" role="search">
                <div className="form-group">
                    <input type="text" value="" className="form-control" placeholder="Search..." />
                </div>
            </form>
        </div>
    )
}
