import { Brief } from '../interfaces/index';

import { makeAutoObservable } from "mobx";


let initialBriefs: Brief[] = [
    {
        id: 1,
        city: "London",
        country_code: "UK",
        start_date: new Date("12/01/2022"),
        min_images: 21,
        max_images: 50,
        price: 2500,
        min_time: 2,
        max_time: 5,
    },


]



export class BriefsStore {

    constructor() {
        makeAutoObservable(this);
    }

    briefs: Brief[] = []

    addBrief = (brief: Brief) => {
        this.briefs.push(brief)
    }

    resetBriefs = () => {
        this.briefs = initialBriefs
    }
}