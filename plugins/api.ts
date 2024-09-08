import { $fetch, type FetchOptions } from "ohmyfetch"
import MascotaModule from "~/repository/modules/mascota"
interface IApiInstance {
    // Aqui deben ir los modules
    mascota: MascotaModule;
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const fetchOptions: FetchOptions = {
        baseURL: config.public.apiURL,
    }
    const apiFetcher = $fetch.create(fetchOptions)

    const modules: IApiInstance = {
        // Definir Modules aca instanciandolos
        mascota: new MascotaModule(apiFetcher),
    }
    return {
        provide: {
            api: modules,
        },
    }
})

