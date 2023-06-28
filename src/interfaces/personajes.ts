interface IPersonajes {
    id: number,
    name: string,
    image: string,
    episode: string[],
    gender: string,
    origin: {name: string}
}

export default IPersonajes