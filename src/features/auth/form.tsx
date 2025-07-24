import { useForm } from '@tanstack/react-form'
import { useNavigate } from '@tanstack/react-router'
import z from 'zod/v4'
import { authClient } from '@/integrations/auth/client'

export function Login() {
  const navigate = useNavigate({
    from: '/',
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({
              to: '/',
            })
            // toast.success('Sign in successful')
          },
          onError: (error) => {
            // toast.error(error.error.message)
          },
        },
      )
    },
    validators: {
      onSubmit: z.object({
        email: z.email('Invalid email address'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
      }),
    },
  })
  return <div>AuthForm</div>
}
