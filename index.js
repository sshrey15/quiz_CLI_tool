#!/usr/bin/env mode
import chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'

console.log(chalk.bgGreen('Hello, World!'))

let playerName;

const sleep  = (ms = 2000 ) => new Promise((resolve)=> setTimeout(resolve, ms))



async function welcome() {
    const raninbowTitle = chalkAnimation.rainbow('Welcome to the game! \n')
    await sleep()
    raninbowTitle.stop()

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    I am  a processor in your computer.
    If you get any question wrong , I will be ${chalk.bgRed('angry')} and I will ${chalk.bgRed('terminate')} the game.
    So get all the questions right...
    `)

}

await welcome()

async function askName  () {
    const answers = await inquirer.prompt ({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',

        default (){
            return  'Player';

        }

    })

    playerName = answers.player_name
}

await askName()

