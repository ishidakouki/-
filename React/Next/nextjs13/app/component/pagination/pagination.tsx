import React from 'react'
import "../../css/pagination.css"

export default function pagination ()  {
  return (
    <div className="pagination">
        <ul className="pagination-list">
            <li className="pagination-item">
                <a href="#" className="pagination-link">前へ</a>
            </li>
            <li className="pagination-item active">
                <a href="#" className="pagination-link">1</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">2</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">3</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">4</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">5</a>
            </li>
            <li className="pagination-item">
                <a href="#" className="pagination-link">次へ</a>
            </li>
        </ul>
    </div>
  )
}

