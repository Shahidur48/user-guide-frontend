import axios from 'axios'

const USERS_REST_API_URL = 'https://user-guide-tutorial.herokuapp.com/users';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();