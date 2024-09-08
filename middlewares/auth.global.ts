export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthUserStore()

    const isSamePage = to.path == "/login"
    if (!authStore.isLoggedIn && !isSamePage) {
        return useRouter().push("/login")
    }

       
})
