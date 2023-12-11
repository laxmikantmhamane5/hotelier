
export function roomRout(app,Rooms)
{
    app.post('/room',async(req,res)=>{
        try {
            const data = req.body;
            const room = new Rooms(data);
            await room.save();
            res.send("Room inserted into hotel database");
        } catch (error) {
            console.log(error);
        }
    });

    app.get('/room',async(req,res)=>{
        try {
            const room = await Rooms.find();
            res.send({room:room});
        } catch (error) {
            console.log(error);
        }
    });

    app.get('/room/:rno',async(req,res)=>{
        try {
            const room = await Rooms.findOne({rno:req.params.rno});
            if (room==null) {
                res.send("Room not found in hotel database");
               }
               else{
                 res.send({room:room});
               }
        } catch (error) {
            console.log(error);
        }
    });

    app.put('/room/:rno',async(req,res)=>{
        try {
            const data = req.body;
            await Rooms.updateOne({rno:req.params.rno},data);
            res.send("Room updated Sucessfuly in hotel database");
        } catch (error) {
            console.log(error);
        }
    });
    app.delete('/room/:rno',async(req,res)=>{
        try {
            await Rooms.deleteOne({rno:req.params.rno});
            res.send("Room deleted Sucessfuly from hotel database");
        } catch (error) {
            console.log(error);
        }
    });
}