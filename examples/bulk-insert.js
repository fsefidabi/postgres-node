const { pgp, db, insertNewRows } = require('../lib/insert-stream')
const { pgCreateTable } = require('../lib/create-table')
const { columns } = require('../lib/schema')
const { tableName } = require('../lib/argv')
const randomData = require('../lib/random-data-generator')
const createIndex = require('../lib/create-index')

function extractColNames () {
  const fields = columns.map(col => ({ name: col.name }))
  return fields
}

async function writeToTable (data) {
  const fields = extractColNames()
  const cs = new pgp.helpers.ColumnSet(fields, { table: `${tableName}` })
  await db.none(pgp.helpers.insert(data, cs))
}

(async () => {
  const deviceData = randomData()

  try {
    await pgCreateTable(`${tableName}`)
    if (tableName.includes('_idx')) {
      await createIndex()
    }
    await insertNewRows(deviceData, writeToTable)
  } catch (err) {
    console.log(err)
  }
})()
