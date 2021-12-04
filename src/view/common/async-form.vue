<template>
  <div class="container">
    <div class="box">
      登录名：<input type="text" name="name" v-model="form.loginName" />
      <span style="color:red;" v-if="errors.fields && errors.fields.loginName">
        {{ errors.fields.loginName[0].message }}
      </span>
      用户名：<input type="text" name="name1" v-model="form.userName" />
      <span style="color:red;" v-if="errors.fields && errors.fields.userName">
        {{ errors.fields.userName[0].message }}
      </span>
      <button type="primary" @click="_click1">提交</button>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "async-form",
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        loginName: "",
        userName: ""
      },
      errors: {},
      rules: {
        loginName: {
          validator: (rule, value, callback) => {
            // if (!value) return callback(`该项为必填项`);

            //1.手机号码的校验
            var phone = /^1(3|4|5|7|8|6|9)\d{9}$/;
            if (!phone.test(value)) {
              return callback(new Error("请输入11位电话号码"));
            }

            callback();
          }
        },
        userName: {
          validator: (rule, value, callback) => {
            if (!value) return callback(`用户名长度为3-10`);
            callback();
          }
        }
      }
    };
  },
  methods: {
    async _click1() {
      this.errors = await new AsyncValidator(this.rules).validate(this.form).catch(e => e);
      if (this.errors) return;
      this.errors = {};
    }
  }

}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  height: 100%;
  margin-bottom: 100%;
  .box {
    display: flex;
    flex-direction: column;
    input {
      width: 300px;
      margin-top: 20px;
    }
    button {
      width: 300px;
      margin-top: 30px;
    }
  }
}
</style>