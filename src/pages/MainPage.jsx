import { useEffect, useState, useRef } from 'react'
import { Outlet, Link } from 'react-router-dom';
import ListItem from '../ListItem';
import { useDraggable } from "react-use-draggable-scroll";

export default function MainPage({ items }) {
  const dragRef = useRef()
  const { events } = useDraggable(dragRef);

  const randomTrending = items.slice(12, 17)

  return (
    <>
    <div className="trending">
      <h3>Trending</h3>
      {/* add react drag scroll */}
      <div className="trending-list" {...events}
      ref={dragRef}>
        {
          randomTrending.map((x) => (<ListItem key={x.id} item={x} />    ))
        }
      </div>
    </div>

    <div className="recommended">
      <h3>Recommended For You</h3>
      <div className="items">
        {
          items.map((x) => (<ListItem key={x.id} item={x} />    ))
        }
      </div>
    </div>
    

    </>
  )
}

