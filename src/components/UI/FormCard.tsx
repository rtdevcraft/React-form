import React from 'react'

interface FormCardProps {
  title?: string
  className?: string
  children: React.ReactNode
}

const FormCard: React.FC<FormCardProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div
      className={`p-6 mx-auto w-full max-w-md bg-white rounded-lg shadow-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl md:p-8 ${className}`}
    >
      {title && (
        <h2 className='mb-6 text-2xl font-bold text-center'>{title}</h2>
      )}
      {children}
    </div>
  )
}

export default FormCard
