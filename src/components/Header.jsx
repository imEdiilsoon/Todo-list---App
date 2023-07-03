import Logo from '../assets/logo.png'

function Header() {
  return (
    <div className='flex justify-center py-5'>
      <img className='h-[60px]' src={Logo} alt="Todo list app, picture of: flaticon.com/free"/>
      <h1 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#957DAD] to-[#D291BC]'>Todo App</h1>
    </div>
  )
}

export default Header