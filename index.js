#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .command(
    'current',
    'Получить текущую дату',
    (yargs) => {
      return yargs
        .option('year', {
          alias: 'y',
          describe: 'Показать текущий год',
          type: 'boolean'
        })
        .option('month', {
          alias: 'm',
          describe: 'Показать текущий месяц',
          type: 'boolean'
        })
        .option('date', {
          alias: 'd',
          describe: 'Показать текущий день',
          type: 'boolean'
        });
    },
    (argv) => {
      const now = new Date();
      if (argv.year) {
        console.log(now.getFullYear());
      } else if (argv.month) {
        console.log(now.getMonth() + 1);
      } else if (argv.date) {
        console.log(now.getDate());
      } else {
        console.log(now.toISOString());
      }
    }
  )
  .command(
    'add',
    'Добавить время к текущей дате',
    (yargs) => {
      return yargs
        .option('date', {
          alias: 'd',
          describe: 'Добавить дни к текущей дате',
          type: 'number'
        })
        .option('month', {
          alias: 'm',
          describe: 'Добавить месяцы к текущей дате',
          type: 'number'
        })
        .option('year', {
          alias: 'y',
          describe: 'Добавить года к текущей дате',
          type: 'number'
        });
    },
    (argv) => {
      let now = new Date();
      if (argv.date) {
        now.setDate(now.getDate() + argv.date);
      }
      if (argv.month) {
        now.setMonth(now.getMonth() + argv.month);
      }
      if (argv.year) {
        now.setFullYear(now.getFullYear() + argv.year);
      }
      console.log(now.toISOString());
    }
  )
  .command(
    'sub',
    'Уменьшить время от текущей даты',
    (yargs) => {
      return yargs
        .option('date', {
          alias: 'd',
          describe: 'Уменьшить дни от текущей даты',
          type: 'number'
        })
        .option('month', {
          alias: 'm',
          describe: 'Уменьшить месяцы от текущей даты',
          type: 'number'
        })
        .option('year', {
          alias: 'y',
          describe: 'Уменьшить года от текущей даты',
          type: 'number'
        });
    },
    (argv) => {
      let now = new Date();
      if (argv.date) {
        now.setDate(now.getDate() - argv.date);
      }
      if (argv.month) {
        now.setMonth(now.getMonth() - argv.month);
      }
      if (argv.year) {
        now.setFullYear(now.getFullYear() - argv.year);
      }
      console.log(now.toISOString());
    }
  )
  .help()
  .argv;