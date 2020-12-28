import dayjs from 'dayjs'

export function dateFormat(time: string | number | Date | dayjs.Dayjs | undefined) {
    return (!time) ? '-' : dayjs(time).format('YYYY年MM月DD日')
}