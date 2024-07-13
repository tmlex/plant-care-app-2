export type Plant = {
  _id: string
  name: string
  comment: string
  userId: string
  tasks: {
    [key: string]: {
      _id: string
      comment: string
      completionDate: string
    }
  }
  __v: number
}
