<template>
  <back-page></back-page>
  <!-- 文本 (Text) -->
  <div class="demo">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
  </div>

  <!-- 多行文本 (textarea) -->
  <div class="demo">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
  </div>

  <!-- 复选框 (Checkbox) -->
  <div class="demo">
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div id="v-model-multiple-checkboxes" class="demo">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
  </div>

  <!-- 单选框 (Radio) -->
  <div id="v-model-radiobutton" class="demo">
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>

  <!-- 选择框 (Select) -->
  <div id="v-model-select" class="demo">
    <select v-model="selected" multiple>
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  <div id="v-model-select-dynamic" class="demo">
    <select v-model="selected">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>

  <!-- 值绑定 -->
  <div class="demo">
    <!-- 当选中时，`picked` 为字符串 "a" -->
    <input type="radio" v-model="picked" value="a" />

    <!-- `toggle` 为 true 或 false -->
    <input type="checkbox" v-model="toggle" />

    <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>
  </div>

  <!-- 复选框 (Checkbox) -->
  <div class="demo">
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
  </div>

  <!-- 修饰符 -->
  <div class="demo">
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg" />
    <input v-model.number="age" type="number" />
    <input v-model.trim="msg" />
  </div>
</template>

<script>
import backPage from '../../components/Back.vue'
export default {
  name: 'form',

  data () {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      toggle: false,
      msg: '',
      age: ''
    }
  },

  components: {
    backPage
  },

  methods: {}
}
</script>