export interface IQuestion {
    id?: number | string;
    question: string;
    type: string;
    // reponse: Array<IReponse>;
    reponse: IReponse[];
}

export interface IReponse {
    id?: string | number;
    enonce: string;
    score: number;
}