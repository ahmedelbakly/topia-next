import Image from 'next/image'
import React from 'react'

import style from "./nav.module.css"
import Link from 'next/link'
const Navbar = () => {
  return (
<nav className={style.nav} >
<div className={style.imgCont}>
    <Image src="./images/blog.png" className={style.logo} width={200} height={50}/>
</div>
<ul className={style.menu}>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/addBlog">Add blog</Link></li>
    <li><Link href="/about"> About</Link></li>
</ul>
    </nav>
  )
}

export default Navbar