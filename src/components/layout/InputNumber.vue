<template>
  <div class="form-group imput-number-group">
    <label :for="id" class="lebel-input-admin">{{ text }}</label>
    <input
      type="number"
      :id="id"
      :placeholder="placeholder"
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
</template>

<script>
export default {
  name: 'InputNumber',
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
  .imput-number-group{
    position: relative;
    display: flex;
    label.lebel-input-admin{
      width: 50%;
    }
    .input-admin{
      width: 50%;
    }
    .button-group{
      position: absolute;
      right: 15px;
      top: 42%;
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
  }
</style>
