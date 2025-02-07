import { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import ListItem from '../ListItem';

export default function MainPage({ items }) {
  
  return (
    <>
    <div className="trending">
      <h3>Trending</h3>
    </div>
      <div className="items">
        {
          items.map((x) => (<ListItem key={x.id} item={x} />    ))
        }
      </div>

    </>
  )
}

