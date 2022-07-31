 <template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="img" label="图片" width="100">
        <template v-slot:default="scope">
          <el-image :src="scope.row.img"/>
        </template>
      </el-table-column>
    </el-table>
  </template>


<script lang="ts" >
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: '/image/cover1.png'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: '/image/cover2.png'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: '/image/cover2.png'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: '/image/cover1.png'
  },
]
export default {
  name: "showpicture",

  data(){
    return{
      tableData
    }
  }
}
</script>

<style scoped>

</style>
