import React, { useState, useRef, ChangeEvent, FormEvent } from 'react'
import FloatingLabelInput from '../FloatingLabelInput'
import FloatingLabelTextarea from '../FloatingLabelTextArea'
import SubmitButton from '../SubmitButton'
import SuccessMessage from '../SuccessMessage'
import FormCard from '../FormCard'
import './ContactForm.css'

interface FormState {
  name: string
  email: string
  message: string
  submitted: boolean
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  [key: string]: string | undefined
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    submitted: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState<boolean>(false)

  const nameInputRef = useRef<HTMLDivElement>(null)
  const emailInputRef = useRef<HTMLDivElement>(null)
  const messageInputRef = useRef<HTMLDivElement>(null)

  const applyShakeAnimation = (elementRef: {
    current: HTMLDivElement | null
  }): void => {
    if (elementRef.current) {
      elementRef.current.classList.remove('shake-animation')

      void elementRef.current.offsetWidth

      elementRef.current.classList.add('shake-animation')

      setTimeout(() => {
        if (elementRef.current) {
          elementRef.current.classList.remove('shake-animation')
        }
      }, 250)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    if (!formState.name) {
      newErrors.name = 'Name is required'
      applyShakeAnimation(nameInputRef)
      isValid = false
    }

    if (!formState.email) {
      newErrors.email = 'Email is required'
      applyShakeAnimation(emailInputRef)
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid'
      applyShakeAnimation(emailInputRef)
      isValid = false
    }

    if (!formState.message) {
      newErrors.message = 'Message is required'
      applyShakeAnimation(messageInputRef)
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })

    // Clear the error for this field when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const isValid = validateForm()

    if (isValid) {
      setLoading(true)

      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        setFormState({
          ...formState,
          submitted: true,
        })
      }, 2000)
    }
  }

  const resetForm = (): void => {
    setFormState({
      name: '',
      email: '',
      message: '',
      submitted: false,
    })
    setErrors({})
  }

  if (formState.submitted) {
    return (
      <FormCard>
        <SuccessMessage onReset={resetForm} />
      </FormCard>
    )
  }

  return (
    <FormCard title='Contact Us' className='form-container'>
      <form onSubmit={handleSubmit}>
        <div ref={nameInputRef}>
          <FloatingLabelInput
            id='name'
            name='name'
            type='text'
            value={formState.name}
            onChange={handleInputChange}
            label='Your Name'
            error={errors.name}
          />
        </div>

        <div ref={emailInputRef}>
          <FloatingLabelInput
            id='email'
            name='email'
            type='email'
            value={formState.email}
            onChange={handleInputChange}
            label='Your Email'
            error={errors.email}
          />
        </div>

        <div ref={messageInputRef}>
          <FloatingLabelTextarea
            id='message'
            name='message'
            value={formState.message}
            onChange={handleInputChange}
            label='Your Message'
            error={errors.message}
            rows={4}
          />
        </div>

        <SubmitButton
          loading={loading}
          text='Submit Message'
          loadingText='Submitting...'
        />
      </form>
    </FormCard>
  )
}

export default ContactForm
