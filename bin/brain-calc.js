#!/usr/bin/env node

import runEngine from '../src/index.js'
import { gameDescription, generateData } from '../src/games/calcGame.js'

runEngine(gameDescription, generateData)