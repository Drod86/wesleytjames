const products = [
    {
      id: 1,
      type: 'intro',
      title: 'Intro',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      id: 2,
      type: 'single',
      title: 'Session',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      id: 3,
      type: 'program',
      title: 'Program',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      id: 4,
      type: 'program',
      title: 'Some Product',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
    {
      id: 5,
      type: 'single',
      title: 'Some Other',
      featureList: [ 'fake feature 1', 'fake feature 2', 'fake feature 3', 'fake feature 4', 'fake feature 5'],
    },
  ]

  const users = {
    ['daniel.r.rodriguez86@gmail.com'] : {
      admin: true,
      firstName: 'Daniel',
      lastName: 'Rodriguez',
      email: 'daniel.r.rodriguez86@gmail.com',
      password: '1234',
      credits: '0',
      appointments: []
    }
  }

  export { products, users };