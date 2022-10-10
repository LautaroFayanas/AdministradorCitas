import { useEffect, useState } from 'react'
import { Error } from './Error';


export const Formulario = ({pacientes , setPacientes , paciente , setPaciente}) => {

    const [nombre , setNombre] = useState('');
    const [propietario , setPropietario] = useState('');
    const [email , setEmail] = useState('');
    const [fecha , setFecha] = useState('');
    const [sintomas , setSintomas] = useState('');

    const [error , setError] = useState(false)

    useEffect(() => {
        //OBJECT.KEY COMPRUEBO SI EL OBJETO TIENE O NO ALGO DENTRO 
        if(Object.keys(paciente).length > 0){ 
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)  
            console.log(paciente);
        }
    }, [paciente])
    

    const generarID = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion de Formulario
        //Los coloco dentro de corchete para tener acceso al includes.
        if([nombre,propietario,email,fecha,sintomas].includes('') ){
            setError(true)
            return;
        }

        setError(false);
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

        //Contruimos el objeto
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id){
            //Editando Registro
            objetoPaciente.id = paciente.id ;
            const pacienteActualizado = pacientes.map( pacienteAct => pacienteAct.id === paciente.id ? objetoPaciente : pacienteAct)
            setPacientes(pacienteActualizado);
            setPaciente({});

        }else{
            //Nuevo Registro
            objetoPaciente.id = generarID();
            setPacientes([...pacientes , objetoPaciente]);
        }


    }

  return (
    <div className='md:w-1/2 lg:w-2/5 '>
        <h2 className='font-back text-3xl text-center'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
            Anade pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg mx-10 py-5 px-5'
        >
                {error && <Error mensaje='Todos los campos son obligatorios' /> }

            <div className='mb-5'>
                <label htmlFor='mascota' className='block text-grey-700 uppercase font-bold'>
                    Nombre Mascota
                </label>
                <input
                id='mascota' 
                className='border-2 w-full p-2 mt-2 rounded-lg'
                placeholder='Nombre de Mascota'
                type='texto'
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)} />
                
            </div>

            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-grey-700 uppercase font-bold'>
                    Nombre Propietario
                </label>
                <input
                id='propietario' 
                className='border-2 w-full p-2 mt-2 rounded-lg'
                placeholder='Nombre de Propietario'
                type='texto' 
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor='email' className='block text-grey-700 uppercase font-bold'>
                    Email
                </label>
                <input
                id='email' 
                className='border-2 w-full p-2 mt-2 rounded-lg'
                placeholder='Email de Contacto'
                type='email' 
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor='alta' className='block text-grey-700 uppercase font-bold'>
                    Alta
                </label>
                <input  
                id='alta'
                type='date'
                className='border-2 w-full p-2 mt-2 rounded-lg'
                value={fecha}
                onChange={ (e) => setFecha(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor='sintomas' className='block text-grey-700 uppercase font-bold'>
                    Sintomas
                </label>
                <textarea
                id='sintomas'
                className='border-2 w-full p-2 mt-2 rounded-lg'
                placeholder='Describe los sintomas'
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value)}
                />
            </div>
            <input 
            type='submit'
            className='bg-indigo-600 w-full p-3 text-white rounded-sm font-bold uppercase hover:opacity-80 '
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
            />
        </form>
    </div>
  )
}
