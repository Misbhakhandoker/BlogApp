import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: "Iv23liqzgBMbGo9J9Sdu",
            clientSecret: "20d3532e0bf32fcbde9cd85f2d29cab62094cf8e"
        })
    ],
    callbacks:{
        async session({session, token}: any){
            console.log(session, token);
            
            session.user.name = `${session?.user?.name}_${token?.sub}`
            return session
        }
    },
    secret: "default_secret_key"
}
const nextAuth = NextAuth(authOptions)

export {nextAuth as GET, nextAuth as POST}