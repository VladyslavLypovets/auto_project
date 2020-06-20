<template>
  <div class="form-group">
    <label :for="id" class="lebel-input-admin">{{ text }}</label>
    <textarea class="textarea-input-admin" :id="id" name="story"></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextareaAdmin',
  props: {
    text: String,
    id: String,
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-group{
    display: flex;
    align-items: flex-start;
    .lebel-input-admin{
      color: #242424;
      font-size: 14px;
      font-weight: 400;
      width: 20%;
    }
    .textarea-input-admin{
      height: 150px;
      border-radius: 5px;
      border: 1px solid #e8e8e8;
      background-color: #ffffff;
      flex: 1;
      margin-left: 20px;
    }
    @media (max-width: 767px){
      flex-wrap: wrap;
      .lebel-input-admin{
        width: 100%;
        margin-bottom: 15px;
      }
      .textarea-input-admin{
        margin-left: 0;
      }
    }
  }
</style>
