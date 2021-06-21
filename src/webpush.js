const webPush = require('web-push')

webPush.setVapidDetails(
  'http://localhost:3000',
  'BErcLQ28_nvLlo3R1xzlId6DgIqxyfAelAotEx5Jh2Ht41EC0ffyQMcfejgrGpY3HgvL2vPSTUChJK1LFFob8Mc',
  '1nT-V0x6UnavfMyalHcxGTa9wsw7JxfAOfd-GiH4aPM'
)

module.exports = { webPush }
