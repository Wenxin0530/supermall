module.exports = {
    configureWebpack:{
        resolve: {
            //后缀名这里已默认配置
          alias:{
            // "@" : 'src' 内部默认已配置
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views' :  '@/views'
          }  
        }
    }
}