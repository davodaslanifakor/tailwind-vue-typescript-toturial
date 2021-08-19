import { Post } from "@/type";
import moment from "moment";

export const basePost: Post = {
    id: 1,
    title: 'Base post',
    markdown: 'Content',
    html:'<p>Content</p>',
    authorId: 1,
    created: moment()
}
export const todayPost: Post = {
    ...basePost,
    title: 'today post'
}
export const weekPost: Post = {
    ...basePost,
    title: 'week post',
    created: moment().subtract(2,'day')
}
export const monthPost: Post = {
    ...basePost,
    title: 'month post',
    created: moment().subtract(2,'week')

}