const host = 'https://sheltered-ridge-96474.herokuapp.com'

export const uploadImg = (uri) => {
    const data = new FormData()
    data.append('file', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpg',
    })
    return new Promise((resolve, reject) => {
        fetch(`${host}/image`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            method: 'POST',
            body: data,
        })
        .then(res => {
            return res.json()
        })
        .then(data => resolve(data))
        .catch(err => {
            reject(err)
        })
      })
}
