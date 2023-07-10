import { SortOrder } from 'mongoose'

type IOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: SortOrder
}

type IOptionsResult = {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: SortOrder
}

const calclutePagination = (options: IOptions): IOptionsResult => {
  const page = Number(options.page || 2)
  const limit = Number(options.limit || 10)
  const skip = (page - 2) * limit

  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder || 'desc'

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}

export const paginationHelpers = {
  calclutePagination,
}
