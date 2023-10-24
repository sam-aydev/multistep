
function SecondButton({handleBack, time, handleSubYr, handleSubmit}) {
  return (
    <div className=' sm:hidden'>
        <div className="flex justify-between mt-[510px] bg-white py-2 ">
            <div>
                <button onClick={handleBack} className='text-white bg-blue-900 font-medium rounded p-2'>Back</button>
            </div>
            <div>
                {!time &&<button onClick={handleSubmit} className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>}
                {time &&<button onClick={handleSubYr}  className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>}
            </div>

        </div>

    </div>
  )
}

export default SecondButton