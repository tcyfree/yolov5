<template>
  <div id="Header">
    <div id="word">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "桑蚕疾病监测",
      activeIndex: "1",
    };
  },
  methods: {},
};
</script>
<style scoped>
#Header {
  padding-top: 30px;
  width: 100%;
  margin: 10px auto;
}

#word {
  margin-bottom: 37px;
  margin-right: 110px;
  height: 60px;
  line-height: 3.2em;
  letter-spacing: 8px;
  text-align: center;
}

h1 {
  /*text-align: center;*/
  color: #21b3b9;
  letter-spacing: 30px;
  font-size: 2.3em;
}

.el-menu-demo {
  width: 80%;
  margin: 0px auto;
  padding: 0px auto;
}

.top-left-edition span i {
  float: left;
  margin-right: 10px;
}

i,
input,
label {
  vertical-align: middle;
}

i {
  border: 0;
  display: block;
  cursor: pointer;
}

.top-left-edition span {
  float: left;
  font-size: 16px;
  color: #999999;
  line-height: 24px;
  margin-right: 40px;
}
</style>


