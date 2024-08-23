export interface IMascotaResponse{
    id: number;
    nombre: string;
    edad: number;
    raza_id: number;
    dueño_id: number;
    is_enfermo: boolean;
    is_en_tratamiento: boolean;
    is_medicacion:boolean;
    is_reciclado: boolean;
    peso: string;    
    in_adopcion: boolean;
}