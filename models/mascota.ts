import type { ITipoRazaResponse } from "./tipoRaza";

export interface IMascotaResponse {
    id: number;
    nombre: string;
    edad: number;
    peso: number;
    imagen_mascota: string
    raza_id: number;
    usuario_id: number;
    is_enfermo: boolean;
    is_reciclado: boolean;
    is_adoptado: boolean;
    tipoRaza:ITipoRazaResponse;
}