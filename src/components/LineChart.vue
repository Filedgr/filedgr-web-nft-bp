<template>
  <div></div>
  <va-tabs v-model="this.selectedTab" center>
    <template #tabs>
      <va-tab v-bind:style="[this.selectedTab === index ? { color: '#9f7aea' } : { color: 'white' }]"
              v-for="(value, index) in this.headers"
              :key=index
              :label="value"
              :name="index"/>
    </template>
  </va-tabs>

  <div>
    <Chart
      :size="{ width: 600, height: 400 }"
      :data="this.measures[parseInt(this.selectedTab)]"
      :margin="this.margin"
      :direction="this.direction"
      :axis="this.axis[parseInt(this.selectedTab)]">

      <template #layers>
        <Grid strokeDasharray="2,2"/>
        <Line :dataKeys="['x', 'y']"
              type="monotone"
              :lineStyle="{
          stroke: '#9f7aea'
        }"/>
      </template>

      <template #widgets>
        <Tooltip
          borderColor="#48CAE4"
          :config="{
          pl: { color: '#9f7aea' },
          avg: { hide: true },
          inc: { hide: true }
        }"
        />
      </template>

    </Chart>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { FileLoader } from '@/network/FileLoader'
import { parse } from 'csv-parse'
import { Chart, Grid, Line, Tooltip } from 'vue3-charts'
import { ref } from 'vue'
import { AxisConfig, ChartAxis } from 'vue3-charts/dist/types'

@Options({
  props: {
    fileUrl: String
  },
  components: {
    Chart,
    Grid,
    Line,
    Tooltip
  }
})
export default class LineChart extends Vue {
  private selectedTab = 0
  private fileUrl = ''
  private records: string[][] = []
  private headers: string[] = []
  private measures: { x: number, y: number }[][] = []
  private domains: [number, number][] = []
  private axis: ChartAxis[] = []

  private direction = ref('horizontal')
  private margin = ref({
    left: 0,
    top: 20,
    right: 20,
    bottom: 0
  })

  beforeMount () {
    this.loadFile()
  }

  private async loadFile () {
    const loader = new FileLoader(this.fileUrl, '')
    const csv = await loader.getCsvFile()
    const myParser = parse(csv, {
      delimiter: ','
    })

    myParser.on('readable', () => {
      let record: string[]
      while ((record = myParser.read()) !== null) {
        this.records.push(record)
      }
    })
    myParser.on('end', () => {
      this.headers = this.records[0].map((value, _) => value.split(' ')[0])
      this.records = this.records.slice(1, this.records.length)
      this.measures = this.records[0].map((_, colIndex) => this.records.map(
        (row, rowIndex) => {
          return {
            x: rowIndex,
            y: Math.round((Number(row[colIndex]) + Number.EPSILON) * 100) / 100
          }
        }
      ))

      for (let i = 0; i < this.measures.length; i++) {
        this.measures[i] = this.measures[i].filter(function (_, index) {
          return (index + 1) % 10 === 0
        })
        this.measures[i] = this.measures[i].map((val, ind) => {
          return {
            x: ind,
            y: val.y
          }
        })
      }

      function per (num: number, percent: number) {
        return num * percent / 100
      }

      this.measures.forEach((val, _) => {
        const temp = val.map(x => x.y)
        let min = Math.min.apply(Math, temp)
        let max = Math.max.apply(Math, temp)
        min = min - per(min, 10)
        max = max + per(max, 10)
        this.domains.push([min, max])

        this.axis.push({
          primary: {
            domain: [0, temp.length],
            type: 'linear'
          },
          secondary: {
            domain: [min, max],
            type: 'linear'
          }
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>

:root {
  --vc-nav-background-color: black;
  --vc-pgn-active-color: black;
  --vc-pgn-background-color: lightgray;
  --va-tab-content-color: black;
  --va-tab-color: #b58558;
  --va-primary: #b58558;
}
</style>
