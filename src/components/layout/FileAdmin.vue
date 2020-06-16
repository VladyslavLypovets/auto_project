<template>
  <div class="form-group">
    <p>{{ text }}</p>
    <label :for="id" class="lebel-input-admin">Прикрепить файл</label>
    <input :id="id" name="myFile" type="file" class="d-none">
  </div>
</template>

<script>
export default {
  name: 'FileAdmin',
  props: ['text', 'id']
}
</script>

<style lang="scss" scoped>
  .form-group{
    display: flex;
    align-items: center;
    p{
      color: #242424;
      font-size: 14px;
      font-weight: 400;
      width: 20%;
    }
    .lebel-input-admin{
      cursor: pointer;
      width: 184px;
      height: 45px;
      border-radius: 5px;
      border: 1px solid #e8e8e8;
      background-color: #f6f6f6;
      margin-left: 20px;
      color: #00b9e5;
      font-size: 14px;
      font-weight: 400;
      text-decoration: underline;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 767px){
      flex-wrap: wrap;
      p{
        width: 100%;
        margin-bottom: 15px;
      }
      .lebel-input-admin{
        margin-left: 0;
        width: 100%;
      }
    }
  }
</style>
