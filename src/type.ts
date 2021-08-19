import {Moment} from "moment";

export type Periods = 'today' | 'this week' | 'this month'
export interface Post  {
    id: number,
    title: string,
    markdown: string,
    html: string,
    authorId: number,
    created: Moment
}