import { useState, ChangeEvent } from 'react'

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='px-2 py-4 '>
            <form onSubmit={() => { }} className='flex flex-col items-center gap-3 mx-auto'>

                <input value={inputValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                    className='ring-1 ring-teal-500 focus:outline-none focus:ring-2 rounded-lg px-3 py-0.5'
                    placeholder='' />
                <button type='submit' className='bg-teal-400 hover:bg-teal-500 dark:bg-teal-800 dark:text-teal-200 
                transition duration-200 rounded-lg px-3 py-1 font-semibold'>اضافه کردن</button>
            </form>
        </div>
    )
}

export default Form
