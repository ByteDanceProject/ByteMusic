methods:{
   login()
   {
  axios.post('api/v1/accesstoken',{
    accesstoken:this.info
  })
  .then(
  res=>{
  const info=this.info;
  setCookie('accesstoken' ,this.info)
  setCookie('name',res.data.loginname)
  setCookie('number',res.data.number)
  this.$router.push( {name:'mine',params:{user:res.data.loginname} } )
  }
)
.catch(
err => {
alert(err)
  }
)
 }

 beforeRouteEnter(to,from,next)
  {
      if(to.meta.requireAuth){//此组件需要登录
      if(getCookie('accesstoken')==null){
        next({
          path:'/ucenter'
        })
      }else{
      next()
      }
}
    else{
      next();//否则不需要登录，直接进入路由
      }
    }
//退出操作
//退出登录
logout() 
{
            delCookie('number')//名字要对应getCookie的值
            delCookie('accesstoken')
            delCookie('name')
            this.$router.push({
              path: " /ucenter"
            })
}
  
}



