<template>
  <v-layout row wrap justify-space-around align-content-space-around >
    <v-flex xs12 sm5 v-for="(post,index) in posts" :key="post.slug + '_' + index" mb-4 mx-2 class="bloglink">
      <router-link :to="'/blog/' + post.slug">
      <v-hover>
        <v-card light slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto carditem">
          <v-layout column justify-space-around align-content-space-around fill-height>
            <v-flex xs12 py-2>
              <v-card dark>
                <v-card-text class="px-2"><h2>{{ post.title }}</h2></v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 py-2>
              <v-img aspect-ratio="1.8" align-center contain class="white--text listimage" v-if="post.featured_image" :src="post.featured_image" alt="">
              </v-img>
            </v-flex>
            <v-flex xs12 py-2>
              <v-card-text>{{post.summary}}</v-card-text>
            </v-flex>
              <v-card dark>
                <v-btn flat color="orange" class="hidden-sm-and-up">Read</v-btn>
                <v-card-text class="hidden-xs-only">{{formatDate(post.published)}}</v-card-text>
              </v-card>
            </v-layout>
          </v-card>
        </v-hover>
        </router-link>
    </v-flex>
  </v-layout>
</template>
<script>
import moment from 'moment'
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          // console.log(res.data)
          this.posts = res.data.data
        })
      },
      formatDate( value ){
        return moment(value).format("LLL")
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>
<style>
.carditem{
  height:550px;
}
.bloglink a
{
  text-decoration: none;
}
</style>
