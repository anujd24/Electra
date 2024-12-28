
import Menu from './menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 text-gray-600p-4 flex items-center justify-between border-b-2 border-b-gray-600 uppercase'>
        Electra
        <div className='text-xl'>
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