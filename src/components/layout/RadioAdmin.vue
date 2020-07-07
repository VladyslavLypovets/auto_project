<template>
  <div class="form-group">
    <input :type="type" :id="id" :name="name" class="form-control checkbox" :checked="value"  @change="$emit('change')">
    <label :for="id">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'RadioAdmin',
  props: {
    text: String,
    id: String,
    name: String,
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'radio'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group{
  margin-left: 15px;
  .checkbox{
    display: none;
    & + label{
      display: block;
      padding-left: 25px;
      position: relative;
      text-transform: uppercase;
      color: #676767;
      font-size: 16px;
      font-weight: 400;
      margin-right: 50px;
      cursor: pointer;
      &::before{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        border-radius: 2px;
        border: 1px solid #dfdfdf;
        background-color: #f6f6f6;
        margin-right: 10px;
      }
      @media (max-width: 767px){
        margin-right: 0;
      }
    }
    &:checked + label:before{
      content: '\f00c';
      font-family: 'FontAwesome';
      color: #00b9e5;;
      font-size: 15px;
    }
  }
}
</style>
