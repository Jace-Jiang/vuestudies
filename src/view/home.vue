<template>
  <div class="content">
    <div class="menu">
      <ul>
        <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
        <li
          :class="[{ active: item.show }]"
          @click="changeli(index, item)"
          v-for="(item, index) in headerData"
          :key="item.id"
        >
          {{ item.name }}
          <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
          <ul v-show="item.show">
            <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
            <li
              v-for="a in item.list"
              v-on:click.stop="linkMenu(a.path)"
              :key="a.id"
            >
              {{ a.text }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",

  data() {
    return {
      headerData: [{
        id: 9,
        name: '共同学习实操',
        list: [
          { id: 1, text: "表单", path: "common/async-form" },
          { id: 2, text: "表单验证", path: "build" }
        ],
        show: false
      }]
    }
  },

  components: {},

  methods: {
    changeli: function (ind, item) {
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      this.headerData.forEach(i => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        if (i.show !== this.headerData[ind].show) {
          i.show = false;
        };
      });
      // 取反(true或false)
      item.show = !item.show;
    },
    linkMenu: function (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .menu {
    float: left;
    margin-left: 5px;
    width: 370px;
    background-color: #51add8;
    color: #ffffff;
    > ul {
      width: 100%;
      @include clearfix;
      > li {
        width: 88%;
        border: 1px solid #ffffff;
        cursor: pointer; // float: left;
        color: 20px;
        text-align: center;
        line-height: 60px;
        &:hover {
          background-color: #ff9800;
        }
        > ul {
          width: 86%;
          background: rgb(72, 175, 132);
          li {
            &:hover {
              background: #bfd851;
            }
          }
        }
      }
      .active {
        background-color: #ff9800;
      }
    }
  }
}
</style>
