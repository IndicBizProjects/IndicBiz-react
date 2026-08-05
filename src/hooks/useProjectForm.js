import { useState } from 'react'
import { FORM_COPY, FORM_INITIAL_VALUES } from '../data/contact'
import { submitProjectEnquiry } from '../services/contactService'

export function useProjectForm() {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState(FORM_INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [result, setResult] = useState(null)

  const update = (field, value) => setValues((current) => ({ ...current, [field]: value }))

  const toggleService = (service) => {
    update(
      'services',
      values.services.includes(service)
        ? values.services.filter((item) => item !== service)
        : [...values.services, service],
    )
  }

  const validate = () => {
    const nextErrors = {}
    if (step === 0 && values.services.length === 0) nextErrors.service = FORM_COPY.errors.service
    if (step === 1 && !values.name.trim()) nextErrors.name = FORM_COPY.errors.name
    if (step === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = FORM_COPY.errors.email
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const next = () => {
    if (validate()) setStep((current) => Math.min(current + 1, FORM_COPY.panels.length - 1))
  }

  const back = () => {
    setErrors({})
    setStep((current) => Math.max(current - 1, 0))
  }

  const submit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setErrors({})
    try {
      const response = await submitProjectEnquiry(values)
      setResult(response)
      setStatus('success')
    } catch {
      setErrors({ submit: FORM_COPY.errors.submit })
      setStatus('error')
    }
  }

  return { step, values, errors, status, result, update, toggleService, next, back, submit }
}
