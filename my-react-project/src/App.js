
import './App.css';


function App() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#15b6bf]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className='text-[480px] font-bold py-[50px] text-white'>Simple Weather App</h1>
        
        <form>
          <input type ='text' className='w-[300px] h-[40px] pl-3' placeholder='City Name'/> <button className='bg-[blue] h-[40px] w-[300px]'>Submit</button>
        </form>
        

        <div className='w-[400px] mx-auto bg-white shadow-1g mt-[40px] p-[25px]'>

          <h3 className='font-bold text-[30px]'>Jaipur <span className='bg=[yellow]'>IN</span></h3>
          <h2 className='font-bold text-[40px]'>9.62oc</h2>
          <img src="https://openweathermap.org/img/w/50d.png"/>
          <p>Fog</p>
        </div>
      </div>
       
    </div>
  );
}

export default App;
