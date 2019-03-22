const generateAppState = () => ({
  app: {
    fetchingPeopleAndFilms: false,
    fetchingFilm: false,
    fetchingSingleResult: false,
    sendingInfoSms: false,
    peopleList: [
      {
        name: "name",
        height: "123",
        mass: "12",
        birth_year: "1234",
        gender: "gender"
      },
      {
        name: "name2",
        height: "123333",
        mass: "12233",
        birth_year: "1234223",
        gender: "male"
      }
    ],
    filmsList: [
      {
        director: "name",
        release_date: "1222",
        title: "title"
      },
      {
        director: "name2",
        release_date: "1223332",
        title: "title2"
      }
    ],
    result: {}
  }
});

export default generateAppState;
