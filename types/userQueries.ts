export type UserInfo = {
    userInfo: {
      bookOwned: {
        id: number,
        title: string,
        author: string,
        synopsis: string,
        linkImagem: string,
        stars: number,
        quantidade: number,
        userId: number
      },
      course: string,
      email: string,
      ensino: string,
      id: number,
      matricula: number,
      telefone: string,
      name: string,
      isAdmin: boolean
    }
  }

export type UserFavouriteBooks = {
  userFavouriteBooks: {
    favouriteBooks: []
  }
}