const Chance = require('chance')

const chance = new Chance()
const generateRandomData = () => {
  return {
    launch_count: chance.integer({ min: 1, max: 350 }),
    launch_time: chance.date({ year: 2019, month: 4 }),
    install_date: chance.date({ year: 2019, month: 2 }),
    os_version: chance.pickone([
      '1.1.1',
      '1.1.1-staging',
      '1.3.0',
      '1.1.2',
      '1.1.3'
    ]),
    device_model: chance.pickone([
      'Mi A2',
      'M8',
      'S7',
      'S6',
      'Note 2',
      'Note',
      'N78'
    ]),
    device_token: chance.android_id(),
    device_type: 'android',
    user_id: chance.phone({ formatted: false }),
    token_status: chance.pickone(['ALLOWED', 'DENIED', 'TOKEN:ERR']),
    ip: chance.ip(),
    connection: chance.pickone(['WiFi', '3G', '4G', 'LAN', 'UNKNOWN']),
    app_version: chance.pickone([
      '1.1.0',
      '0.8.9',
      '0.9.0',
      '0.9.1',
      '0.9.2',
      '0.9.4'
    ]),
    created: chance.date({ year: 2019, month: 2 }),
    modified: chance.date({ year: 2019, month: 4 }),
    status: 'Active',
    subscriptions: 'default',
    timezone: 'Asia/Tehran',
    ad_id: '461CD5D8-3CCF-457A-96F6-8C8023A56A84',
    tags: chance.pickone([
      ['male'],
      ['female', 'vip'],
      ['L1'],
      ['male', 'vip', 'L1']
    ]),
    event_purchase_first_occurrence: chance.date({
      year: 2019,
      month: 2
    }),
    event_purchase_last_occurrence: chance.date({
      year: chance.year({ min: 2015, max: 2020 }),
      month: 3
    }),
    event_purchase_count: chance.integer({ min: 1, max: 4 }),
    user_info_name: 'Full Name generated by chance',
    user_info_birthday: chance.date(), // timestamp of date generated by chance,
    user_info_categories: chance.pickone([
      ['apple'],
      ['orange', 'apple'],
      ['golabi'],
      ['berry', 'pumbkin', 'apple', 'golabi']
    ])
  }
}

module.exports = generateRandomData
