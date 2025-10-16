#!/usr/bin/env node

import runEngine from '../src/engine.js'
import { gameDescription, generateData } from '../src/evenGame.js'

runEngine(gameDescription, generateData)
