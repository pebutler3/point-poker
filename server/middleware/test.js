export default defineEventHandler((event) => {
  console.log('New request: ' + getRequestURL(event))
  // console.log(process.env)
})

