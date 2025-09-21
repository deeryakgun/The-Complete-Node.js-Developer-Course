const { MongoClient, ObjectId } = require('mongodb')

const connectionURL= 'mongodb://localhost:27017/'
const databaseName = 'task-manager'

async function main() {
    const client = new MongoClient(connectionURL)
  
 /*   try {
      // Bağlantıyı kur
      await client.connect()
      console.log("Connected successfully to MongoDB")
  
      const db = client.db(databaseName)
  
      // Veri ekle
      const result = await db.collection('users').insertOne({
        name: 'Derya',
        age: 23
      })
  
      console.log("Insert success:", result.insertedId)
    } catch (err) {
      console.error("Insert failed!", err)
    } finally {
      await client.close()
    }
*/
    try{
        await client.connect()
        console.log('Connected successfuly to MongoDB')

        const db = client.db(databaseName)

       /*  --FOR CREATE--
       const result = await db.collection('tasks').insertMany([
            {
                description: 'Clean the house',
                completed: true
            },{
                description: 'Renew inspection',
                completed: true
            },{
                description: 'Pot plants',
                completed: false
            }
        ])
        console.log('Insert succes: ', result.insertedIds)

        

        --FOR READ--
        const task = await db.collection('tasks').findOne({_id: new ObjectId("68cfeebddf3f5268e962e668")})
        console.log(task)

        const tasks = await db.collection('tasks').find({completed: false}).toArray()
        console.log(tasks)
        


        //FOR UPDATE
        await db.collection('users').updateOne(
            { _id: new ObjectId("68cc6d8f6dd5b8635710f0b5")},
            {
                $set : { name: 'Emre'
                }
            }).then((result)=>{
                console.log(result)
            }).catch((error)=>{
                console.log(error)
            })


            await db.collection('tasks').updateMany({
                completed: false
            },{
                $set:{
                    completed: true
                }
            }).then((result)=>{
                console.log('success ',result)
            }).catch((error)=>{
                console.log('error ',error)
            })
            */


            //FOR DELETE
            await db.collection('tasks').deleteMany({
                description: 'Update'
            }).then((result)=>{
                console.log('success', result)
            }).catch((error)=>{
                console.log('error', error)
            })



    }catch(err){
        console.error(err)
    }finally{
        await client.close()
    }
  }
  
  main()