<template>
  <div class="form-group double-imput-number-group">
    <label :for="id" class="lebel-input-number-double">{{ text }}</label>
    <div class="input-button">
      <input
        type="number"
        id="price-from"
        placeholder="От"
        name="entity"
        class="input-admin"
        :value="value"
        @input="val => $emit('input', val.target.value)"
      >
      <div class="button-group">
        <button class="btn-up"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
        <button class="btn-down"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="input-button">
      <input
        type="number"
        id="price-to"
        placeholder="До"
        name="entity"
        class="input-admin"
        :value="value"
        @input="val => $emit('input', val.target.value)"
      >
      <div class="button-group">
        <button class="btn-up"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
        <button class="btn-down"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputDoubleNumber',
  props: {
    text: String,
    id: String,
    value: String,
    placeholder: String,
    type: {
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
  .double-imput-number-group{
    display: flex;
    label.lebel-input-number-double{
      width: 50%;
      height: 45px;
      background-color: #f6f6f6;
      color: #676767;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .input-button{
      position: relative;
      .input-admin{
        width: 100%;
        &::placeholder{
          color: #676767;
          font-size: 16px;
          font-weight: 700;
          padding-left: 20px;
        }
      }
      .button-group{
        position: absolute;
        right: 15px;
        top: 48%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        padding: 0;
        .btn-up,
        .btn-down{
          border: none;
          background: none;
          color: #00b9e5;
          font-size: 12px;
          &:focus{
            outline: none;
          }
        }
        .btn-down{
          position: relative;
          &::before{
            position: absolute;
            content: '';
            width: 25px;
            height: 1px;
            background-color: #e8e8e8;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
      }
      &:nth-child(2) .input-admin {
        border-right: none;
        border-radius: 0;
      }
      &:last-child .input-admin {
        border-left: none;
        border-radius: 0 5px 5px 0;
        position: relative;
        &::before{
          position: absolute;
          content: '';
          width: 1px;
          height: 35px;
          background-color: #e8e8e8;
          left: 0;
          top: 0;
          z-index: 1;
        }
      }
    }
  }
</style>
