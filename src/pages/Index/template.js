import request from '@/helpers/request.js'
import auth from '@/api/auth.js'

window.request = request
window.auth = auth

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick1() {
      this.$message.error('错了哦，这是一条错误消息');
      request('/auth/login', 'post', {
        username: 'hunger7',
        password: '123456'
      }).then(data => {
        console.log(data)
      })
    },
    onClick2() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message.success('点了确定');
        }
      });
    }
  }
}
