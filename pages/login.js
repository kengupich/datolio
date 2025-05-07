import { supabase } from '../lib/supabaseClient'

export default function LoginPage() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Log in to Datolio</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}