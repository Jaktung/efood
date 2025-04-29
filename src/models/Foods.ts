class Food {
  average: number
  description: string
  image: string
  title: string
  infos: string[]
  id: number

  constructor(
    id: number,
    average: number,
    description: string,
    image: string,
    title: string,
    infos: string[]
  ) {
    this.id = id
    this.average = average
    this.description = description
    this.image = image
    this.title = title
    this.infos = infos
  }
}

export default Food
