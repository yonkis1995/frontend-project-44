#!/usr/bin/env node

import runEngine from '../src/index.js'
import { gameDescription, generateData } from '../src/games/primeGame.js'

runEngine(gameDescription, generateData)
