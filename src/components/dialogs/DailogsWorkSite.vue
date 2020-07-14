<template>
  <div class="dailog dialog-work-site">
    <button class="btn-zero close close-icon-wrap" @click="$root.$emit('closeDialog')">
      <Cross />
    </button>
    <form>
      <div class="tiltle-dailog">
        <h2>Упростить работу с сайтом</h2>
        <img src="@/assets/img/two-settings-cogwheels.png" alt="cogwheels">
      </div>
      <div class="select-marka mb-4">
        <multiselect
          v-model="marka"
          placeholder="Выберите марку вашего авто"
          :options="['BMW-1', 'BMW-2', 'BMW-3', 'BMW-4']"
          :searchable="false"
          :allowEmpty="false"
          :showLabels="false"
          class="multiselect-marka"
        >
          <i
            class="fa fa-angle-down caret"
            slot="caret"
            slot-scope="{ toggle }"
            aria-hidden="true"
            @mousedown.prevent.stop="toggle"
          />
        </multiselect>
        <p class="mb-0" v-show="!secondSelectVisible">Можете пропустить данный шаг, нажать кнопу подтвердть</p>
      </div>
      <div class="select-model" v-show="secondSelectVisible">
        <multiselect
          v-model="model"
          placeholder="Укажите модель авто"
          :options="['X5', 'X6', 'X7']"
          :searchable="false"
          :allowEmpty="false"
          :showLabels="false"
          class="multiselect-model"
        >
          <i
            class="fa fa-angle-down caret"
            slot="caret"
            slot-scope="{ toggle }"
            aria-hidden="true"
            @mousedown.prevent.stop="toggle"
          />
        </multiselect>
      </div>
      <div class="block-info-button">
        <p>Данный сайт использует cookies вашего браузера, вы даете согласие на <router-link to="/" target="_blank" class="link">использование</router-link> и <router-link to="/" target="_blank" class="link">обработку данных.</router-link></p>
        <button class="btn-confirm btn-buy d-flex align-items-center justify-content-center"><AnimationImg /> Подтвердить</button>
      </div>
    </form>
  </div>
</template>

<script>
import Cross from '@/components/layout/Cross.vue'
import AnimationImg from '@/components/layout/AnimationImg.vue'

export default {
  name: 'DailogsWorkSite',
  data: () => ({
    marka: '',
    model: ''
  }),
  computed: {
    secondSelectVisible () {
      return !!this.marka
    }
  },
  components: {
    Cross,
    AnimationImg
  }
}
</script>

<style lang="scss" scoped>
  .dialog-work-site{
    width: 740px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 40px;
    min-width: 740px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    position: relative;
    .close-icon-wrap {
      top: 15px;
      right: 15px;
      position: absolute;
      font-size: 16px;
      opacity: 1;
      svg{
        width: 16px;
        height: 16px;
        opacity: 0.45;
        transition: all 0.3s;
      }
      &:hover{
        svg{
          opacity: unset;
          fill: #068fb0;
        }
      }
    }
    .tiltle-dailog{
      position: relative;
      h2{
        letter-spacing: 0.72px;
        color: #242424;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 35px;
        text-align: center;
        position: relative;
        z-index: 2;
      }
      img{
        position: absolute;
        left: 50%;
        top: -30px;
        transform: translateX(-50%);
        z-index: 1;
      }
    }
    .select-marka,
    .select-model{
      p{
        letter-spacing: 0.42px;
        opacity: 0.78;
        color: #333333;
        font-size: 14px;
        font-weight: 400;
        margin: 15px 0 0;
        position: relative;
        padding-bottom: 25px;
        &::before{
          position: absolute;
          content: '';
          height: 1px;
          background: #e8e8e8;
          width: 100%;
          bottom: 0;
        }
      }
      .multiselect-marka,
      .multiselect-model{
        height: 50px;
        border-radius: 5px;
        border: 1px solid #e8e8e8;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding-left: 20px;
        transition: all .3s;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          .caret {
            color: #00b9e5;
          }
        }
         /deep/  span.multiselect__placeholder {
          color: #333333;
          font-size: 14px;
          font-weight: 400;
          margin: 0;
          padding: 0;
          letter-spacing: 0.42px;
          @media (max-width: 767px){
            font-size: 13px;
          }
        }
        .caret {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          transition: all .3s;
          color: #00b9e5;
          cursor: pointer;
        }
        &--active {
          /deep/ .multiselect__content-wrapper {
            border: 1px solid #00b9e5;
            border-radius: 5px;
          }
          .caret {
            transform: translateY(-50%) rotate(180deg);
            color: #00b9e5;
          }
        }
        /deep/ .multiselect__tags {
          padding: 0;
          border: none;
          background: none;
          min-height: unset;
          .multiselect__single {
            color: #333333;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
            background: none;
            margin-bottom: 0;
            border-radius: 0;
            padding: 0;
          }
        }
        /deep/ .multiselect__content-wrapper {
          top: 0px;
          left: -1px;
          width: calc(100% + 2px);
          bottom: unset;
          border: 1px solid #e8e8e8;
          border-radius: 5px;
          .multiselect__element {
            max-width:  100%;
            span.multiselect__option {
              max-width:  100%;
              background: #fff;
              height: 34px;
              display: flex;
              align-items: center;
              position: relative;
              &:before {
                border-top: 1px solid #e8e8e8;
                position: absolute;
                content: '';
                width: calc(100% - 24px);
                top: 0;
                left: 12px;
              }
              &:hover{
                span{
                  color: #00b9e5;
                }
              }
              &--selected {
                color: #afafaf;
                font-weight: 400;
              }
            }
            &:first-child span.multiselect__option:before{
              border-top: none;
            }
          }
          .multiselect__option--highlight {
            background: none;
            color: #0bbce6;
          }
          .multiselect__option--selected {
            background: #fff;
            color: #000;
          }
        }
      }
    }
    .block-info-button{
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        letter-spacing: 0.36px;
        max-width: 355px;
        color: #333333;
        font-size: 12px;
        font-weight: 400;
        margin: 0;
        .link{
          font-size: 12px;
          font-weight: 400;
          margin: 0;
          color: #00b9e5;
          letter-spacing: 0.36px;
          text-decoration: underline;
        }
      }
      .btn-confirm{
        width: 200px;
        height: 43px;
        box-shadow: 1px 2px 0 #00b9e5;
        border-radius: 5px;
        background-color: #00b9e5;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        border: none;
        transition: all 0.3s;
        img{
          margin-right: 15px;
        }
        &:hover{
          background-color: #234e58;
          box-shadow: 1px 2px 0 #234e58;
        }
        &:focus{
          outline: none;
        }
      }
    }
    @media(max-width: 767px) {
      max-width: calc(100% - 30px);
      padding: 50px 15px 25px;
      min-width: 290px;
      width: 70%;
      .tiltle-dailog{
        h2{
          font-size: 19px;
        }
      }
      .select-marka,
      .select-model{
        .multiselect-marka,
        .multiselect-model{
          max-width: 240px;
        }
        p{
          font-size: 12px;
          margin-top: 10px;
        }
      }
      .block-info-button{
        flex-wrap: wrap;
        p{
          width: 100%;
          max-width: unset;
          margin-bottom: 20px;
        }
        .btn-confirm{
          margin: 0 auto;
        }
      }
    }
  }
</style>
