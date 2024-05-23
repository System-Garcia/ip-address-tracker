import './App.css'
import { Header } from './components'
import { InfoCard } from './components/InfoCard'


function App() {

  return (
    <>
      <div>
          <Header />
          <InfoCard ipAddress ={'Prueba'} location= 'Prueba' timezone= 'Prueba' isp = 'Prueba'/>
      </div>
    </>
  )
}

export default App
