const host = 'https://sheltered-ridge-96474.herokuapp.com'

export const uploadImg = (uri) => {
    const data = new FormData()
    data.append('photo', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpg'
  })
    return fetch(`${host}/image`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        body: data,
    })
}
