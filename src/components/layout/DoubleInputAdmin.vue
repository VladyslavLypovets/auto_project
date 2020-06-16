<template>
  <div class="form-group form-group-double-input">
    <label :for="id" class="lebel-input-admin">{{ text }}</label>
    <div class="double">
      <input
      type="text"
      :id="id"
      name="entity"
      class="double-input-admin"
      :value="value"
      @input="val => $emit('input', val.target.value)"
    >
    <input
      type="text"
      :id="id"
      name="entity"
      class="double-input-admin"
      :value="value"
      @input="val => $emit('input', val.target.value)"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoubleInputAdmin',
  props: ['text', 'id', 'value']
}
</script>

<style lang="scss" scoped>
.form-group-double-input{
    display: flex;
    align-items: center;
    .lebel-input-admin{
      color: #242424;
      font-size: 14px;
      font-weight: 400;
      width: 20%;
    }
    .double{
      .double-input-admin{
        padding-left: 15px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #e8e8e8;
        background-color: #ffffff;
        margin-left: 20px;
        color: #676767;
        font-size: 16px;
        font-weight: 400;
        flex: unset;
        width: 48%;
      }
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
    @media (max-width: 1199px){
      .double{
        flex-wrap: wrap;
        .double-input-admin{
          width: 100%;
          margin-left: 0;
          flex: unset;
        }
      }
    }
    @media (max-width: 767px){
      flex-wrap: wrap;
      .lebel-input-admin{
        width: 100%;
        margin-bottom: 15px;
      }
      .double-input-admin{
        margin-left: 0;
      }
    }
  }
</style>
