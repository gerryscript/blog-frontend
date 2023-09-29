export default interface Article{
    title: string,
    abstract?: string,
    createAt?: Date,
    likes?: number,
    views?: number,
    tags?: {text: string, color: string }[],
    content?: string,
    coverUrl?: string
}