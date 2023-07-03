import { PiProhibitBold } from 'react-icons/pi'

function TodoCards({item, onDelete}) {
  return (
      <div className="flex mt-2 justify-between w-[280px] border-2 border-[#957DAD] rounded-md py-2 px-5">
        <div className="font-semibold">{item.title}</div>
        <button className="flex items-center font-semibold italic hover:translate-y-px hover:text-red-400" onClick={() => onDelete(item.id)}>
          <h1 className='text-red-400 mr-[1px]'><PiProhibitBold/></h1>
          <h1>Eliminar</h1>
        </button>
      </div>
  )
}

export default TodoCards