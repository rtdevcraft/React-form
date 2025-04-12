import React from 'react'

interface SuccessMessageProps {
  onReset: () => void
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className='text-center'>
      <div className='inline-block p-3 mb-4 text-green-500 bg-green-100 rounded-full'>
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5 13l4 4L19 7'
          ></path>
        </svg>
      </div>
      <h2 className='mb-2 text-2xl font-bold'>Thank you!</h2>
      <p className='mb-6'>Your message has been sent successfully.</p>
      <button
        onClick={onReset}
        className='px-6 py-2 text-white transition-colors bg-teal-500 rounded cursor-pointer hover:bg-teal-600'
      >
        Send another message
      </button>
    </div>
  )
}

export default SuccessMessage
