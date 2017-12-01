const host = 'https://polar-badlands-63537.herokuapp.com'

export const uploadImg = (uri) => {
    const data = new FormData()
    data.append('file', {
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
