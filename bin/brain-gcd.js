#!/usr/bin/env node

import runEngine from '../src/index.js'
import { gameDescription, generateData } from '../src/games/gcdGame.js'

runEngine(gameDescription, generateData)
