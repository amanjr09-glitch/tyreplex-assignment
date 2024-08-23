import React from 'react'
import "./Breadcrumb.css"
import { MdKeyboardArrowRight } from 'react-icons/md'


function Breadcrumb() {
  return (
      <div className='container'>
        <div className="breadcrumbWrapper">
          <ul className="list">
            <li className="listItem">
            <a className="listLink" href="/">Home <span><MdKeyboardArrowRight/></span></a>
            </li>
            <li className="listItem">
            <a className="listLink" href="/">Tyre Dealers <span><MdKeyboardArrowRight/></span></a>
            </li>
            <li className="listItem">
            <a className="listLink" href="/">Tyre Dealers Ghaziabad <span><MdKeyboardArrowRight/></span></a>
            </li>
            <li className="listItem"><span className="listLink disabled">SHREE HEMKUNT TYRES AND SERVICES</span></li>
          </ul>
        </div>
      </div>
  )
}

export default Breadcrumb
