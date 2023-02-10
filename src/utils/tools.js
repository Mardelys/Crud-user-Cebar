export async function getData() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/")
   const json = await response.json()
   return json.map(user => {
      return {
         ...user
      }
   })
}