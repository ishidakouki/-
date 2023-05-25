import {DispSituation} from "./DispSituation"

export const getSituation = (situation:number) :string => {
    return DispSituation[situation]
}