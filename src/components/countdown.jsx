import './countdown.css'

function Countdown(){
 return (
  <div className="Countdown-home">
   <div className="counts mx-auto mt-8 grid grid-cols-4 grid-flow-col-dense justify-around">
    <div className="time-card">
     <div className="days mx-auto">
      <div className="up-counter bg-liteBlue h-20 ">
        <span className="text-softRed text-7xl font-semibold relative ">09</span>
      </div>
      <div className="down-counter bg-liteBlue h-20">
       <span className="text-softRed text-7xl font-semibold relative">09</span>
      </div>
     </div>
     <p className="text-softBlue font-semibold tracking-widest mt-3 mr-2">DAYS</p>
    </div>
    <div className="time-card">
     <div className="hours mx-auto">
      <div className="up-counter bg-liteBlue h-20 ">
        <span className="text-softRed text-7xl font-semibold relative ">09</span>
      </div>
      <div className="down-counter bg-liteBlue h-20">
       <span className="text-softRed text-7xl font-semibold relative">09</span>
      </div>
     </div>
     <p className="text-softBlue font-semibold tracking-widest mt-3 mr-2">HOURS</p>
    </div>

    <div className="time-card">
     <div className="minutes mx-auto">
      <div className="up-counter bg-liteBlue h-20 ">
        <span className="text-softRed text-7xl font-semibold relative ">09</span>
      </div>
      <div className="down-counter bg-liteBlue h-20">
       <span className="text-softRed text-7xl font-semibold relative">09</span>
      </div>
     </div>
     <p className="text-softBlue font-semibold tracking-widest mt-3 mr-2">MINUTES</p>
    </div>

    <div className="time-card">
     <div className="seconds mx-auto">
      <div className="up-counter bg-liteBlue h-20 ">
        <span className="text-softRed text-7xl font-semibold relative ">09</span>
      </div>
      <div className="down-counter bg-liteBlue h-20">
       <span className="text-softRed text-7xl font-semibold relative">09</span>
      </div>
     </div>
     <p className="text-softBlue font-semibold tracking-widest mt-3 mr-2">SECONDS</p>
    </div>

   </div>
  </div>
 );
}
export default Countdown