function getPlaces() {
  return fetch('http://localhost:8080/places').then(data => {
    return data.json()
  }).catch(err=>{
    console.log('========================');

    console.log(err);
  })
}
export {getPlaces};
export default {
  places: [
    {
      imageUrl: '/images/p3.png',
      title: 'Desayunos el rey',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'sds'
    },
    {
      imageUrl: '/images/p1.png',
      title: 'Starbucks Norte',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'dsds'
    },
    {
      imageUrl: '/images/p2.png',
      title: 'Pizza de amor',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'dsdsd'
    }
  ]
}
