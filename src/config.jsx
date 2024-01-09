const config = {
   host: "localhost",
   port: "3000",
   baseUrl: `${this.host}:${this.port}`,
   urls:{
      post: `${baseUrl}/post`,
      get: `${baseUrl}/get`
   }
}

export default config;