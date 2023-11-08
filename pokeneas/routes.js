const express = require('express')
import { Router } from 'express';
const app = express();
const router = Router();

const index = require('../index.js');

router.get("/", index.get);

export default router;