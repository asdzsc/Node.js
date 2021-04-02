// import axios from "axios";
const axios = require("axios");

axios
    .get(
        "https://m.maoyan.com/ajax/topRatedMovies?token=&optimus_uuid=682A22D08AF311EBA4251F5DD3F4DF5C94FAEBE11FAA44D48BFB05E6B38D8A94&optimus_risk_level=71&optimus_code=10"
    )
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        throw err;
    });