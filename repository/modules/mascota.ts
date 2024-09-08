import type { IMascotaResponse } from "~/models/mascota";
import HttpFactory from "../factory";


class MascotaModule extends HttpFactory{
    private BASE = 'v1/mascotas'

    async obtenerMascotas():Promise<Array<IMascotaResponse>>{
        return await this.call<Array<IMascotaResponse>>('GET', `${this.BASE}/obtenerMascotas`)
    }
}

export default MascotaModule;