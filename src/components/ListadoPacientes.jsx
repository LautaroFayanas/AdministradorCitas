
import { Pacientes } from './Pacientes'

export const ListadoPacientes = ({ pacientes , setPaciente , eliminarPaciente }) => {


  return (
    <div className='lg:w-3/5'>

      {
        pacientes.length ? 
      <>
          <h2 className=' text-3xl text-center'>Listado de Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'> Administra tus {''}
            <span className='text-indigo-600 font-bold '>Pacientes & Citas</span>
          </p>

          <div className='h-screen overflow-y-scroll'>
            {pacientes.map(paciente => (
              <Pacientes 
              key={paciente.id} 
              paciente={paciente} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              />
            )
            )}
          </div>
      </> : 
      <>
          <h2 className=' text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'> Agrega tus {''}
            <span className='text-indigo-600 font-bold '>pacientes y apareceran aca </span>
          </p>
      </>
      }

    </div>
  )
}
