import express from "express";

 
import{
    
    getAllUser,
    getUserDetails,
    login,
    register,
    
} from "../controllers/user.js";

const router = express.Router();


router.get("/all",getAllUser);

router.get("/new",register);
router.post("/login",login);

router.route("/userid/:id").get(getUserDetails);
 
  export default router;