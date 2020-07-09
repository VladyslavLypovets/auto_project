<template>
  <div class="d-none d-xl-block fly-cogs">
    <div class="fly-cogs-wrap">
    <img
      src="@/assets/img/settings-big.png"
      alt="settings-big"
      class="fly-cog big"
      v-for="(cog, index) in bigCogs"
      :key="index"
      :data-offset="cog.offset"
    >
    <img
      src="@/assets/img/settings-small.png"
      alt="settings-small"
      class="fly-cog small"
      v-for="(cog, index) in smallCogs"
      :key="bigCogs.length + index"
      :data-offset="cog.offset"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlyCogs',
  data: () => ({
    smallCogs: [
      {
        x: 100,
        y: 150,
        offset: 0.5
      },
      {
        x: 70,
        y: 300,
        offset: 0.8
      },
      {
        x: 1000,
        y: 500,
        offset: 0.4
      },
      {
        x: 850,
        y: 70,
        offset: 0.6
      },
      {
        x: 450,
        y: 300,
        offset: 0.5
      }
    ],
    bigCogs: [
      {
        x: 460,
        y: 322,
        offset: 0.8
      },
      {
        x: 570,
        y: 222,
        offset: 0.6
      },
      {
        x: 1200,
        y: 420,
        offset: 0.7
      },
      {
        x: 50,
        y: 170,
        offset: 0.5
      },
      {
        x: 550,
        y: 320,
        offset: 0.5
      }]
  }),
  mounted () {
    Array.from(document.getElementsByClassName('fly-cog')).forEach(el => {
      const def = el.dataset.offset
      let mouseX = 0
      let mouseY = 0
      window.addEventListener('mousemove', (event) => {
        const offset = { top: el.offsetTop, left: el.offsetLeft }
        mouseX = Math.min(event.pageX - offset.left, 100)
        mouseY = Math.min(event.pageY - offset.top, 100)
      })
      let xp = 0
      let yp = 0
      setInterval(() => {
        xp += (mouseX - xp) / 12 * def
        yp += (mouseY - yp) / 12 * def
        el.setAttribute('style', `transform: translate(${xp}px, ${yp}px)`)
      }, 30)
    })
  }
}
</script>

<style lang="scss">
 .fly-cogs {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   pointer-events: none;
   z-index: 1;
   .fly-cogs-wrap {
     position: relative;
     width: 100%;
     height: 100%;
      img {
        position: absolute;
        transition: all .1s;
        &.small {
          width: 24px;
          height: 24px;
        }
        &.big {
          width: 42px;
          height: 42px;
        }
      }
      img{
        &:nth-child(1) {
          left: 53%;
          top: 25%;
        }

        &:nth-child(2) {
          left: 60%;
          bottom: 55%;
        }

        &:nth-child(3) {
          left: 45%;
          top: 57%;
        }

        &:nth-child(4) {
          left: 77%;
          bottom: 38%;
        }

        &:nth-child(5) {
          left: 71%;
          top: 2%;
        }

        &:nth-child(6) {
          left: 51%;
          bottom: 12%;
        }

        &:nth-child(7) {
          left: 42%;
          top: 21%;
        }

        &:nth-child(8) {
          left: 31%;
          bottom: 3%;
        }

        &:nth-child(9) {
          left: 25%;
          top: 77%;
        }

        &:nth-child(10) {
          left: 80%;
          bottom: 13%;
        }
      }
    }
    @media(max-width: 1199px) {
      display: none;
    }
  }
</style>
