import * as axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function upload(formData) {
    const url = `https://xn--e1abgm9f.kz/api/api/upload/`;
    return true;
    return axios.post(url, formData)
        // get data
        .then(x => x.data)
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/images/${img.id}` })));
}

export { upload }