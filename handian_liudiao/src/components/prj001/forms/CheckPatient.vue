<template>
  <el-dialog title="审核" class="my-dialog"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false" width="70%" center>

    <el-form ref="patientInfo" :model="checkData" label-width="130px" label-position="left">

      <el-form-item label="审核状态">
        <el-radio-group v-model="checkData.is_checked">
          <el-radio label="未审核">未审核</el-radio>
          <el-radio label="审核通过">审核通过</el-radio>
          <el-radio label="审核不通过">审核不通过</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="不通过原因">
        <el-input type="textarea"
                  :disabled="checkData.is_checked != '审核不通过'"
                  :autosize="{ minRows: 2, maxRows: 100}"
                  v-model="checkData.reasons_for_not_passing"></el-input>
      </el-form-item>

    </el-form>
      <span slot="footer">
        <el-button type="primary" @click="checkPatient">确定</el-button>
        <el-button @click="dialogVisible=false">取消</el-button>
      </span>
  </el-dialog>
</template>

<script>
import { apiCheckPatient } from '@/api/api-prj001'
export default {
    name:'CheckPatient',
    data () {
      return {
        checkData: {id:1, is_checked:'未审核', reasons_for_not_passing:'填写原因'},
        dialogVisible: false,
      }

    },
    methods: {
      checkPatient () {
          apiCheckPatient(this.checkData)
          .then( (res)=> {
            this.$message({message: '提交成功',type: 'success'})
            this.dialogVisible = false
            this.$parent.searchPatient()
            // this.$parent.getPatients()
            }
          )
          .catch()
      }
    },
    created() {
        this.$on("checkEvent", function(data) {
        this.dialogVisible = true
        this.checkData = data
      });
    }
}

</script>

<style lang="scss">

</style>
