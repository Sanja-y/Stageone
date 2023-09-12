import axios from "axios";

export default axios.create({
    baseURL: 'https://xtract.openturf.dev/stageone_backend/api/v1'
})