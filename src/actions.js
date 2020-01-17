import axios from 'axios';
import { ALL_DATA_FROM_API } from "./constant"
export const getData = () => {
    return (dispatch) => {
       axios.get("https://rickandmortyapi.com/api/character/").then(response  => {
            dispatch({
                type: ALL_DATA_FROM_API,
                data: response.data ? response.data.results : []
            })
        }).catch(error => {
            throw(error);
          });
    }
}