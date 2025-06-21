// export const StaticIP =  "http://localhost:4001/"
// export const StaticIP = process.env.NEXT_PUBLIC_API_URL;
//export const StaticIP =  "http://77.37.125.3:4001/"

export const StaticIP =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4001/' // local
    : process.env.NEXT_PUBLIC_API_URL; // prod (Railway)
