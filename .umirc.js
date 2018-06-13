export default {
  plugins: [
      ['umi-plugin-dva',{
        extend:['umi-plugin-polyfills']
      } ],
  ],
  pages:{
      '/': { context: { title: 'ListPage' } },
  },
  disableDynamicImport:true,
  hashHistory: true
}
