
export const Pacientes = ({paciente , setPaciente , eliminarPaciente}) => {
    const {nombre,propietario,email,fecha,sintomas,id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar el paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className='m-3 bg-withe shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha Alta: {''}
                <span>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span>{sintomas}</span>
            </p>

            <div className="flex justify-center">
                <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:opacity-90 font-bold rounded-lg text-white"
                onClick={ () => setPaciente(paciente) }
                >
                    Editar
                </button>

                <button
                type="button"
                className="mx-5 py-2 px-10 bg-red-600 hover:opacity-90 font-bold rounded-lg text-white"
                onClick={ handleEliminar }
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
