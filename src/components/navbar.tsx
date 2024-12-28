import React from 'react'
import Menu from './menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        Electra
        <div>
            <Link href="/">
            Electra
            </Link>
        </div>
        {/* Mobile Menu */}
        <div>
            <Menu/>
        </div>
    </div>
  )
}

export default Navbar