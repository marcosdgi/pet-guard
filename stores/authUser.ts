import type { IUsuarioResponse } from "~/models/usuario"
import { $fetch } from "ohmyfetch"
import { defineStore } from "pinia"

interface ILoginResponse {
    
        type: string
        token: string
        refreshToken: any
    
}

export const useAuthUserStore = defineStore({
    id: "login",

    state: () => ({
        user: localStorage.getItem("loggedUser") ? (JSON.parse(localStorage.getItem("loggedUser")!) as IUsuarioResponse) : null,
        token: localStorage.getItem("auth._token.local") || "",
        isLoggedIn: localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("isLoggedIn")!) : false,
    }),

    getters: {
    },

    actions: {
      

        async login(loginForm: { correo: string; contrasena: string }) {
            const baseUrl = useRuntimeConfig().public.apiURL
            try {
                const response = await $fetch<ILoginResponse>(`${baseUrl}/v1/usuarios/iniciarSesion`, {
                    method: "POST",
                    body: loginForm,
                })
                this.token = response.type + " " + response.token
                this.isLoggedIn = true
                localStorage.setItem("auth._token.local", this.token)
                localStorage.setItem("isLoggedIn", this.isLoggedIn)
                const user = await $fetch(`${baseUrl}/v1/usuarios/usuario/logged`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${response.token}`,
                    }
                })
                this.user = user as IUsuarioResponse
                localStorage.setItem("loggedUser", JSON.stringify(this.user))
                return true
            } catch (error) {
                return false
            }
        },
        logout() {
            this.isLoggedIn = false
            localStorage.setItem("isLoggedIn", this.isLoggedIn)
            localStorage.setItem("auth._token.local", "")
            this.user = {} as IUsuarioResponse
            localStorage.setItem("loggedUser", JSON.stringify(this.user))
            return useRouter().push("/login")
        },
    },
})
