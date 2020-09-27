import axios from 'axios';

   export default axios.create({
            baseURL: 'https://api.unsplash.com',
            headers: {
                Authorization: 'Client-ID 3t_oQ6r_aJmwhGZaeBAkjgQMuqs1h5mAG5iJORN15gc'
            }
        });


