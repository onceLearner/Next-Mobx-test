import { BriefData } from './../interfaces/index';

import { observable, action } from "mobx";

class BriefStore {

    @observable briefs: BriefData[] = []

    @action
    addBrief = (brief: BriefData) => {
        this.briefs.push(brief)
    }
}