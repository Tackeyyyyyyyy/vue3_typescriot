import dayjs, {Dayjs} from 'dayjs'

export default class News {
    id: number
    title: string
    text: string
    postDate: Dayjs

    constructor(id: number, title: string, text: string, postDate: string) {
        this.id = id
        this.title = title
        this.text = text
        this.postDate = dayjs(postDate)
    }
}
