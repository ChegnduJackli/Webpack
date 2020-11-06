    <template>
    <el-row>
     <el-col :span="12"><div class="grid-content bg-purple">test</div></el-col>
     <el-col :span="12"><div class="grid-content bg-purple-light">test2 {{msg}}</div></el-col>
    </el-row>
    </template>


    <style scoped>
      .bg-purple-dark {
            background: #99a9bf;
        }

        .bg-purple {
            background: #464647;
        }

        .bg-purple-light {
            background: #e5e9f2;
        }

        .grid-content {
            border-radius: 4px;
            min-height: 36px;
        }
</style>
<script>
export default {
    name:'elementui',
     data() {
        return {
            msg:'jack'
        }
    },
}
</script>