const royalSoloEntry = require(`./royalDb.json`)
let globalId = 3

   module.exports = {
    getRoyalSoloEntry: (req, res)=> { 
           res.status(200).send(royalSoloEntry)
    },

    createRoyalSoloEntry: (req, res) => {
            const{title, video} =req.body
            let newRoyalSolo = { title, video, id: globalId}
            royalSoloEntry.push(newRoyalSolo)
            res.status(200).send(royalSoloEntry)
            globalId++
        },

        deleteRoyalSoloEntry: (req, res) => {
            let index = req.params.id  //what i needed to delete was in the request
            console.log(req.params.id)
            for(i = 0; i < royalSoloEntry.length; i++){
               console.log(royalSoloEntry[i].id, index)
                if(royalSoloEntry[i].id + "" === index){   //if this id is equal to the one that i am looking for, then we delete.
                    royalSoloEntry.splice(i, 1)
                res.status(200).send(royalSoloEntry)
           }
            }
        }
    }


    