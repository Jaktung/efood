class Food {
  average: number
  description: string
  image: string
  title: string
  infos: string[]
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    infos: string[],
    average: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.infos = infos
    this.average = average
  }
}

export default Food
