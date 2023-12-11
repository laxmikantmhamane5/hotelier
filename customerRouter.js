
    
export function custRout(app,Customer,cors)
{
    app.use(cors());
    app.post('/customer',async(req,res)=>{
        try {
            const customer = req.body;
            const cust = new Customer(customer);
            await cust.save();
            res.send("Customer Inserted Sucessfuly..");
        } catch (error) {
            console.log(error);
        }
    });
    app.get('/customer',async(req,res)=>{
        try {
            const customer = await Customer.find();
            res.send({customer:customer});
        } catch (error) {
            console.log(error);
        }  
    });
    app.get('/customer/:cno',async(req,res)=>{
        try {
            const customer = await Customer.findOne({cno:req.params.cno});
            if (customer==null) {
                res.send("Student not found");
               }
               else{
                 res.send({customer:customer});
               }
        } catch (error) {
            console.log(error);
        }
    });
    app.put('/customer/:cno',async(req,res)=>{
        try {
            const customer = req.body;
            await Customer.updateOne({cno:req.params.cno},customer);
            res.send("Customer updated Sucessfuly");
        } catch (error) {
            console.log(error);
        }
    })
    app.delete('/customer/:cno',async(req,res)=>{
        try {
            await Customer.deleteOne({cno:req.params.cno});
            res.send("Customer deleted Sucessfuly");
        } catch (error) {
            console.log(error);
        }
    })
}