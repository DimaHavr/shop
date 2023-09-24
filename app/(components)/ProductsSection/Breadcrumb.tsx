import Link from 'next/link'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { TiHome } from 'react-icons/ti'

const Breadcrumb: React.FC = () => {
  return (
    <div className=' flex h-[35px] items-center bg-light-grey shadow-box '>
      <ul className='container flex items-center justify-start gap-2 '>
        <li>
          <Link
            href='/'
            className='flex items-center gap-1 transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
          >
            <TiHome size={25} color='#17696A' />
            <MdOutlineArrowForwardIos size={15} color='#17696A' />
          </Link>
        </li>
        {/* <li>
          <Link
            href='/'
            className='flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]'
          >
            <p className='font-exo_2 text-black-dis'>Women</p>
            <MdOutlineArrowForwardIos size={15} />
          </Link>
        </li> */}
        <li>
          <p className=' font-exo_2 text-mid-grey'>Women</p>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumb
