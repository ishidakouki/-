type DispSituation = {
    [key: number]: string;
    default: string;
};

export const DispSituation:DispSituation = Object.freeze({
    0: "放送中",
    10: "放送予定",
    20: "作成中",
    default: ""
})