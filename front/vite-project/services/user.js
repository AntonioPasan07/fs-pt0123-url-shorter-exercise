

export const info = (client) => async()=> {
 try{
  const {data} = await client.get('/users')
  return data

 }catch{error}{
 return null
 }
}