import { useState, forwardRef, ChangeEvent, FocusEvent } from 'react'

interface FloatingLabelInputProps {
  id: string
  name: string
  type?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
  error?: string
}

const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ id, name, type = 'text', value, onChange, label, error }, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setIsFocused(false)
    }
  }

  return (
    <div className='relative mb-6'>
      <div className='relative'>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full p-4 pt-6 peer border rounded transition-all duration-300 bg-white focus:outline-none focus:ring-2 focus:border-transparent ${
            error
              ? 'border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:ring-teal-200'
          }`}
        />
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-300
            ${
              isFocused || value
                ? 'text-xs text-teal-500 top-0 -translate-y-1/2 bg-white px-1' // Changed top-2 to top-0, added -translate-y-1/2
                : 'text-base text-gray-500 top-4'
            }
            peer-focus:text-xs peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-teal-500 peer-focus:bg-white peer-focus:px-1`} // Changed top-2 to top-0, added -translate-y-1/2
        >
          {label}
        </label>
      </div>
      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </div>
  )
})

FloatingLabelInput.displayName = 'FloatingLabelInput'

export default FloatingLabelInput
