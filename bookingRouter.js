

export function bookRoutes(app,Booking)
{
    app.post('/booking',async(req,res)=>{
        try {
            const data = req.body;
            const booking = new Booking(data);
            await booking.save();
            res.send("Booking done into hotel database");
        } catch (error) {
            console.log(error);
        }
    });

    app.get('/booking',async(req,res)=>{
        try {
            const booking = await Booking.find();
            res.send({booking:booking});
        } catch (error) {
            console.log(error);
        }
    });

    app.get('/booking/:rno',async(req,res)=>{
        try {
            const booking = await Booking.findOne({rno:req.params.rno});
            if (booking==null) {
                res.send("Booking not found in hotel database");
               }
               else{
                 res.send({booking:booking});
               }
        } catch (error) {
            console.log(error);
        }
    });

    app.put('/booking/:rno',async(req,res)=>{
        try {
            const data = req.body;
            await Booking.updateOne({rno:req.params.rno},data);
            res.send("Booking updated Sucessfuly in hotel database");
        } catch (error) {
            console.log(error);
        }
    })
    app.delete('/booking/:rno',async(req,res)=>{
        try {
            await Booking.deleteOne({rno:req.params.rno});
            res.send("Booking deleted Sucessfuly from hotel database");
        } catch (error) {
            console.log(error);
        }
    })
}