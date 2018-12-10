import marked from 'marked'
import blog from '@/api/blog'

export default {
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createdAt: ''
    }

  },
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId:this.blogId}).then(res=>{
      this.title = res.data.title
      this.rawContent = res.data.content
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  }
}
