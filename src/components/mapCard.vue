<template>
  <div>
    <div class="row mt-5 mb-5">
      <div class="col-lg-4">
        <div class="">
          <ThailandMap />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="">
          <JapanMap />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="">
          <LaosMap />
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-lg-4">
        <div class="">
          <SouthKoreaMap />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="">
          <IndonesiaMap />
        </div>
      </div>
      <div class="col-lg-4">
        <div class="">
          <ChinaMap />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import IndonesiaMap from "@/components/IndonesiaMap.vue";
import SouthKoreaMap from "@/components/SouthKoreaMap.vue";
import LaosMap from "@/components/LaosMap.vue";
import ChinaMap from "@/components/ChinaMap.vue";
import JapanMap from "@/components/JapanMap.vue";
import ThailandMap from "@/components/ThailandMap.vue";

export default Vue.extend({
  components: {
    JapanMap,
    SouthKoreaMap,
    IndonesiaMap,
    ThailandMap,
    ChinaMap,
    LaosMap,
  },
  data() {
    return {
      country: {
        name: "Thailand",
        temp: 30.5,
      },
    };
  },
});
</script>

<style scoped></style>
