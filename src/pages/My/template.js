import blog from '@/api/blog'
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, {page: this.page})
      .then(res => {
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
      })
  },
  methods: {
    splitDate(dateStr) {
      let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    async onDelete(blogId) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({blogId})

      this.$message({
        type: 'success',
        message: '删除成功!'
      });

      this.blogs = this.blogs.filter(blog => blog.id != blogId)
      console.log(blogId)

    },
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, {page: newPage})
        .then(res => {
          this.page = res.page
          this.total = res.total
          this.blogs = res.data
          this.$router.push({path: "/my", query: {page: newPage}})
        })
    }
  }
}
