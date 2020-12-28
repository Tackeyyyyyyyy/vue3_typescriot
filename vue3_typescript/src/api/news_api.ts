import axios from "@/lib/axios"
import News from "@/models/news"

function createNewsFromResponse(res: any): News {
    return new News(res.id, res.title, res.text, res.post_date)
}

export const getNews: () => Promise<News[]> = async () => {
    const res = await axios.get('/news')
    return res.data.map((res: any) => createNewsFromResponse(res))
}
