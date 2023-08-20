import { IMusic } from "../types";

export const slice = (arr: IMusic[], start = 0, count: number) => {
    return arr.slice(start, count)
}