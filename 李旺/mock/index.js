import axios from "axios"
import mockAdapter from "axios-mock-adapter"

import products from "./data/products"
const mock = new mockAdapter(axios);

mock.onGet("/products").reply(200, products);
