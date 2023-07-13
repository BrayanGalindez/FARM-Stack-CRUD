import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <header className='flex justify-between items-center my-7'>
            <Link to="/">
                <h1 className='text-3xl font-bold'>Mis notas</h1>
            </Link>

            <Link to="/tasks/new" className='bg-zinc-950 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>
                <h1 className='text-3xl font-bold'>Añadir tarea</h1>
            </Link>
        </header>
    );
}

export default Navbar;