import XLSX from 'xlsx'

const vuexlsx = {
  data () {
    return {
      sheetIndex: 0
    }
  },

  methods: {
    read_ (blob, opts = {}) {
      return XLSX.read(blob, opts)
    },

    getSheet_ (wb, index) {
      if (wb.SheetNames.length <= index) {
        return null
      }

      const sheetName = wb.SheetNames[index]

      return wb.Sheets[sheetName]
    },

    toJson (blob, options = {}) {
      const {
        parsingOpts = {},
        sheetIndex = this.sheetIndex,
        ...opts
      } = options

      const wb = this.read_(blob, parsingOpts)
      const ws = this.getSheet_(wb, sheetIndex)

      if (!ws) {
        return null
      }

      return XLSX.utils.sheet_to_json(ws, opts)
    }
  }
}

export default vuexlsx
