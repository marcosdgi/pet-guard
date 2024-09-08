import type { IMascotaResponse } from "./mascota";
import type { IRolResponse } from "./rol";

export interface IUsuarioResponse {
    id: number;
    nombre: string;
    segundoNombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;
    contrasena: string;
    mascota_id: number;
    rol_id: number;
    mascota: Array<IMascotaResponse>
    rol: IRolResponse
}