import bcrypt from "bcrypt";
export function adminRout(app,Admin,cors,Jwt)
{

    app.use(cors());
    app.post('/admin',async(req,res)=>{
        try {
            const data = req.body;
            data["password"] = bcrypt.hashSync(data.password,10);
            const admin = new Admin(data);
            await admin.save();
            res.send("admin added sucessfuly");
        } catch (error) {
            console.log(error);
        }  
    });

    app.post('/admin/login',async(req,res)=>{
        try {
        const admin = await Admin.findOne({phone:req.body.phone});
        if (admin) {
            if (bcrypt.compareSync(req.body.password,admin.password)) {
                const token=Jwt.sign({adminPhone:admin.phone},"secret1234");
                res.send({message:"Login successful", token:token});
            } else {
                res.send({message:"Invalid phone or password"});
            }
            
        } else {
            res.send({message:"Invalid phone or password"});
        }
    } catch (error) {
            console.log(error);
    }
    })
}
