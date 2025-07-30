import { Loader } from '@/components/ui/loader'
import { authClient } from '@/integrations/auth/client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SignInGoogle } from '@/components/extend/button-auth';


export function AuthPage() {
  const { isPending } = authClient.useSession()

  if (isPending) {
    return <Loader />
  }

  return (
      <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center">
          Continue with Google to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignInGoogle />
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  )
}
