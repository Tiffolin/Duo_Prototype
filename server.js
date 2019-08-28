require ('dotenv').config()
const express = require ('express');
const mongoose = require ('mongoose');
const routes = ('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require ('path');

