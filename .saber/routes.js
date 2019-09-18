
    export default [
      {
              path: "/2019/04/16/cant-belive",
              meta: {
                __relative: '_posts/cant-belive.md',
                __pageId: '64f04c9e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-cant-belive-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/_posts/cant-belive.md?saberPage=64f04c9e")
                
              }
            },
{
              path: "/2019/04/15/even-more",
              meta: {
                __relative: '_posts/even-more.md',
                __pageId: '329d1b81'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-even-more-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/_posts/even-more.md?saberPage=329d1b81")
                
              }
            },
{
              path: "/2019/04/29/first-post",
              meta: {
                __relative: '_posts/first-post.md',
                __pageId: '57ebb1a4'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-first-post-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/_posts/first-post.md?saberPage=57ebb1a4")
                
              }
            },
{
              path: "/2019/04/17/if-only",
              meta: {
                __relative: '_posts/if-only.md',
                __pageId: 'ca419466'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-if-only-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/_posts/if-only.md?saberPage=ca419466")
                
              }
            },
{
              path: "/2019/04/18/more-content",
              meta: {
                __relative: '_posts/let-there-be-more.md',
                __pageId: '1aec33b6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-let-there-be-more-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/_posts/let-there-be-more.md?saberPage=1aec33b6")
                
              }
            },
{
              path: "/2019/04/30/second-post",
              meta: {
                __relative: '_posts/second-post.md',
                __pageId: '881372a0'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-second-post-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/_posts/second-post.md?saberPage=881372a0")
                
              }
            },
{
              path: "/about/about",
              meta: {
                __relative: 'about/about.md',
                __pageId: '58264731'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-about-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/about/about.md?saberPage=58264731")
                
              }
            },
{
              path: "/cv",
              meta: {
                __relative: 'cv/cv.md',
                __pageId: '5dbd0626'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--cv-cv-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/cv/cv.md?saberPage=5dbd0626")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'home/index.md',
                __pageId: '6019ad2c'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--home-index-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/home/index.md?saberPage=6019ad2c")
                
              }
            },
{
              path: "/posts",
              meta: {
                __relative: 'posts/posts.md',
                __pageId: '130c57a5'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--posts-posts-md" */ "/Users/limitlessloop/Repos/personal-site-saber/pages/posts/posts.md?saberPage=130c57a5")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/Users/limitlessloop/Repos/personal-site-saber/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]