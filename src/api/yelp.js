import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer aARmu1UomR6HFA6D1BBp8Pi1gamN_mlszIRhpOvwR9w-H1V96V_EhdZlxyMfyKZ1FlyxugJmDVNzzxZNnK6RO71qUQMvB-MyIXvbblJwfOxipAHFS3i1TJRIP8RHY3Yx'
    }
});


