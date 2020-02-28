const axios = require('axios')

const getBreeds = () => {
  try {

    return axios.get('https://dog.ceo/api/breeds/list/all')

  } catch (error) {
    console.error(error)
  }
}

const getysense = () => {
  try {

//    return axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks', {
//  params: {
//    uid: '70000735'
//    }
//  })
return axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735')

  } catch (error) {
    console.error(error)
    console.log("error");
  }
}

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(response => {

        if (response.data.message) {
        //console.log(`Got ${Object.entries(response.data.message).length} breeds`)
        }

    })
    .catch(error => {
      console.log(error)
    })
}

console.log(getysense());
//countBreeds()
