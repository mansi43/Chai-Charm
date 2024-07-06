import NextAuth from 'next-auth'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb'

// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github"

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        await connectDB()
        //check if user already exist in database
        const currentUser = await User.findOne({ email: email })
        if (!currentUser) {
          //create a new user
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          })
        }
        return true
      }
    },
    async session({ session, token, user }) {
      const dbUser= await User.findOne({email:session.user.email})
      session.user.name = dbUser.username
      return session
    }
  }
})

export { authoptions as GET, authoptions as POST }