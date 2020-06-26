<template>
  <div class="form-group">
    <label :for="id" class="lebel-input-admin">{{ text }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      name="entity"
      v-model="value"
      class="input-admin"
    >
  </div>
</template>

<script>
export default {
  name: 'InputAdmin',
  props: {
    text: String,
    id: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    value: ''
  })
}
</script>

<style lang="scss" scoped>
  .form-group{
    display: flex;
    align-items: center;
    .lebel-input-admin{
      color: #242424;
      font-size: 14px;
      font-weight: 400;
      width: 20%;
    }
    .input-admin{
      padding-left: 15px;
      flex: 1;
      height: 45px;
      border-radius: 5px;
      border: 1px solid #e8e8e8;
      background-color: #ffffff;
      margin-left: 20px;
      color: #676767;
      font-size: 16px;
      font-weight: 400;
    }
    @media (max-width: 767px){
      flex-wrap: wrap;
      .lebel-input-admin{
        width: 100%;
        margin-bottom: 15px;
      }
      .input-admin{
        margin-left: 0;
      }
    }
  }
</style>
