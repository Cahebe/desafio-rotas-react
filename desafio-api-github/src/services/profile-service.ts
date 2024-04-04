import axios from "axios";
import { BASE_URL } from "../utils/system";

export function searchProfile(profileName: string) {
    return axios.get(`${BASE_URL}${profileName}`)
}