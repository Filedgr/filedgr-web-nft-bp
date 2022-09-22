<template>
  <div class="menu">
    <div class="menu-container">
      <va-tabs v-model="this.selectedTab" center>
        <template #tabs>
          <va-tab
            key="home"
            icon="home"
            label="Welcome"
            name="home"/>
          <va-tab
            key="certificate"
            icon="card_membership"
            label="Specification"
            name="certificate"/>
          <va-tab
            key="gallery"
            icon="collections"
            label="Gallery"
            name="gallery"/>
          <va-tab
            key="manual"
            icon="import_contacts"
            label="Manual"
            name="manual"/>
          <va-tab
            key="3d"
            icon="view_in_ar"
            label="3D"
            name="3d"/>
          <va-tab
            key="history"
            icon="history"
            label="History"
            name="history"/>
        </template>
      </va-tabs>
    </div>
  </div>
  <div class="content">

    <div v-if="this.selectedTab=='home'">
      <div class="img-container">
        <img src="../assets/fanthoms2.png"/>
      </div>
      <div class="text-container">
        <p>
          Congratulations for activating the NFT of your Blancpain. This is the unforgeable digital certificate of
          authenticity.
        </p>
        <p>
          Your <i>Fifty Fathoms Bathyscaphe</i> has the Serial Number <b>000001</b>. Keep an eye on your certificate for
          special offers.
        </p>
        <p style="margin-top: 30px">
          <b>Share this certificate with your friends:</b>
        </p>
      </div>
      <va-card tag='b'>
        <va-card-title>Social Share</va-card-title>
        <va-card-content>
          <s-twitter
            :window-features="this.windowFeatures"
            :share-options="this.twitterShareOptions"
            :use-native-behavior="this.useNativeBehavior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="126.444 2.281 589 589">
              <circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"/>
              <path
                d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 01-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 01-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0038.707-40.158z"
                fill="#fff"/>
            </svg>
          </s-twitter>

          <s-linked-in
            style="margin-left: 20px"
            :window-features="windowFeatures"
            :share-options="this.linkedInShareOptions"
            :use-native-behavior="useNativeBehavior"
          >
            <svg height="64" viewBox="0 0 72 72" width="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                  fill="#007EBB"/>
                <path
                  d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                  fill="#FFF"/>
              </g>
            </svg>
          </s-linked-in>

        </va-card-content>
      </va-card>

      <div class="text-container">
        <p style="margin-top: 30px">
          <b>This service is brought to you by:</b>
        </p>
      </div>
      <va-card tag='b'>
        <va-card-title>Partners</va-card-title>
        <va-card-content>
          <a href="https://filedgr.com" target="_blank"><img height="64" src="../assets/logos/filedgr.svg"></a>
          <span style="padding-left: 20px"></span>
          <a href="https://www.nir-watchdog.lu/" target="_blank"><img height="64" src="../assets/logos/nir.svg"></a>
        </va-card-content>
      </va-card>

    </div>

    <div v-else-if="this.selectedTab=='gallery'">
      <div style="width: 550px; margin-left: auto; margin-right: auto; margin-top: 50px;">
        <Carousel>
          <Slide v-for="slide in 3" :key="slide">
            <img :src="require(`@/assets/slider/bp-${slide}.jpeg`)"
                 style="height: 500px">
          </Slide>
          <template #addons>
            <Navigation/>
            <Pagination/>
          </template>
        </Carousel>
      </div>
    </div>

      <div v-else-if="this.selectedTab=='certificate'">
        <div class="main-container">
          <grid-images :items="this.images" :cells="3"/>
        </div>
      </div>

      <div v-else-if="this.selectedTab=='manual'">
        <div class="main-container">
          <vue-pdf-embed :source="this.manual"/>
        </div>
      </div>

      <div v-if="this.selectedTab=='3d'"
           style="margin-left: auto; margin-right: auto; text-align: center; margin-top: 25px;">

        <div class="text-container">
          <p>
            This NFT is Metaverse-Ready conctact us to get your watch in the metaverse <a
            href="mailto=customer.service@swatchgroup.com.au">customer.service@swatchgroup.com.au</a>.
          </p>
        </div>

        <div class="sketchfab-embed-wrapper">
          <iframe title="Blancpain Fifty Fathoms Watch"
                  width="640" height="480"
                  frameborder="0"
                  allowfullscreen mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport
                  execution-while-not-rendered web-share
                  src="https://sketchfab.com/models/c4675015c8b24defb10224f160b6ff75/embed"></iframe>
        </div>
      </div>

      <div v-if="this.selectedTab=='history'">
        <Timeline bg-color="#9dd8e0">
          <timeline-title style="color: white; font-size: x-large"><b>Watch Life</b></timeline-title>
          <timeline-item v-for="tx in this.transactions" :key="tx.hash" :hollow="false" line-color="green"
                         font-color="white" bg-color="green">
            <b>Date:</b> {{ tx.date.toLocaleString() }}<br/>
            <b>DLT Hash:</b> {{ tx.hash }}<br/>
            <span v-if="tx.currency.toLowerCase().startsWith('n')">
              <b>NFT Issued</b><br/>
              <b>Token: </b><a target="_blank"
                               v-bind:href="'https://testnet.xrpl.org/token/' + tx.currency.toLowerCase() + '.' + this.issuer">See the token</a><br/>
              <b>Issuing Transaction: </b> <a target="_blank"
                                              v-bind:href="'https://testnet.xrpl.org/transactions/' + tx.hash + '/detailed'">See the issue</a>
            </span>
            <span v-else-if="tx.currency.toLowerCase().startsWith('t')">
              <b>Transaction recorded</b><br/>
              <b>Token: </b><a target="_blank"
                               v-bind:href="'https://testnet.xrpl.org/token/' + tx.currency.toLowerCase() + '.' + this.issuer">See the token</a><br/>
              <b>Issuing Transaction: </b> <a target="_blank"
                                              v-bind:href="'https://testnet.xrpl.org/transactions/' + tx.hash + '/detailed'">See the issue</a><br/>
              <b>Content:</b><br/>
              <div v-if="tx.format == 'csv'">
                <LineChart
                  :file-url="tx.memo"></LineChart>
              </div>
              <div v-else-if="tx.format == 'txt'">
                <MessageWrapper :file-url="tx.memo"></MessageWrapper>
              </div>
            </span>
          </timeline-item>
        </Timeline>
      </div>

    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { SLinkedIn, STwitter } from 'vue-socials'
import GiGridImages from '@chinhpd/vue3-grid-images'
import { MyLedger, MyTransaction } from '@/my-xrpl/ledger'
import { IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common'
import { fromHex } from '@/utils/encoding'
import { Timeline, TimelineItem, TimelineTitle } from 'vue3-timeline'
import LineChart from '@/components/LineChart.vue'
import { FileLoader } from '@/network/FileLoader'
import MessageWrapper from '@/components/MessageWrapper.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import VuePdfEmbed from 'vue-pdf-embed'

@Options({
  components: {
    MessageWrapper,
    LineChart,
    SLinkedIn,
    STwitter,
    GiGridImages,
    Timeline,
    TimelineItem,
    TimelineTitle,
    VuePdfEmbed,
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
})
export default class ContentContainer extends Vue {
  private selectedTab = 'home'

  private images = [
    require('@/assets/images/bp1.png'),
    require('@/assets/images/bp2.png'),
    require('@/assets/images/bp3.png'),
    require('@/assets/images/bp4.png')
  ]

  private windowFeatures = {}
  private useNativeBehavior = false
  private twitterShareOptions = {
    url: window.location,
    text: 'See my Awesome Blancpain Fifty Fathoms Bathyscaphe and its NFT!',
    hashtags: ['blancpain', 'filedgr', 'nirscan']
  }

  private manual = './static/manual.pdf'
  private issuer = 'rrncZdYdgi2xHnLE4wqPB4rsvLhjcGejRg'
  private transactions: MyTransaction[] = []
  private messages: Map<string, string> = new Map<string, string>()

  mounted (): void {
    this.getTx()
  }

  async getMessage (url: string, hash: string) {
    const loader = new FileLoader(url, '')
    loader.getTxtFile().then(x => {
      this.messages.set(url, x)
    })
  }

  async getTx (): Promise<void> {
    const ledger = new MyLedger(this.issuer,
      'Tfiledgr001')
    await ledger.connect()
    const result = await ledger.getTx()
    if (result) {
      result.result.transactions.forEach(
        x => {
          if (x.tx?.TransactionType === 'Payment' && typeof x.tx.Amount !== 'string') {
            const myAmount = x.tx.Amount as IssuedCurrencyAmount
            // eslint-disable-next-line no-unused-expressions
            this.transactions?.push({
              hash: (typeof x.tx.hash === 'undefined') ? 'No Hash' : x.tx.hash,
              date: (typeof x.tx.date === 'undefined') ? new Date() : new Date((x.tx.date + 946684800) * 1000),
              currency: fromHex(myAmount.currency).trim(),
              amount: parseFloat(myAmount.value),
              memo: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoData!),
              format: (typeof x.tx.Memos === 'undefined') ? 'No Memo' : fromHex(x.tx.Memos[0].Memo.MemoFormat!)
            })
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/vars";
@import "../assets/css/main";

.menu {
  background-color: white;
  width: 100%;
  height: auto;
}

.content {
  color: white;
  display: block;
  width: 60%;
  height: 37.5rem;
  margin: auto;
  padding: $content-padding;
  background-image: url("../assets/bg-header.jpeg");
  background-position: center;
}

.sites {
  display: block;
}

.img-container {
  margin: auto;
  height: $watch-img-height;
  text-align: center;

  img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
}

.text-container {
  font-size: 1.25rem;
  line-height: 2.25rem;
  text-justify: inter-word;
  padding: $content-padding 0rem $content-padding;
  margin: 0px;
}

a {
  color: white;
  text-decoration: underline;
}

.main-container {
  width: 100%;
  height: 600px;
  margin: 50px auto;
}

.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

</style>
