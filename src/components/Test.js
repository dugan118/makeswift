import Credentials from "next-auth/providers/credentials"
import { signIn } from "next-auth/react"

export default function Box({ className }) {
  return (
    <>
    <div>
      <button onClick={() => signIn('credentials')} className="w-10 h-6 bg-green-300 outline-2 rounded-md">CLixk Me</button>
    </div>
    </>
  )
}
