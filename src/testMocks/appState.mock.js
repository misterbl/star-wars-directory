const generateAppState = () => ({
  app: {
    fetchingPeopleAndFilms: false,
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
    currentView: {},
    isFatalError: false,
    fetchingCharacterDetails: false,
    species: "species",
    homeWorld: "homeWorld",
    characterFilms: "characterFilm",
    vehicles: [],
    starships: []
  }
});

export default generateAppState;
