export interface Rutina {
    id?: string | number,
    customer: string,
    type: string,
    duration: number,
    skillLevel: string,
    isGroupSession: boolean,
    notes: string
}
