export type Program = {
    id: number;
    name: string;
    approval: boolean;
    situation: number
}

export type SearchValue = {
    id :  "default" | "asc" | "desc",
    name : string,
    approval: "all" | "true" | "false",
    situation: {
        0: boolean;
        10: boolean;
        20: boolean;
    }
}