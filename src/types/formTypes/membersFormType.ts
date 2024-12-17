export interface MembersFormType {
    members: Member[],
}

export interface Member {
    name: string,
    position: string,
    tel?: string,
    email?: string,
}