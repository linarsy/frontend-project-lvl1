#!/usr/bin/env node
import { getQuestion, getAnswer, descriptionGame } from '../games/even';
import flow from '../flow';

flow(getQuestion, getAnswer, descriptionGame);
