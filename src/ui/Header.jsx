import logo from '../images/logo-primary.png'
import './Header.css'

const Header = () => {

  const menuItem= [
      { value: 'Services', link:'#services'},
      { value: 'Works', link:'services'},
      { value: 'Resume', link:'services'},
      { value: 'Skills', link:'services'},
      { value: 'Testimonial', link:'services'},
      { value: 'Contact', link:'services'},
  ]



  return (
    <div className='max-w-7xl flex mx-auto text-white/90 justify-between py-8'>
      <div className='flex items-center justify-center gap-4 cursor-pointer'>
        <img src={logo} alt="img logo" className='bg-cover h-full w-16' />
        <p className='hover:text-purple-700 duration-500'>mail@gerolddesign.com</p>
      </div>

      <div className='flex gap-8 items-center justify-center  cursor-pointer'>
        <ul className='flex list-none gap-8 items-center justify-center  cursor-pointer'>
            {menuItem.map ((items )=>{
              return(
                <li className='menu-item'>{items.value} 
            <span className='menu-hover'></span>
            </li>
              )
            })}
          {/* </li>
          <li className='hover:text-blue-700  menu-item overflow-hidden relative'>Works 
            <span className='w-full h-0.5 menu-hover duration-500 bg-purple-600 absolute top-0 -left-[100%] '></span>
          </li>
          <li className='hover:text-blue-700  menu-item overflow-hidden relative'>Resume 
            <span className='w-full h-0.5 menu-hover duration-500 bg-purple-600 absolute top-0 -left-[100%] '></span>
          </li>
          <li className='hover:text-blue-700 menu-item overflow-hidden relative'>Skills 
            <span className='w-full h-0.5 menu-hover duration-500 bg-purple-600 absolute top-0 -left-[100%] '></span>
          </li>
          <li className='hover:text-blue-700 relative menu-item overflow-hidden'>Testimonial
            <span className='w-full h-0.5 menu-hover duration-500 bg-purple-600 absolute top-0 -left-[100%] '></span>
          </li>
          <li className='hover:text-blue-700 relative menu-item overflow-hidden'>Contact
            <span className='w-full h-0.5 menu-hover duration-500 bg-purple-600 absolute top-0 -left-[100%] '></span>
          </li> */}
        </ul>
        <button className='btn bg-blue-800  hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 rounded-3xl duration-500'>Hire Me!</button>
      </div>
    </div>
  );
};

export default Header;