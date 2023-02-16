import { toFormValidator } from '@vee-validate/zod'
import * as zod from 'zod'
import { useForm } from 'vee-validate'

export function useFormFn() {
  return {
    toFormValidator,
    zod,
    useForm,
  }
}
