import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const obtenerPaciente = JSON.parse(localStorage.getItem('pacientes')) ;
      setPacientes(obtenerPaciente);
      console.log(obtenerPaciente);
    }
    obtenerLS();
  }, []);


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}

        />
        <ListadoPacientes 
        setPaciente={setPaciente}
        pacientes={pacientes} 
        eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
