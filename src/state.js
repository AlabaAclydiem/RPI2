import * as wData from "./data"

export const wCnt = 6
export var curW = Math.floor(Math.random() * (wCnt - 0.00001))
export const randWNum = () => {
    curW = Math.floor(Math.random() * (wCnt - 0.00001) )
} 
export const setWNum = (value) => {
    curW = value
}

export var curL = "ru"
export const switchLanguage = () => {
    if (curL === "ru") {
        curL = "en"
        wData.localization.setLanguage('en')
    } else {
        curL = "ru"
        wData.localization.setLanguage('ru')
    }
}