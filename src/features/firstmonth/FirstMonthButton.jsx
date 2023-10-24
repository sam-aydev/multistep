
function FirstMonthButton({handleSubmit, handleBack}) {
  
    return (
    <div>
        <div className='sm:hidden mt-[460px]'>
            <div className="flex justify-between px-3 bg-white py-2">
                <div>
                    <button onClick={handleBack} className='text-white bg-blue-900 font-medium rounded p-2'>Back</button>
                </div>
                <div>
                    {/* { <button className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>} */}
                    {<button 
                    onClick={handleSubmit}   
                    className='text-white bg-blue-900 font-medium rounded p-2'>Next Step</button>}
                </div>
            </div>

        </div>
    </div>
  )
}

export default FirstMonthButton